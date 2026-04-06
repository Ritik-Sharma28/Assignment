# Elementum Assignment

Responsive React landing page built with Vite, Tailwind CSS, and Framer Motion.

## Stack

- React
- Tailwind CSS
- Framer Motion
- Docker + Nginx

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## Docker

```bash
docker build -t elementum-assignment .
docker run -p 8080:80 elementum-assignment
```

Then open `http://localhost:8080`.

## Project structure

- `src/App.jsx`: page composition and section content
- `src/components/Reveal.jsx`: reusable reveal animation wrapper
- `src/components/SectionHeading.jsx`: shared section heading component
- `src/styles.css`: Tailwind import, theme fonts, and global styling
