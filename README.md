Contacts App

A simple, clean React contacts manager with search, add, edit, delete, favorites (⭐), and a sleek dark mode UI.

Live Demo: https://contacts-app-rosy.vercel.app/

✨ Features

🔎 Live search across name, phone, and email (case-insensitive)

➕ Add new contacts

✏️ Edit existing contacts (form pre-fills)

🗑️ Delete contacts (with confirmation)

⭐ Toggle favorites

🌓 Always-on dark mode styling

⚛️ Built with React hooks (useState, useRef)

🧠 In-memory data (no backend) — great for learning or a starter template

🚀 Quick Start

You can run this with either Vite or Create React App depending on how the project was initialized. Try the Vite commands first; if they don’t exist, use the CRA ones.

# 1) Install dependencies
npm install

# 2) Start the dev server
# If Vite:
npm run dev
# If CRA:
# npm start

# 3) Build for production
npm run build

# 4) Preview the production build (Vite only)
# npm run preview


Then open http://localhost:5173
 (Vite default) or http://localhost:3000
 (CRA default).

🧱 Project Structure (typical)
src/
  App.jsx
  main.jsx             # or index.jsx (entry)
  index.css
public/
package.json

🧩 Tech Stack

React (functional components + hooks)

Vite or Create React App (bundler/dev server)

Vercel (hosting)

No external state library or UI framework required.

🧭 How to Use

Search: Type in the search bar to filter contacts in real time.

Add: Use the form at the bottom; click Add.

Edit: Click Edit on a card → form pre-fills → click Update (or Cancel).

Favorite: Click the star (⭐/☆) to toggle.

Delete: Click Delete and confirm.

📦 Deploying to Vercel
Option A — Git Integration (recommended)

Push your repo to GitHub/GitLab/Bitbucket.

In Vercel: New Project → Import your repo.

Build settings:

Build Command: npm run build

Output Directory:

Vite → dist

CRA → build

Click Deploy. Every push to your main branch will auto-deploy.
