# Glasnost UI 🌊

A cross-framework UI component library with stunning liquid glass aesthetics.

## Features

- **Cross-Framework Support**: Components for React, Vue 3, and Svelte
- **Liquid Glass Design**: Beautiful fluid glass effects with SVG filters and CSS magic
- **Monorepo Architecture**: Organized with Turborepo for optimal development
- **Framework Native**: Each component is built idiomatically for its framework
- **Responsive**: All components adapt to different screen sizes

## Components

- **Navbar** - Top navigation with slots and liquid glass styling
- **ProfileCard** - User profile display with avatar and info
- **CommentListCard** - Container for threaded comments
- **GlassButton** - Interactive button with hover effects
- **HamburgerMenu** - Animated menu toggle
- **GlassToggleButton** - Switch component with smooth transitions

## Quick Start

```bash
# Install dependencies
npm install

# Start development
npm run dev

# Build all packages
npm run build
```

## Package Structure

```
glasnost/
├── packages/
│   ├── shared/    # Common styles and SVG filters
│   ├── vue/       # Vue 3 components
│   ├── react/     # React components  
│   └── svelte/    # Svelte components
└── apps/
    └── docs/      # Documentation and examples
```

## Development

This project uses Turborepo for monorepo management. Each package can be developed independently while sharing common assets from the `shared` package.

## License

MIT 