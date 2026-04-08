# R. Siraddeen — Portfolio

Personal portfolio built with **React + Vite + Tailwind CSS**.

## Getting Started

```bash
npm install
npm run dev
```

Then open http://localhost:5173

## Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder — deploy that folder to Netlify, Vercel, or GitHub Pages.

## Deploy to GitHub Pages

1. Push this project to a GitHub repo (e.g. `siraddeen.github.io`)
2. Run `npm run build`
3. Push the `dist/` folder contents to the `gh-pages` branch
   Or use the `gh-pages` npm package:
   ```bash
   npm install --save-dev gh-pages
   ```
   Add to package.json scripts:
   ```json
   "deploy": "gh-pages -d dist"
   ```
   Then run `npm run build && npm run deploy`

## Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        ← Navigation bar
│   │   ├── Cursor.jsx        ← Custom cursor
│   │   ├── Hero.jsx          ← Hero section
│   │   ├── About.jsx         ← About + stats
│   │   ├── Skills.jsx        ← Skills cards
│   │   ├── Experience.jsx    ← Work timeline
│   │   ├── Projects.jsx      ← Project cards
│   │   ├── Education.jsx     ← Education + certs
│   │   ├── Contact.jsx       ← Contact section
│   │   ├── Footer.jsx        ← Footer
│   │   └── useFadeIn.js      ← Scroll animation hook
│   ├── styles/
│   │   └── global.css        ← All custom CSS + Tailwind
│   ├── data.js               ← ⭐ ALL YOUR CONTENT IS HERE
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## How to Add a New Project

Open `src/data.js` and add an entry to the `projects` array:

```js
{
  num: "PROJECT 03",
  title: "Your Project Name",
  desc: "Short description of what it does.",
  stack: ["React", "Node.js", "MongoDB"],
  liveUrl: "https://your-live-url.com",
  githubUrl: "https://github.com/Siraddeen/your-repo",
},
```

That's it — the Projects section will automatically show the new card.

## How to Update Personal Info

Edit the `personal` object at the top of `src/data.js`.
