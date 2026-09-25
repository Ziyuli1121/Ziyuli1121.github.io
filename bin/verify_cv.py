"""Prevent publishing a PDF that does not match its source manifest."""

import hashlib
import json
from pathlib import Path


root = Path(__file__).resolve().parents[1]
metadata = json.loads((root / "assets/pdf/CV.source.json").read_text())
pdf = (root / "assets/pdf/CV.pdf").read_bytes()
if not pdf.startswith(b"%PDF-"):
    raise SystemExit("CV.pdf is not a PDF")
if hashlib.sha256(pdf).hexdigest() != metadata["pdf_sha256"]:
    raise SystemExit("CV.pdf differs from its source manifest; update it through Ziyuli1121/CV")
print("CV verified: source commit " + metadata["source_commit"])
