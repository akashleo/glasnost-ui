# Framework Support Guide 🚀

Glasnost UI provides native components for Vue 3, React, and Svelte, each built idiomatically for their respective frameworks while maintaining visual consistency.

## 📦 Package Overview

| Framework | Package | Version | Features |
|-----------|---------|---------|----------|
| Vue 3 | `@glasnost-ui/vue` | 0.1.0 | Composition API, `<script setup>`, Scoped Styles |
| React | `@glasnost-ui/react` | 0.1.0 | Function Components, Hooks, styled-jsx |
| Svelte | `@glasnost-ui/svelte` | 0.1.0 | Reactive Declarations, Event Dispatchers |
| Shared | `@glasnost-ui/shared` | 0.1.0 | Common SVG filters, CSS styles, TypeScript types |

## 🛠 Framework-Specific Features

### Vue 3 Components
- ✅ **Full Implementation**: All 6 components (Navbar, ProfileCard, CommentListCard, GlassButton, HamburgerMenu, GlassToggleButton)
- ✅ **Composition API**: Using `<script setup>` syntax
- ✅ **Reactive Props**: Full TypeScript prop definitions
- ✅ **Slot Support**: Named slots for flexible content
- ✅ **Scoped Styles**: Component-specific CSS
- ✅ **Event Handling**: Vue-native event system

### React Components  
- ✅ **Core Components**: Navbar, ProfileCard, GlassButton
- ✅ **Function Components**: Modern React patterns
- ✅ **TypeScript**: Full type safety
- ✅ **React Hooks**: useEffect for lifecycle management
- ✅ **Props Interface**: Clean component APIs
- ✅ **styled-jsx**: Embedded styling solution

### Svelte Components
- ✅ **Core Components**: Navbar, GlassButton  
- ✅ **Reactive Declarations**: `$:` syntax for computed values
- ✅ **Event Dispatchers**: Native Svelte event system
- ✅ **Slot Support**: Content projection
- ✅ **Scoped Styles**: Component encapsulation
- ✅ **TypeScript**: Type-safe props

## 🎯 Installation & Usage

### Vue 3
```bash
npm install @glasnost-ui/vue vue@^3.3.0
```

```vue
<script setup>
import { Navbar, GlassButton } from '@glasnost-ui/vue'
</script>

<template>
  <Navbar centerLogo="My App" />
  <GlassButton @click="handleClick">Click me</GlassButton>
</template>
```

### React
```bash
npm install @glasnost-ui/react react@^18.0.0 react-dom@^18.0.0
```

```tsx
import { Navbar, GlassButton } from '@glasnost-ui/react'

export function App() {
  return (
    <>
      <Navbar centerLogo="My App" />
      <GlassButton onClick={handleClick}>Click me</GlassButton>
    </>
  )
}
```

### Svelte
```bash
npm install @glasnost-ui/svelte svelte@^4.0.0
```

```svelte
<script>
  import { Navbar, GlassButton } from '@glasnost-ui/svelte'
</script>

<Navbar centerLogo="My App" />
<GlassButton on:click={handleClick}>Click me</GlassButton>
```

## 🔧 Build Configuration

Each framework package includes its own build configuration:

- **Vue**: Vite + Vue plugin
- **React**: Vite + React plugin  
- **Svelte**: Vite + Svelte plugin

All packages:
- Export ES modules and CommonJS
- Include TypeScript declarations
- Support tree-shaking
- Bundle shared dependencies

## 🎨 Shared Design System

All frameworks share the same liquid glass aesthetic through:

### Common CSS Variables
```css
:root {
  --glass-primary: rgba(255, 255, 255, 0.15);
  --glass-border: rgba(255, 255, 255, 0.3);
  --glass-glow: rgba(255, 255, 255, 0.4);
}
```

### SVG Filter Library
- Liquid displacement effects
- Turbulence generators  
- Flowing glass animations
- Button ripple effects
- Enhanced liquid distortion

### Consistent Component APIs
```typescript
// Shared prop interfaces
interface GlassButtonProps {
  variant?: 'primary' | 'secondary' | 'accent'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
}
```

## 🚀 Performance Considerations

### Optimizations
- **Tree Shaking**: Import only what you need
- **SVG Filters**: Shared filter definitions prevent duplication
- **CSS Variables**: Runtime theming without JavaScript
- **Scoped Styles**: No global CSS conflicts

### Bundle Sizes (estimated)
- Vue package: ~15KB (gzipped)
- React package: ~12KB (gzipped)  
- Svelte package: ~8KB (gzipped)
- Shared package: ~5KB (gzipped)

## 🔮 Future Roadmap

### Planned Enhancements
- [ ] **Angular Support**: Complete the framework trinity
- [ ] **Web Components**: Framework-agnostic components
- [ ] **Theme System**: Advanced customization options
- [ ] **Animation Library**: Extended liquid effects
- [ ] **Accessibility**: Enhanced a11y features

### Component Expansion
- [ ] Complete all 6 components for React/Svelte
- [ ] Advanced form components
- [ ] Layout components (Grid, Container)
- [ ] Navigation components (Sidebar, Breadcrumbs)

## 🤝 Contributing

Each framework package follows its own conventions:

- **Vue**: Vue 3 Composition API standards
- **React**: React 18 function component patterns
- **Svelte**: Svelte 4 component structure

All contributions should maintain:
- Visual consistency across frameworks
- TypeScript type safety
- Accessibility standards
- Performance optimizations

---

The liquid glass aesthetic remains consistent across all frameworks while embracing each platform's unique strengths! 🌊✨ 