"""
Extract structured SUGGESTED COPY + LEO NOTES per section from
reference/Salt-Magic-SEO-Copy-Review-V2.docx (Leo's annotated version).

Doc structure per section:
  <Section Header e.g. "1. Meta / SEO Tags">
  <description>
  CURRENT COPY
  <current text lines>
  SUGGESTED COPY (SEO-OPTIMIZED)
  <suggested text lines>
  KEYWORDS INTEGRATED
  <keyword bullets>
  YOUR NOTES / EDITS
  <Leo's inline notes>
  ---
  (next section)

Output: outputs/V24-suggested-copy-with-notes.md
"""
import sys, io, re
from pathlib import Path
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
from docx import Document

ROOT = Path(__file__).resolve().parent.parent
DOCX = ROOT / "reference" / "Salt-Magic-SEO-Copy-Review-V2.docx"
OUT = ROOT / "outputs" / "V24-suggested-copy-with-notes.md"

SECTION_HEAD = re.compile(r"^\s*(\d+)\.\s+(.{3,80})$")
MARKER_CURRENT = re.compile(r"^\s*CURRENT COPY\s*$", re.IGNORECASE)
MARKER_SUGGESTED = re.compile(r"^\s*SUGGESTED COPY", re.IGNORECASE)
MARKER_KEYWORDS = re.compile(r"^\s*KEYWORDS INTEGRATED", re.IGNORECASE)
MARKER_NOTES = re.compile(r"^\s*YOUR NOTES", re.IGNORECASE)


def main():
    doc = Document(DOCX)
    paragraphs = [p.text for p in doc.paragraphs]

    sections = []
    current_section = None
    current_block = None  # 'current', 'suggested', 'keywords', 'notes', None

    for idx, line in enumerate(paragraphs):
        stripped = line.strip()
        sec_match = SECTION_HEAD.match(stripped)

        # New section
        if sec_match and len(stripped) < 90:
            if current_section:
                sections.append(current_section)
            current_section = {
                "num": sec_match.group(1),
                "title": sec_match.group(2).strip(),
                "current": [],
                "suggested": [],
                "keywords": [],
                "notes": [],
                "start_idx": idx,
            }
            current_block = None
            continue

        if current_section is None:
            continue

        if MARKER_CURRENT.match(stripped):
            current_block = "current"
            continue
        if MARKER_SUGGESTED.match(stripped):
            current_block = "suggested"
            continue
        if MARKER_KEYWORDS.match(stripped):
            current_block = "keywords"
            continue
        if MARKER_NOTES.match(stripped):
            current_block = "notes"
            continue

        if current_block and stripped:
            current_section[current_block].append(stripped)

    if current_section:
        sections.append(current_section)

    print(f"Found {len(sections)} sections")

    OUT.parent.mkdir(parents=True, exist_ok=True)
    with OUT.open("w", encoding="utf-8") as f:
        f.write("# V24 — SUGGESTED COPY (SEO-Optimized) + Leos Notes\n\n")
        f.write(f"**Quelle:** `reference/Salt-Magic-SEO-Copy-Review-V2.docx`\n\n")
        f.write(f"**Sections:** {len(sections)}\n\n")
        f.write("---\n\n")

        for s in sections:
            f.write(f"## {s['num']}. {s['title']}\n\n")

            if s['suggested']:
                f.write("### SUGGESTED COPY (SEO-Optimized)\n\n")
                for line in s['suggested']:
                    f.write(f"{line}\n\n")

            if s['notes']:
                f.write("### LEO'S NOTES\n\n")
                for line in s['notes']:
                    f.write(f"> {line}\n\n")
            else:
                f.write("### LEO'S NOTES\n\n_(no inline notes from Leo for this section)_\n\n")

            if s['keywords']:
                f.write("### KEYWORDS INTEGRATED\n\n")
                for line in s['keywords']:
                    f.write(f"- {line}\n")
                f.write("\n")

            f.write("---\n\n")

    print(f"Wrote: {OUT}")


if __name__ == "__main__":
    main()
