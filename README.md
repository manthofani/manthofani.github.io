# Manthofani — Personal Portfolio

A modern and responsive personal portfolio website built with **React, Vite, and Tailwind CSS**.

🌐 **Live Website:** https://manthofani.github.io/

## ✨ Features

* ⚡ Fast and lightweight with Vite
* ⚛️ Built with React
* 🎨 Styled with Tailwind CSS
* 📱 Fully responsive design
* ✨ Smooth animations and interactions
* 🧩 Reusable React components
* 🎯 Clean and modern portfolio layout
* 🚀 Automatically deployed to GitHub Pages using GitHub Actions

## 🛠️ Tech Stack

* **React** — UI library
* **Vite** — Frontend build tool
* **Tailwind CSS** — Styling
* **Motion** — Animations
* **Lucide React** — Icons
* **TypeScript** — Type safety
* **GitHub Pages** — Hosting
* **GitHub Actions** — Continuous deployment

## 📁 Project Structure

```text
manthofani.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
├── src/
├── index.html
├── package.json
├── vite.config.ts
└── README.md
```

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:

* [Node.js](https://nodejs.org/)
* npm

### Installation

Clone the repository:

```bash
git clone https://github.com/manthofani/manthofani.github.io.git
```

Enter the project directory:

```bash
cd manthofani.github.io
```

Install dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:3000
```

### Production Build

Create a production build:

```bash
npm run build
```

The generated files will be placed inside:

```text
dist/
```

You can preview the production build locally with:

```bash
npm run preview
```

## 🚀 Deployment

This project is automatically deployed to **GitHub Pages** using **GitHub Actions**.

The deployment workflow is located at:

```text
.github/workflows/deploy.yml
```

Every push to the `master` branch triggers the deployment workflow:

```text
Push to master
      ↓
GitHub Actions
      ↓
npm install
      ↓
npm run build
      ↓
Upload dist/
      ↓
GitHub Pages
```

The live website is available at:

**https://manthofani.github.io/**

## ⚙️ Vite Configuration

Because this repository uses the special GitHub Pages domain:

```text
manthofani.github.io
```

the Vite base path is configured as:

```ts
base: '/',
```

This ensures that JavaScript, CSS, images, and other assets are loaded correctly from the root domain.

## 🧹 Available Scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start development server             |
| `npm run build`   | Build the application for production |
| `npm run preview` | Preview the production build         |
| `npm run lint`    | Run TypeScript type checking         |
| `npm run clean`   | Remove generated files               |

## 📄 License

This project is for personal portfolio purposes.

Feel free to use the ideas and structure as inspiration for your own portfolio.

---

Built with ❤️ using React + Vite.
