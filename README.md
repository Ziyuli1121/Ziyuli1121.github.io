# Ziyu Li

Source for [Ziyu Li's personal website](https://ziyuli1121.github.io/), built with Jekyll and the al-folio theme.

## Local Development

```sh
docker compose up
```

Open <http://127.0.0.1:8080/>.

## Content Map

- `_pages/about.md`: homepage content
- `_data/cv.yml`: general information, projects, honors, and experience sections
- `_news/`: news entries
- `_bibliography/papers.bib`: selected publications
- `assets/`: images, audio, PDFs, and other static files

## CV publishing

The source of truth is `CV_ZiyuLi.tex` on `main` in the private
[Ziyuli1121/CV](https://github.com/Ziyuli1121/CV) repository, linked to Overleaf.
Use Overleaf's **Integrations > GitHub > Push Overleaf changes to GitHub** after
editing. Saving in Overleaf alone does not synchronize with GitHub.

The CV repository's **Publish CV** workflow compiles and validates the document,
then updates `assets/pdf/CV.pdf` and `assets/pdf/CV.source.json` here using a
repository-scoped deploy key. This push triggers the website deployment.
The public URL remains <https://ziyuli1121.github.io/assets/pdf/CV.pdf>.
Publishing takes a few minutes, with possible additional GitHub/CDN cache delays.

Do not edit the PDF independently in this repository: `CV.source.json` records
its source commit and SHA-256, which the website checks before deployment.
The private LaTeX source is not copied here. If CV compilation fails, the previous
published PDF remains available. If publication stalls, check **Publish CV** in
the CV repository and **Deploy site** / **pages build and deployment** here.
