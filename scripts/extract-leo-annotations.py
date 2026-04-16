"""
Extract Leo's inline annotations from his reviewed copy of Salt-Magic-SEO-Copy-Review-V2.docx.

Strategy:
- Walk both docs paragraph by paragraph in lockstep using SequenceMatcher.
- For every "insert" or "replace" op in the new doc, emit an annotation with
  surrounding context (the section header above + the previous non-empty line).
- Section headers are detected by leading number pattern like "1. ", "2. ", "Section 5:" etc.
- Output: outputs/V24-leo-inline-annotations.md
"""
import sys, io, re, os
from pathlib import Path
from difflib import SequenceMatcher

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding='utf-8')

from docx import Document

ROOT = Path(__file__).resolve().parent.parent
ORIG = ROOT / "outputs" / "Salt-Magic-SEO-Copy-Review-V2.docx"
NEW = ROOT / "reference" / "Salt-Magic-SEO-Copy-Review-V2.docx"
OUT = ROOT / "outputs" / "V24-leo-inline-annotations.md"

SECTION_HEAD_RE = re.compile(
    r"^\s*(\d+\.\s+|Section\s+\d+|Homepage|Partner Page|Appendix|FAQ|Hero|Meta|Trust|Social|Why|Ingredients|Comparison|Benefits|For Everyone|Image Break|Products|Testimonials|Story|Blog|CTA|Newsletter|Footer|Market Opportunity|Category Proof|Distribution|Revenue|Product Formats)",
    re.IGNORECASE,
)


def load_paragraphs(path: Path):
    doc = Document(path)
    return [p.text for p in doc.paragraphs]


def detect_section(prev_paragraphs, idx):
    """Walk backwards from idx until we hit a section header."""
    for j in range(idx, -1, -1):
        line = prev_paragraphs[j].strip()
        if not line:
            continue
        if SECTION_HEAD_RE.match(line) and len(line) < 120:
            return line
    return "(no section header found)"


def previous_nonempty(paragraphs, idx):
    for j in range(idx - 1, -1, -1):
        if paragraphs[j].strip():
            return paragraphs[j].strip()
    return ""


def main():
    orig = load_paragraphs(ORIG)
    new = load_paragraphs(NEW)

    print(f"Original paragraphs: {len(orig)}")
    print(f"Leo's version paragraphs: {len(new)}")

    sm = SequenceMatcher(a=orig, b=new, autojunk=False)
    ops = sm.get_opcodes()

    annotations = []  # list of dicts

    for tag, i1, i2, j1, j2 in ops:
        if tag == "equal":
            continue

        if tag == "insert":
            # Pure inserts in Leo's version
            for k in range(j1, j2):
                line = new[k].strip()
                if not line:
                    continue
                section = detect_section(new, k)
                context = previous_nonempty(new, k)
                annotations.append({
                    "type": "INSERT",
                    "section": section,
                    "context": context,
                    "leo_text": line,
                    "leo_paragraph_idx": k,
                })

        elif tag == "replace":
            # Replacements: collect both sides
            old_block = [orig[k].strip() for k in range(i1, i2) if orig[k].strip()]
            new_block = [new[k].strip() for k in range(j1, j2) if new[k].strip()]
            section = detect_section(new, j1)
            context = previous_nonempty(new, j1)

            # If old_block is empty or just whitespace, treat as pure inserts
            if not old_block:
                for txt in new_block:
                    annotations.append({
                        "type": "INSERT",
                        "section": section,
                        "context": context,
                        "leo_text": txt,
                        "leo_paragraph_idx": j1,
                    })
            elif not new_block:
                for txt in old_block:
                    annotations.append({
                        "type": "DELETE",
                        "section": section,
                        "context": context,
                        "leo_text": f"(removed) {txt}",
                        "leo_paragraph_idx": j1,
                    })
            else:
                annotations.append({
                    "type": "REPLACE",
                    "section": section,
                    "context": context,
                    "leo_text": "\n".join(new_block),
                    "old_text": "\n".join(old_block),
                    "leo_paragraph_idx": j1,
                })

        elif tag == "delete":
            old_block = [orig[k].strip() for k in range(i1, i2) if orig[k].strip()]
            if not old_block:
                continue
            section = detect_section(new, j1) if j1 < len(new) else "(end)"
            for txt in old_block:
                annotations.append({
                    "type": "DELETE",
                    "section": section,
                    "context": previous_nonempty(new, j1) if j1 < len(new) else "",
                    "leo_text": f"(removed) {txt}",
                    "leo_paragraph_idx": j1,
                })

    print(f"Annotations found: {len(annotations)}")

    # Group by section
    by_section = {}
    for ann in annotations:
        by_section.setdefault(ann["section"], []).append(ann)

    # Write markdown
    OUT.parent.mkdir(parents=True, exist_ok=True)
    with OUT.open("w", encoding="utf-8") as f:
        f.write("# V24 — Leo's Inline-Annotationen (Roh-Diff)\n\n")
        f.write(f"**Quelle:** `reference/Salt-Magic-SEO-Copy-Review-V2.docx` (Leo, 16. April)  \n")
        f.write(f"**Vergleich gegen:** `outputs/Salt-Magic-SEO-Copy-Review-V2.docx` (Original V23, 14. April)  \n")
        f.write(f"**Annotationen total:** {len(annotations)}\n\n")
        f.write("---\n\n")

        for section, anns in by_section.items():
            f.write(f"## {section}\n\n")
            f.write(f"_{len(anns)} Annotation(en)_\n\n")
            for ann in anns:
                f.write(f"### [{ann['type']}] @ Paragraph {ann['leo_paragraph_idx']}\n")
                if ann["context"]:
                    f.write(f"**Kontext (Zeile davor):** {ann['context'][:300]}\n\n")
                if ann["type"] == "REPLACE":
                    f.write(f"**Original:**\n> {ann['old_text'][:600]}\n\n")
                    f.write(f"**Leo:**\n> {ann['leo_text'][:600]}\n\n")
                else:
                    f.write(f"**Leo:**\n> {ann['leo_text'][:600]}\n\n")
                f.write("---\n\n")

    print(f"Wrote: {OUT}")


if __name__ == "__main__":
    main()
