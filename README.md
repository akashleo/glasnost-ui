# Glasnost UI 🌊

**A cross-framework UI component library with stunning liquid glass aesthetics.**

Glasnost UI provides a suite of beautiful, modern components for React, Vue, and Svelte, all built with a unique liquid glass effect. The library is designed to be easy to use, highly customizable, and performant, enabling you to create visually striking interfaces with minimal effort.

---

## ✨ Key Features

- **💧 Liquid Glass Design**: Beautifully crafted components with fluid glass effects, using advanced CSS and SVG filters.
- **🌐 Cross-Framework**: Native components for React, Vue, and Svelte, built idiomatically for each framework.
- **🚀 Monorepo Architecture**: Managed with `pnpm` and `Turborepo` for a streamlined development experience.
- **🎨 Highly Customizable**: Easily theme components using CSS variables to match your brand.
- **📱 Fully Responsive**: Components are designed to be responsive and work across all screen sizes.
- **♿ Accessibility-First**: ARIA compliance, keyboard navigation, and reduced motion support are built-in.
- **🎯 TypeScript Support**: Full TypeScript support with type definitions for all components.

---

## 📚 Packages

This monorepo contains the following packages:

| Package | Version | Description | README |
| :--- | :--- | :--- | :--- |
| `packages/react` | [![npm](https://img.shields.io/npm/v/@glasnost-ui/react.svg?style=flat-square)](https://www.npmjs.com/package/@glasnost-ui/react) | React components | [Read Me](./packages/react/README.md) |
| `packages/vue` | [![npm](https://img.shields.io/npm/v/@glasnost-ui/vue.svg?style=flat-square)](https://www.npmjs.com/package/@glasnost-ui/vue) | Vue components | [Read Me](./packages/vue/README.md) |
| `packages/svelte` | [![npm](https://img.shields.io/npm/v/@glasnost-ui/svelte.svg?style=flat-square)](https://www.npmjs.com/package/@glasnost-ui/svelte) | Svelte components | [Read Me](./packages/svelte/README.md) |
| `packages/shared` | [![npm](https://img.shields.io/npm/v/@glasnost-ui/shared.svg?style=flat-square)](https://www.npmjs.com/package/@glasnost-ui/shared) | Shared styles, types, and utilities | [Read Me](./packages/shared/README.md) |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v16 or higher)
- [pnpm](https://pnpm.io/) (v8 or higher)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/glasnost.git
    cd glasnost
    ```

2.  **Install dependencies:**
    This project uses `pnpm` workspaces. Install all dependencies from the root directory.
    ```bash
    pnpm install
    ```

### Running the Docs Apps

You can run the documentation app for each framework to see the components in action.

-   **React Docs:**
    ```bash
    pnpm --filter @glasnost-ui/react-docs dev
    ```
    Open [http://localhost:3001](http://localhost:3001) in your browser.

-   **Vue Docs:**
    ```bash
    pnpm --filter @glasnost-ui/docs dev
    ```
    Open [http://localhost:3000](http://localhost:3000) in your browser.

-   **Svelte Docs:**
    ```bash
    pnpm --filter @glasnost-ui/svelte-docs dev
    ```
    Open [http://localhost:3002](http://localhost:3002) in your browser.

---

## 🤝 Contributing

We welcome contributions of all kinds! Whether it's reporting a bug, proposing a new feature, or submitting a pull request, your help is appreciated.

### Contribution Steps

1.  **Fork the repository** and create your branch from `main`.
2.  **Make your changes.** Please ensure your code follows the project's coding style.
3.  **Add or update tests** for your changes.
4.  **Ensure all tests pass** by running `pnpm test`.
5.  **Submit a pull request** with a clear description of your changes.

### Monorepo Scripts

This project uses [Turborepo](https://turbo.build/repo) to manage monorepo scripts. You can run scripts from the root `package.json` to target all packages at once.

-   `pnpm dev`: Start development servers for all packages and docs apps.
-   `pnpm build`: Build all packages and docs apps.
-   `pnpm test`: Run tests for all packages.
-   `pnpm lint`: Lint all packages.
-   `pnpm clean`: Clean all `dist` and `node_modules` folders.
-   `pnpm format`: Format the entire codebase with Prettier.

You can also run scripts for a specific package using the `--filter` flag:
```bash
# Build only the React package
pnpm --filter @glasnost-ui/react build
```

### Coding Style

-   **Code Formatting**: We use [Prettier](https://prettier.io/) for automatic code formatting. Please run `pnpm format` before committing your changes.
-   **TypeScript**: All code should be written in TypeScript with strict type checking.

### Adding a New Component

To add a new component, follow these steps:

1.  Create the component file in the respective framework's `packages/[framework]/src/components` directory.
2.  Export the new component from `packages/[framework]/src/index.ts`.
3.  Add the component to the documentation app in `apps/[framework]-docs` to showcase its functionality.
4.  Ensure the component is themable, responsive, and accessible.

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details. 