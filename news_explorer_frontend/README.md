# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

link for Video - https://www.loom.com/share/41b8ef22a9194267ac5fc432e9839e58

Main tools and technologies you used

“I built a responsive full-stack style React news application using Vite, React Router, REST APIs, localStorage authentication simulation, and responsive CSS layouts. The app integrates with the News API to fetch live articles, supports saving articles, conditional rendering, loading states, and mobile-first responsive design.”

Hard parts of the project

Mobile Hamburger Menu

Switching navigation behavior for mobile
Handling open/close state
Showing different layouts on Saved Articles page

The mobile menu required custom conditional rendering and responsive CSS behavior

“One challenge I faced was keeping saved articles synced with LocalStorage after refresh.

Another challenge was conditional rendering for login behavior and protected UI features.

AI tools - ChatGPT to help debug React issues and improve styling

Responsive Design
Making desktop, tablet, and 320px mobile layouts all work
Fixing mobile navigation
Adjusting card grids and footer layouts

Responsive CSS was one of the hardest parts because small layout changes could affect desktop and mobile differently

Pull request in - (frontend-stage-1) - https://github.com/Delmasc/news-explorer/tree/frontend-stage-1

http://localhost:5173/
