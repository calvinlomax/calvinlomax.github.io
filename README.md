# Calvin J. Lomax Portfolio

Personal portfolio website for Calvin J. Lomax, a Data Science student at Indiana University Bloomington focused on machine learning, computer vision, and quantitative analysis.

## Live Site

[https://calvinlomax.github.io](https://calvinlomax.github.io)

## Overview

This repository contains a responsive single-page portfolio with:

- About and current role highlights
- Current research and ongoing work
- Selected project cards with external GitHub links
- Downloadable resume PDF
- Contact section with `mailto`-based form flow
- Lightweight reveal-on-scroll animations

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript

No build system or framework is required.

## Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/calvinlomax.github.io.git
   cd calvinlomax.github.io
   ```
2. Open directly:
   ```bash
   open index.html
   ```
3. Or serve over a local web server:
   ```bash
   python3 -m http.server 8000
   ```
4. Visit `http://localhost:8000`.

## Project Structure

```text
.
├── index.html                      # Site content and section structure
├── styles.css                      # Theme, layout, responsiveness, animation styles
├── script.js                       # Reveal animation + contact form behavior
├── assets/
│   ├── resume/Calvin_Lomax_Resume.pdf
│   └── poster/cjlomax-Poster.pdf
└── repos.txt                       # External project repository links
```

## Editing Content

- Update copy, links, and sections in `index.html`
- Update visual design and responsive rules in `styles.css`
- Update interaction logic in `script.js`
- Replace resume/poster files in `assets/` as needed

## Deployment

This repo is set up for GitHub Pages-style static hosting. If published as `<username>.github.io`, GitHub serves `index.html` from the repository root.
