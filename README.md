# Portfolio

This repository contains the source code for my personal portfolio website.

The portfolio showcases selected projects, case studies, and information about my background, skills, and experience. It’s designed to be simple, clear, and focused on highlighting my work.

## Overview

- Clean, minimal layout
- Selected projects with case studies
- Clear explanation of my role and process
- Easy navigation and contact access

## Tech Stack

- HTML
- CSS
- JavaScript  

## Notes for me 
## How to deploy updates

git add -A
git commit -m "Update XYZ"
git push origin main
Remove-Item -Recurse -Force .\dist -ErrorAction SilentlyContinue
npm run build
npx gh-pages -d dist --no-history
