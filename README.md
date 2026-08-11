# 🚀 Modern Portfolio

> A modern, responsive, and interactive personal portfolio built with **Next.js**, **React.js**, and modern web technologies.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge\&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge\&logo=react\&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge\&logo=tailwindcss\&logoColor=white)](https://tailwindcss.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES2025-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

A sleek single-page portfolio website designed to showcase personal information, skills, experience, projects, and contact information through an engaging and interactive user experience.

---

## 📸 Preview

<p align="center">
  <img src="./public/images/portfolio-preview.png" alt="Portfolio Preview" width="900"/>
</p>

---

## ✨ Features

* ⚡ **Next.js** powered application
* ⚛️ Built with **React.js**
* 🎨 Modern and responsive UI
* 🌓 Dark / Light mode
* 🎬 Smooth and interactive animations
* 📜 Single-page navigation
* 🖱️ Smooth scrolling between sections
* 📱 Fully responsive design
* 💼 Project showcase
* 👨‍💻 About & experience section
* 🛠️ Skills and technology showcase
* 📄 Resume / CV integration
* 📬 Contact section
* 🔗 Social media integration
* ♿ Accessibility-focused components
* 🚀 SEO-friendly structure
* ⚙️ Optimized for production
* ☁️ Ready for Vercel deployment

---

## 🛠️ Tech Stack

| Technology                  | Purpose           |
| --------------------------- | ----------------- |
| **Next.js**                 | React framework   |
| **React.js**                | UI development    |
| **Tailwind CSS**            | Styling           |
| **Motion / Framer Motion**  | Animations        |
| **JavaScript / TypeScript** | Application logic |
| **Lucide / React Icons**    | Icons             |
| **Vercel**                  | Deployment        |
| **Git & GitHub**            | Version control   |

---

## 🚀 Getting Started

Follow the instructions below to run this project locally.

### Prerequisites

Make sure you have installed:

* Node.js `>= 20`
* npm, yarn, or pnpm
* Git

You can verify your installation:

```bash
node --version
npm --version
git --version
```

---

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/modern-portfolio.git
```

Navigate into the project:

```bash
cd modern-portfolio
```

---

### 2. Install Dependencies

Using npm:

```bash
npm install
```

Using pnpm:

```bash
pnpm install
```

Using yarn:

```bash
yarn install
```

---

### 3. Configure Environment Variables

Create a `.env.local` file:

```bash
cp .env.example .env.local
```

Example:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Optional
NEXT_PUBLIC_EMAIL=
NEXT_PUBLIC_GITHUB_URL=
NEXT_PUBLIC_LINKEDIN_URL=
```

> Never commit `.env.local` or sensitive credentials to the repository.

---

### 4. Start Development Server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

The application should now be available locally.

---

## 🎬 Animation System

Animations are used throughout the portfolio to create a smooth and engaging browsing experience without overwhelming the user.

### Animation Examples

* Hero entrance animation
* Scroll reveal
* Fade-in effects
* Slide transitions
* Hover interactions
* Project card animations
* Navigation transitions
* Button micro-interactions
* Image transitions

Example using Motion:

```jsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  <h2>Featured Projects</h2>
</motion.div>
```

Animations are intentionally kept lightweight to maintain a good balance between visual quality and performance.

---

## 🎨 Customization

The portfolio is designed to be easily customized.

### Personal Information

Update your:

* Name
* Profile photo
* Biography
* Job title
* Social links
* Contact information

### Skills

Add or remove technologies from the skills data:

```js
export const skills = [
  {
    name: "React",
    category: "Frontend",
  },
  {
    name: "Next.js",
    category: "Frontend",
  },
];
```

### Projects

Projects can be managed from a centralized data file:

```js
export const projects = [
  {
    title: "Project Name",
    description: "Project description",
    image: "/images/project.png",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    github: "https://github.com/username/project",
    demo: "https://project-demo.com",
  },
];
```

This approach makes it easier to add new projects without modifying the main UI components.

---

## 🧪 Available Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Create production build  |
| `npm run start` | Start production server  |
| `npm run lint`  | Run ESLint               |

Example:

```bash
npm run lint
npm run build
npm run start
```

---

## 📦 Production Build

Before deploying, create a production build:

```bash
npm run build
```

Then run the production server:

```bash
npm run start
```

It's recommended to run the build locally before deployment to catch potential errors.

---

## ☁️ Deployment

This project is optimized for deployment with **Vercel**.

### Deploy with Vercel

1. Push the repository to GitHub.
2. Import the repository into Vercel.
3. Configure your environment variables.
4. Deploy.

After deployment, Vercel will automatically build and deploy the application.

### Manual Deployment

The project can also be deployed to other hosting platforms that support Next.js.

Make sure the hosting environment supports:

```text
Node.js
Next.js
Server-side rendering
Static generation
```

---

## 🔐 Environment Variables

Environment variables should be stored in `.env.local` for local development.

Example:

```env
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_EMAIL=
NEXT_PUBLIC_GITHUB_URL=
NEXT_PUBLIC_LINKEDIN_URL=
```

For production, configure these variables through your hosting provider.

**Do not expose private API keys or credentials using `NEXT_PUBLIC_*`.**

---

## ⚡ Performance

The project follows several performance-oriented practices:

* Optimized images with Next.js Image
* Lazy loading where appropriate
* Minimal client-side JavaScript
* Reusable components
* Optimized animations
* Responsive images
* Semantic HTML
* Production builds with Next.js optimization

---

## ♿ Accessibility

Accessibility is considered throughout the application.

The project aims to provide:

* Semantic HTML
* Keyboard-friendly navigation
* Accessible interactive elements
* Sufficient color contrast
* Descriptive image alt text
* Reduced-motion considerations

Users who prefer reduced motion should be able to browse the portfolio without excessive animation.

---

## 🗺️ Roadmap

* [x] Responsive layout
* [x] Single-page navigation
* [x] Project showcase
* [x] Animation system
* [x] Responsive design
* [ ] Blog integration
* [ ] CMS integration
* [ ] Advanced project filtering
* [ ] Internationalization (i18n)
* [ ] Analytics dashboard
* [ ] More accessibility improvements

---

## 🤝 Contributing

Contributions, suggestions, and improvements are welcome.

### Fork the Repository

```bash
git clone https://github.com/yourusername/modern-portfolio.git
```

Create a new branch:

```bash
git checkout -b feature/your-feature
```

Make your changes and commit:

```bash
git add .
git commit -m "feat: add your feature"
```

Push your branch:

```bash
git push origin feature/your-feature
```

Then open a Pull Request.

### Contribution Guidelines

Before submitting a Pull Request:

* Keep components reusable
* Follow the existing code style
* Avoid unnecessary dependencies
* Ensure responsive behavior
* Test the production build
* Update documentation when necessary

---

## 🐛 Issues & Bug Reports

If you find a bug or have a suggestion, please open an issue.

When reporting a bug, include:

* Description of the problem
* Steps to reproduce
* Expected behavior
* Actual behavior
* Browser / device information
* Screenshots if applicable

---

## 📜 License

This project is licensed under the **MIT License**.

You are free to:

* Use the project
* Modify the source code
* Distribute your modifications
* Use it for personal or commercial projects

See the [`LICENSE`](LICENSE) file for more information.

---

## 👨‍💻 Author

### Tegar Manthofani

**Software Developer**

I build modern, responsive, and interactive web applications using technologies such as React, Next.js, and modern JavaScript.

<p>
  <a href="https://github.com/manthofani">
    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"/>
  </a>
  <a href="https://linkedin.com/in/manthofani">
    <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"/>
  </a>
</p>

---

## ⭐ Support

If you find this project useful or inspiring, consider giving it a ⭐ on GitHub.

Your support is greatly appreciated!

---

<p align="center">
  Built with ❤️ using Next.js and React
</p>
