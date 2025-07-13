# Getting Started with Glasnost UI 🌊

## Overview

Glasnost UI is a cross-framework component library featuring stunning liquid glass aesthetics. All components use advanced CSS effects and SVG filters to create fluid, wavy glass appearances with smooth reflections and displacement effects.

## 🚀 Quick Start

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build all packages
npm run build
```

### Using Framework Components

#### Vue 3
```vue
<script setup>
import { 
  Navbar, 
  ProfileCard, 
  GlassButton 
} from '@glasnost-ui/vue'

const userProfile = {
  avatar: 'https://example.com/avatar.jpg',
  name: 'John Doe',
  title: 'Developer'
}
</script>

<template>
  <div>
    <Navbar>
      <template #center>My App</template>
    </Navbar>
    
    <ProfileCard
      :avatar="userProfile.avatar"
      :name="userProfile.name"
      :title="userProfile.title"
    />
    
    <GlassButton variant="primary">
      Click Me
    </GlassButton>
  </div>
</template>
```

#### React
```tsx
import React from 'react'
import { 
  Navbar, 
  ProfileCard, 
  GlassButton 
} from '@glasnost-ui/react'

const userProfile = {
  avatar: 'https://example.com/avatar.jpg',
  name: 'John Doe',
  title: 'Developer'
}

export function App() {
  return (
    <div>
      <Navbar centerLogo="My App" />
      
      <ProfileCard
        avatar={userProfile.avatar}
        name={userProfile.name}
        title={userProfile.title}
      />
      
      <GlassButton variant="primary">
        Click Me
      </GlassButton>
    </div>
  )
}
```

#### Svelte
```svelte
<script>
  import { 
    Navbar, 
    GlassButton 
  } from '@glasnost-ui/svelte'

  const userProfile = {
    avatar: 'https://example.com/avatar.jpg',
    name: 'John Doe',
    title: 'Developer'
  }
</script>

<div>
  <Navbar centerLogo="My App" />
  
  <GlassButton variant="primary">
    Click Me
  </GlassButton>
</div>
```

## 🧱 Available Components

### 1. Navbar
Top navigation with left, center, and right slots.

```vue
<Navbar>
  <template #left><!-- Left content --></template>
  <template #center><!-- Logo/title --></template>
  <template #right><!-- Right actions --></template>
</Navbar>
```

### 2. ProfileCard
User profile display with avatar and actions.

```vue
<ProfileCard
  avatar="https://example.com/avatar.jpg"
  name="Jane Smith"
  title="Designer"
>
  <template #actions>
    <GlassButton>Follow</GlassButton>
  </template>
</ProfileCard>
```

### 3. CommentListCard
Container for threaded comments with flowing animations.

```vue
<CommentListCard title="Comments">
  <template #count>5 comments</template>
  <template #comments>
    <!-- Your comment content -->
  </template>
</CommentListCard>
```

### 4. GlassButton
Interactive button with variants and sizes.

```vue
<GlassButton 
  variant="primary|secondary|accent"
  size="small|medium|large"
  @click="handleClick"
>
  Button Text
</GlassButton>
```

### 5. HamburgerMenu
Animated hamburger menu toggle.

```vue
<HamburgerMenu 
  :isOpen="menuOpen"
  @toggle="handleToggle"
/>
```

### 6. GlassToggleButton
Switch component with liquid glass transitions.

```vue
<GlassToggleButton
  :checked="isChecked"
  @change="handleChange"
  label="Toggle me"
/>
```

## 🎨 Styling Features

### Liquid Glass Effects
- **Backdrop Blur**: Creates depth with background blur
- **SVG Filters**: `feTurbulence` and `feDisplacementMap` for distortion
- **Flowing Animations**: Continuous liquid-like movement
- **Interactive States**: Hover and active effects with ripples

### CSS Variables
Customize the look by overriding CSS variables:

```css
:root {
  --glass-primary: rgba(255, 255, 255, 0.15);
  --glass-border: rgba(255, 255, 255, 0.3);
  --glass-glow: rgba(255, 255, 255, 0.4);
}
```

## 🔧 Development

### Project Structure
```
glasnost/
├── packages/
│   ├── shared/        # Common styles and SVG filters
│   ├── vue/          # Vue 3 components  
│   ├── react/        # React components
│   └── svelte/       # Svelte components
└── apps/
    └── docs/         # Demo application
```

### Creating Custom Components

1. Add SVG filters to your component:
```vue
<svg style="display: none;">
  <defs>
    <filter id="customFilter">
      <feTurbulence baseFrequency="0.01" />
      <feDisplacementMap scale="10" />
    </filter>
  </defs>
</svg>
```

2. Apply liquid glass classes:
```vue
<div class="liquid-glass">
  <!-- Your content -->
</div>
```

3. Import shared utilities:
```vue
<script setup>
import { injectLiquidGlassFilters } from '@glasnost-ui/shared'

onMounted(() => {
  injectLiquidGlassFilters()
})
</script>
```

## 📱 Responsive Design

All components are responsive and include:
- Breakpoints for mobile, tablet, and desktop
- Touch-friendly interactions
- Reduced motion support for accessibility

## ♿ Accessibility

- ARIA labels and roles
- Keyboard navigation support
- Focus indicators
- Screen reader compatibility
- Reduced motion preferences

## 🎯 Next Steps

1. **Try the Demo**: Run `npm run dev` to see all components
2. **Choose Your Framework**: Use Vue 3, React, or Svelte versions
3. **Customize Styles**: Modify CSS variables for your brand
4. **Add Components**: Extend with your own liquid glass components

## 💡 Tips

- Use a gradient background for best visual effect
- Combine multiple components for rich interfaces
- Test on different devices for responsive behavior
- Consider performance on lower-end devices

## 🐛 Troubleshooting

**SVG filters not working?**
- Ensure `injectLiquidGlassFilters()` is called
- Check browser support for SVG filters

**Performance issues?**
- Reduce the number of animated components
- Use `prefers-reduced-motion` CSS queries

**Styling conflicts?**
- Components use scoped styles to avoid conflicts
- Check CSS specificity if overriding styles

---

Happy building with Glasnost UI! 🌊✨ 