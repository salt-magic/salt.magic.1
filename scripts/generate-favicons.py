"""Generate favicon assets for the Salt.Magic Next.js site.

Crops the droplet icon from reference/logos/logo no background.png
(dropping the "Salt.Magic" wordmark) and exports three files into site/app/:
- icon.png         (512x512, transparent)
- apple-icon.png   (180x180, warm-white #FFFFFF background)
- favicon.ico      (multi-res 16/32/48, transparent)

Run from repo root: python scripts/generate-favicons.py
"""

from pathlib import Path
import sys

from PIL import Image
import numpy as np

REPO_ROOT = Path(__file__).resolve().parent.parent
SRC = REPO_ROOT / "reference" / "logos" / "logo no background.png"
OUT_DIR = REPO_ROOT / "site" / "app"


def find_droplet_bottom(img: Image.Image) -> int:
    """Find the Y coordinate where the droplet ends and the wordmark begins
    by detecting the first vertical gap of empty rows after content starts."""
    arr = np.array(img)
    alpha = arr[:, :, 3]
    height = alpha.shape[0]

    row_sums = alpha.sum(axis=1)
    threshold = max(1, row_sums.max() * 0.005)
    is_content = row_sums > threshold

    min_gap = int(height * 0.03)
    content_started = False
    gap_start = None

    for y in range(height):
        if is_content[y]:
            content_started = True
            gap_start = None
        elif content_started:
            if gap_start is None:
                gap_start = y
            if y - gap_start + 1 >= min_gap:
                return gap_start

    bbox = img.getbbox()
    return bbox[1] + int((bbox[3] - bbox[1]) * 0.62)


def extract_droplet(src_path: Path) -> Image.Image:
    img = Image.open(src_path).convert("RGBA")
    bbox = img.getbbox()
    if bbox is None:
        raise RuntimeError(f"No non-transparent content in {src_path}")

    crop_bottom = find_droplet_bottom(img)
    left, top, right, _ = bbox
    cropped = img.crop((left, top, right, crop_bottom))

    drop_bbox = cropped.getbbox()
    if drop_bbox is None:
        raise RuntimeError("Droplet crop yielded empty image")
    return cropped.crop(drop_bbox)


def square_pad(img: Image.Image, margin_ratio: float = 0.10) -> Image.Image:
    w, h = img.size
    side = max(w, h)
    margin = int(side * margin_ratio)
    canvas_size = side + 2 * margin
    canvas = Image.new("RGBA", (canvas_size, canvas_size), (0, 0, 0, 0))
    paste_x = (canvas_size - w) // 2
    paste_y = (canvas_size - h) // 2
    canvas.paste(img, (paste_x, paste_y), img)
    return canvas


def composite_on_white(img: Image.Image) -> Image.Image:
    white = Image.new("RGBA", img.size, (255, 255, 255, 255))
    white.alpha_composite(img)
    return white


def main() -> int:
    if not SRC.exists():
        print(f"ERROR: source not found: {SRC}", file=sys.stderr)
        return 1
    OUT_DIR.mkdir(parents=True, exist_ok=True)

    droplet = extract_droplet(SRC)
    print(f"Droplet crop: {droplet.size}")

    canvas = square_pad(droplet, margin_ratio=0.10)
    print(f"Padded square canvas: {canvas.size}")

    icon_path = OUT_DIR / "icon.png"
    icon = canvas.resize((512, 512), Image.LANCZOS)
    icon.save(icon_path, "PNG", optimize=True)
    print(f"Wrote {icon_path} ({icon_path.stat().st_size} bytes)")

    apple_path = OUT_DIR / "apple-icon.png"
    apple_canvas = composite_on_white(canvas)
    apple = apple_canvas.resize((180, 180), Image.LANCZOS).convert("RGB")
    apple.save(apple_path, "PNG", optimize=True)
    print(f"Wrote {apple_path} ({apple_path.stat().st_size} bytes)")

    ico_path = OUT_DIR / "favicon.ico"
    ico_source = canvas.resize((256, 256), Image.LANCZOS)
    ico_source.save(
        ico_path, format="ICO", sizes=[(16, 16), (32, 32), (48, 48)]
    )
    print(f"Wrote {ico_path} ({ico_path.stat().st_size} bytes)")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
