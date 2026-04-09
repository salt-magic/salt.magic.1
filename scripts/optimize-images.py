"""
Salt.Magic Image Optimizer
- Watermark-Entfernung via OpenCV Inpainting
- Resize + Qualitaetsoptimierung fuer Web
- WebP-Konvertierung (beste Kompression bei gleicher Qualitaet)

Abhaengigkeiten:
    pip install Pillow opencv-python numpy

Verwendung:
    # Einzelnes Bild optimieren (resize + komprimieren)
    python scripts/optimize-images.py input.jpg --output out/

    # Ganzen Ordner optimieren
    python scripts/optimize-images.py reference/product-pics/ --output site/public/images/optimized/

    # Automatisch Watermarks entfernen (Gemini-Sterne, Letterbox-Balken)
    python scripts/optimize-images.py input.jpg --auto-clean --output out/

    # Mit Watermark-Entfernung (interaktiv: Bereich markieren)
    python scripts/optimize-images.py input.jpg --remove-watermark --output out/

    # Mit Watermark-Maske (automatisch)
    python scripts/optimize-images.py input.jpg --watermark-mask mask.png --output out/

    # Max-Breite aendern (Default: 1920px)
    python scripts/optimize-images.py input.jpg --max-width 1200

    # Qualitaet aendern (Default: 82)
    python scripts/optimize-images.py input.jpg --quality 75

    # Als WebP ausgeben (Default)
    python scripts/optimize-images.py input.jpg --format webp

    # Als JPEG ausgeben
    python scripts/optimize-images.py input.jpg --format jpeg
"""

import argparse
import sys
from pathlib import Path

import numpy as np
from PIL import Image

try:
    import cv2
    HAS_CV2 = True
except ImportError:
    HAS_CV2 = False


# --- Auto Clean: Letterbox + Watermark Detection ---

def auto_crop_letterbox(img: Image.Image, threshold: int = 15) -> Image.Image:
    """Entfernt schwarze/fast-schwarze Balken (Letterbox) oben und unten."""
    arr = np.array(img)
    # Durchschnittliche Helligkeit pro Zeile
    row_brightness = arr.mean(axis=(1, 2)) if arr.ndim == 3 else arr.mean(axis=1)

    # Finde erste/letzte Zeile die heller als threshold ist
    non_black = np.where(row_brightness > threshold)[0]
    if len(non_black) == 0:
        return img

    top = non_black[0]
    bottom = non_black[-1] + 1

    # Auch Spalten pruefen (seltener, aber fuer Pillarbox)
    col_brightness = arr.mean(axis=(0, 2)) if arr.ndim == 3 else arr.mean(axis=0)
    non_black_cols = np.where(col_brightness > threshold)[0]
    left = non_black_cols[0] if len(non_black_cols) > 0 else 0
    right = (non_black_cols[-1] + 1) if len(non_black_cols) > 0 else arr.shape[1]

    # Nur croppen wenn mindestens 3px Balken erkannt
    cropped = False
    crop_box = [0, 0, img.width, img.height]
    if top > 3:
        crop_box[1] = top
        cropped = True
    if bottom < img.height - 3:
        crop_box[3] = bottom
        cropped = True
    if left > 3:
        crop_box[0] = left
        cropped = True
    if right < img.width - 3:
        crop_box[2] = right
        cropped = True

    if cropped:
        print(f"  Letterbox entfernt: {img.width}x{img.height} -> {crop_box[2]-crop_box[0]}x{crop_box[3]-crop_box[1]}")
        return img.crop(tuple(crop_box))
    return img


def detect_star_watermark(img_cv: np.ndarray) -> np.ndarray:
    """Erkennt Gemini/KI-Stern-Watermarks in den Ecken.
    Nutzt adaptiven Threshold relativ zum lokalen Hintergrund."""
    h, w = img_cv.shape[:2]
    mask = np.zeros((h, w), dtype=np.uint8)

    corner_size = 160
    corners = [
        (0, h - corner_size, corner_size, h),                # unten links
        (w - corner_size, h - corner_size, w, h),            # unten rechts
        (0, 0, corner_size, corner_size),                    # oben links
        (w - corner_size, 0, w, corner_size),                # oben rechts
    ]
    corner_names = ["unten-links", "unten-rechts", "oben-links", "oben-rechts"]

    gray = cv2.cvtColor(img_cv, cv2.COLOR_BGR2GRAY)

    for (x1, y1, x2, y2), name in zip(corners, corner_names):
        roi = gray[y1:y2, x1:x2]
        found = False

        # Methode 1: Adaptiver Threshold (helle Sterne auf dunklem BG)
        median_val = float(np.median(roi))
        std_val = float(roi.std())
        thresh = min(median_val + 2.5 * std_val, 250)

        _, binary = cv2.threshold(roi, thresh, 255, cv2.THRESH_BINARY)
        contours, _ = cv2.findContours(binary, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

        for cnt in contours:
            area = cv2.contourArea(cnt)
            if area < 100 or area > 8000:
                continue
            perimeter = cv2.arcLength(cnt, True)
            if perimeter == 0:
                continue
            circularity = 4 * np.pi * area / (perimeter * perimeter)
            hull = cv2.convexHull(cnt)
            hull_area = cv2.contourArea(hull)
            solidity = area / hull_area if hull_area > 0 else 1.0
            x, y, bw, bh = cv2.boundingRect(cnt)
            aspect = bw / bh if bh > 0 else 0

            is_star = (
                0.3 < circularity < 0.7
                and 0.5 < solidity < 0.85
                and 0.6 < aspect < 1.6
                and 200 < area < 6000
            )
            if is_star:
                pad = 15
                mx1 = max(0, x1 + x - pad)
                my1 = max(0, y1 + y - pad)
                mx2 = min(w, x1 + x + bw + pad)
                my2 = min(h, y1 + y + bh + pad)
                mask[my1:my2, mx1:mx2] = 255
                print(f"  Stern-Watermark erkannt: {name} (area={area:.0f})")
                found = True

        # Methode 2: Canny Edge Fallback (fuer Sterne auf hellem oder texturiertem BG)
        if not found:
            edges = cv2.Canny(roi, 30, 100)
            contours, _ = cv2.findContours(edges, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

            for cnt in contours:
                area = cv2.contourArea(cnt)
                if area < 500 or area > 8000:
                    continue
                perimeter = cv2.arcLength(cnt, True)
                if perimeter == 0:
                    continue
                circularity = 4 * np.pi * area / (perimeter * perimeter)
                hull = cv2.convexHull(cnt)
                hull_area = cv2.contourArea(hull)
                solidity = area / hull_area if hull_area > 0 else 1.0
                x, y, bw, bh = cv2.boundingRect(cnt)
                aspect = bw / bh if bh > 0 else 0

                is_star = (
                    0.02 < circularity < 0.7
                    and 0.4 < solidity < 0.85
                    and 0.7 < aspect < 1.4
                    and bw > 40 and bh > 40
                    and bw < 130 and bh < 130
                )
                if is_star:
                    pad = 15
                    mx1 = max(0, x1 + x - pad)
                    my1 = max(0, y1 + y - pad)
                    mx2 = min(w, x1 + x + bw + pad)
                    my2 = min(h, y1 + y + bh + pad)
                    mask[my1:my2, mx1:mx2] = 255
                    print(f"  Stern-Watermark erkannt: {name} (edge, area={area:.0f})")
                    found = True

    return mask


def auto_clean_image(img_pil: Image.Image, image_path: Path) -> Image.Image:
    """Automatische Bereinigung: Letterbox croppen + Stern-Watermarks entfernen."""
    # Schritt 1: Letterbox entfernen
    img_pil = auto_crop_letterbox(img_pil)

    if not HAS_CV2:
        return img_pil

    # Schritt 2: Stern-Watermarks erkennen und inpainten
    img_cv = cv2.cvtColor(np.array(img_pil), cv2.COLOR_RGB2BGR)
    mask = detect_star_watermark(img_cv)

    if mask.any():
        # Maske leicht vergroessern
        kernel = np.ones((5, 5), np.uint8)
        mask = cv2.dilate(mask, kernel, iterations=2)

        # Inpainting
        result = cv2.inpaint(img_cv, mask, inpaintRadius=7, flags=cv2.INPAINT_TELEA)
        img_pil = Image.fromarray(cv2.cvtColor(result, cv2.COLOR_BGR2RGB))
    else:
        print("  Kein Stern-Watermark erkannt")

    return img_pil


# --- Watermark Removal ---

def create_watermark_mask_interactive(image_path: Path) -> np.ndarray:
    """Oeffnet ein Fenster zum manuellen Markieren des Watermark-Bereichs.
    Linke Maustaste + ziehen = Bereich markieren.
    'r' = Reset, 'q' / Enter = Fertig.
    """
    if not HAS_CV2:
        print("FEHLER: opencv-python wird benoetigt. pip install opencv-python")
        sys.exit(1)

    img = cv2.imread(str(image_path))
    if img is None:
        print(f"FEHLER: Kann {image_path} nicht laden")
        sys.exit(1)

    # Vorschau skalieren falls zu gross
    h, w = img.shape[:2]
    scale = min(1.0, 1200 / max(h, w))
    preview = cv2.resize(img, (int(w * scale), int(h * scale))) if scale < 1.0 else img.copy()

    mask = np.zeros(preview.shape[:2], dtype=np.uint8)
    drawing = False
    brush_size = 15
    ix, iy = -1, -1

    def draw(event, x, y, flags, param):
        nonlocal drawing, ix, iy
        if event == cv2.EVENT_LBUTTONDOWN:
            drawing = True
            ix, iy = x, y
        elif event == cv2.EVENT_MOUSEMOVE and drawing:
            cv2.circle(mask, (x, y), brush_size, 255, -1)
            cv2.circle(preview, (x, y), brush_size, (0, 0, 255), -1)
        elif event == cv2.EVENT_LBUTTONUP:
            drawing = False
            cv2.circle(mask, (x, y), brush_size, 255, -1)
            cv2.circle(preview, (x, y), brush_size, (0, 0, 255), -1)

    window_name = "Watermark markieren (q=fertig, r=reset, +/-=Pinsel)"
    cv2.namedWindow(window_name, cv2.WINDOW_AUTOSIZE)
    cv2.setMouseCallback(window_name, draw)

    print("\n--- Watermark-Bereich markieren ---")
    print("Linke Maustaste + ziehen = markieren")
    print("+/- = Pinselgroesse aendern")
    print("r = Reset | q/Enter = Fertig\n")

    while True:
        cv2.imshow(window_name, preview)
        key = cv2.waitKey(1) & 0xFF
        if key in (ord("q"), 13):  # q or Enter
            break
        elif key == ord("r"):
            preview = cv2.resize(img, (int(w * scale), int(h * scale))) if scale < 1.0 else img.copy()
            mask = np.zeros(preview.shape[:2], dtype=np.uint8)
        elif key == ord("+"):
            brush_size = min(brush_size + 5, 100)
            print(f"Pinsel: {brush_size}px")
        elif key == ord("-"):
            brush_size = max(brush_size - 5, 3)
            print(f"Pinsel: {brush_size}px")

    cv2.destroyAllWindows()

    # Maske auf Originalgroesse skalieren
    if scale < 1.0:
        mask = cv2.resize(mask, (w, h), interpolation=cv2.INTER_NEAREST)

    return mask


def remove_watermark(image_path: Path, mask: np.ndarray) -> np.ndarray:
    """Entfernt Watermark via OpenCV Inpainting (Telea-Algorithmus)."""
    img = cv2.imread(str(image_path))
    if img is None:
        print(f"FEHLER: Kann {image_path} nicht laden")
        sys.exit(1)

    # Maske leicht vergroessern fuer bessere Uebergaenge
    kernel = np.ones((5, 5), np.uint8)
    mask_dilated = cv2.dilate(mask, kernel, iterations=2)

    # Inpainting — Telea ist schneller, Navier-Stokes (NS) oft besser bei Texturen
    result = cv2.inpaint(img, mask_dilated, inpaintRadius=7, flags=cv2.INPAINT_TELEA)

    return result


# --- Image Optimization ---

def optimize_image(
    img: Image.Image,
    max_width: int = 1920,
    quality: int = 82,
    output_format: str = "webp",
) -> Image.Image:
    """Resize + Qualitaetsoptimierung."""
    # EXIF-Rotation anwenden
    from PIL import ImageOps
    img = ImageOps.exif_transpose(img)

    # Resize wenn breiter als max_width
    w, h = img.size
    if w > max_width:
        ratio = max_width / w
        new_h = int(h * ratio)
        img = img.resize((max_width, new_h), Image.LANCZOS)

    # RGB sicherstellen (fuer JPEG/WebP)
    if img.mode in ("RGBA", "P") and output_format != "png":
        bg = Image.new("RGB", img.size, (255, 255, 255))
        if img.mode == "P":
            img = img.convert("RGBA")
        bg.paste(img, mask=img.split()[3])
        img = bg
    elif img.mode != "RGB" and output_format != "png":
        img = img.convert("RGB")

    return img


def save_optimized(img: Image.Image, output_path: Path, quality: int, output_format: str):
    """Speichert mit optimalen Einstellungen pro Format."""
    output_path.parent.mkdir(parents=True, exist_ok=True)

    if output_format == "webp":
        img.save(output_path, "WEBP", quality=quality, method=6)
    elif output_format == "jpeg":
        img.save(output_path, "JPEG", quality=quality, optimize=True, progressive=True)
    elif output_format == "png":
        img.save(output_path, "PNG", optimize=True)


def get_output_path(input_path: Path, output_dir: Path, output_format: str) -> Path:
    ext = ".webp" if output_format == "webp" else ".jpg" if output_format == "jpeg" else ".png"
    return output_dir / (input_path.stem + ext)


def format_size(size_bytes: int) -> str:
    if size_bytes < 1024:
        return f"{size_bytes} B"
    elif size_bytes < 1024 * 1024:
        return f"{size_bytes / 1024:.1f} KB"
    else:
        return f"{size_bytes / (1024 * 1024):.1f} MB"


def process_image(
    input_path: Path,
    output_dir: Path,
    max_width: int,
    quality: int,
    output_format: str,
    watermark_mask: np.ndarray | None = None,
    remove_wm_interactive: bool = False,
    auto_clean: bool = False,
):
    """Verarbeitet ein einzelnes Bild."""
    print(f"\n{'='*60}")
    print(f"  {input_path.name}")
    print(f"{'='*60}")

    original_size = input_path.stat().st_size

    # Auto-Clean: Letterbox + Stern-Watermarks automatisch entfernen
    if auto_clean:
        img = Image.open(input_path)
        img = auto_clean_image(img, input_path)
    elif remove_wm_interactive and HAS_CV2:
        mask = create_watermark_mask_interactive(input_path)
        if mask.any():
            result = remove_watermark(input_path, mask)
            img = Image.fromarray(cv2.cvtColor(result, cv2.COLOR_BGR2RGB))
        else:
            print("  Keine Markierung — ueberspringe Watermark-Entfernung")
            img = Image.open(input_path)
    elif watermark_mask is not None and HAS_CV2:
        result = remove_watermark(input_path, watermark_mask)
        img = Image.fromarray(cv2.cvtColor(result, cv2.COLOR_BGR2RGB))
    else:
        img = Image.open(input_path)

    original_dims = img.size

    # Optimieren
    img = optimize_image(img, max_width, quality, output_format)

    # Speichern
    output_path = get_output_path(input_path, output_dir, output_format)
    save_optimized(img, output_path, quality, output_format)

    new_size = output_path.stat().st_size
    reduction = (1 - new_size / original_size) * 100

    print(f"  Original:   {original_dims[0]}x{original_dims[1]}  {format_size(original_size)}")
    print(f"  Optimiert:  {img.size[0]}x{img.size[1]}  {format_size(new_size)}")
    print(f"  Ersparnis:  {reduction:.1f}%")

    return original_size, new_size


def main():
    parser = argparse.ArgumentParser(
        description="Salt.Magic Image Optimizer — Watermark-Entfernung + Web-Optimierung"
    )
    parser.add_argument("input", help="Bild oder Ordner")
    parser.add_argument("--output", "-o", default="outputs/optimized-images/", help="Ausgabe-Ordner (Default: outputs/optimized-images/)")
    parser.add_argument("--max-width", type=int, default=1920, help="Maximale Breite in px (Default: 1920)")
    parser.add_argument("--quality", "-q", type=int, default=82, help="Qualitaet 1-100 (Default: 82)")
    parser.add_argument("--format", "-f", choices=["webp", "jpeg", "png"], default="webp", help="Ausgabeformat (Default: webp)")
    parser.add_argument("--auto-clean", action="store_true", help="Automatisch Letterbox-Balken + Stern-Watermarks entfernen")
    parser.add_argument("--remove-watermark", action="store_true", help="Interaktive Watermark-Markierung oeffnen")
    parser.add_argument("--watermark-mask", type=str, help="Pfad zu einer Watermark-Maske (weiss = Watermark)")

    args = parser.parse_args()

    input_path = Path(args.input)
    output_dir = Path(args.output)

    if not input_path.exists():
        print(f"FEHLER: {input_path} existiert nicht")
        sys.exit(1)

    # Watermark-Maske laden falls angegeben
    wm_mask = None
    if args.watermark_mask:
        if not HAS_CV2:
            print("FEHLER: opencv-python wird fuer Watermark-Entfernung benoetigt")
            print("        pip install opencv-python")
            sys.exit(1)
        mask_img = cv2.imread(args.watermark_mask, cv2.IMREAD_GRAYSCALE)
        if mask_img is None:
            print(f"FEHLER: Kann Maske {args.watermark_mask} nicht laden")
            sys.exit(1)
        _, wm_mask = cv2.threshold(mask_img, 127, 255, cv2.THRESH_BINARY)

    # Bilder sammeln
    image_extensions = {".jpg", ".jpeg", ".png", ".webp", ".bmp", ".tiff"}

    if input_path.is_file():
        images = [input_path]
    else:
        images = sorted(
            p for p in input_path.rglob("*")
            if p.suffix.lower() in image_extensions
        )

    if not images:
        print("Keine Bilder gefunden.")
        sys.exit(0)

    print(f"\n{len(images)} Bild(er) gefunden")
    print(f"Format: {args.format.upper()} | Max-Breite: {args.max_width}px | Qualitaet: {args.quality}")
    print(f"Ausgabe: {output_dir}/")

    total_original = 0
    total_new = 0

    for img_path in images:
        try:
            orig, new = process_image(
                img_path,
                output_dir,
                args.max_width,
                args.quality,
                args.format,
                watermark_mask=wm_mask,
                remove_wm_interactive=args.remove_watermark,
                auto_clean=args.auto_clean,
            )
            total_original += orig
            total_new += new
        except Exception as e:
            print(f"\n  FEHLER bei {img_path.name}: {e}")

    # Zusammenfassung
    if len(images) > 1:
        total_reduction = (1 - total_new / total_original) * 100 if total_original > 0 else 0
        print(f"\n{'='*60}")
        print(f"  GESAMT")
        print(f"{'='*60}")
        print(f"  {len(images)} Bilder verarbeitet")
        print(f"  Vorher:  {format_size(total_original)}")
        print(f"  Nachher: {format_size(total_new)}")
        print(f"  Gespart: {format_size(total_original - total_new)} ({total_reduction:.1f}%)")


if __name__ == "__main__":
    main()
