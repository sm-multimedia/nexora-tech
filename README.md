# iPhone 18 Concept — Nexora Technologies

An independent, responsive product-page concept imagining a future iPhone. The experience combines cinematic video, scroll-triggered motion, and an interactive 3D product viewer.

> **Concept disclaimer:** This is an independent creative concept by Nexora Technologies, not an Apple product or an Apple-affiliated project. The visuals are illustrative and include supplied iPhone 15 Pro assets; they do not describe or promise real iPhone 18 features.

## Features

- Responsive landing page with desktop and mobile hero videos.
- Video highlights carousel and cinematic product sections.
- Interactive 3D model viewer with selectable finishes and size views.
- Scroll-based animations powered by GSAP.
- Responsive styling with Tailwind CSS and custom styles.

## Tech stack

- React 18
- Vite
- Three.js, React Three Fiber, and Drei
- GSAP and `@gsap/react`
- Tailwind CSS
- Sentry for browser monitoring

## Getting started

### Requirements

- Node.js (an active LTS release is recommended)
- npm

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Vite prints the local URL in the terminal (typically [http://localhost:5173](http://localhost:5173)).

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server. |
| `npm run build` | Create a production build in `dist/`. |
| `npm run preview` | Serve the production build locally for review. Run `npm run build` first. |
| `npm run lint` | Run ESLint across the project. |

## Project structure

```text
public/
  assets/
    images/       Product imagery and interface graphics
    videos/       Hero, highlight, and experience videos
  models/         3D model assets
src/
  components/     Page sections and reusable UI
  constants/      Highlight slides, model finishes, and view sizes
  utils/          Asset references and GSAP animation helpers
  App.jsx         Page composition
  index.css       Global styles and Tailwind layers
```

## Main page sections

- **Overview:** Responsive video hero and concept introduction.
- **Highlights:** A video carousel showcasing the visual story.
- **Design:** Interactive 3D viewer with finish and size selections.
- **Explore:** Concept imagery and video with animated details.
- **Experience:** A closing section with concept footage and the project disclaimer.

## Notes

- The 3D viewer and video sections use assets from `public/assets/` and `public/models/`. Keep those files available at their existing paths when building or deploying.
- Videos are muted and configured for inline playback. Autoplay behavior can vary by browser and device.
- Sentry is initialized in `src/main.jsx`, and the Vite Sentry plugin is configured in `vite.config.js`. Review the existing Sentry project configuration before using this project in another environment.

## Build for production

```bash
npm run build
npm run preview
```

The generated static site is written to `dist/` and can be deployed to a static hosting provider that supports Vite-built applications.
