# Glasnost UI - Vue Components

Beautiful liquid glass UI components for Vue 3 applications. Create stunning, modern interfaces with smooth glass morphism effects and fluid animations.

## Features

- 🎨 Liquid glass aesthetics with advanced SVG filters
- 🔄 Smooth animations and transitions
- 📱 Fully responsive components
- ♿ Accessible and ARIA-compliant
- 🎯 TypeScript support
- 🛠 Vue 3 Composition API

## 🚀 Installation

```bash
# Using npm
npm install @glasnost-ui/vue

# Using pnpm
pnpm add @glasnost-ui/vue

# Using yarn
yarn add @glasnost-ui/vue
```

## 📋 Important: Import Styles

Make sure to import the CSS styles in your application:

```javascript
// Import the styles in your entry file (e.g., main.js, main.ts)
import '@glasnost-ui/vue/styles';
 - or -
import '@glasnost-ui/vue/dist/style.css'
```
## Demo : https://glasnost.netlify.app/

## 📦 Available Components

### Navbar
Top navigation bar with glass effect and flexible slots.

```vue
<script setup>
import { Navbar } from '@glasnost-ui/vue'
</script>

<template>
  <Navbar>
    <template #left>
      <span>Left Content</span>
    </template>
    <template #center>
      <h1>Brand Name</h1>
    </template>
    <template #right>
      <button>Menu</button>
    </template>
  </Navbar>
</template>
```

### ProfileCard
Display user profiles with avatar and actions.

```vue
<script setup>
import { ProfileCard, GlassButton } from '@glasnost-ui/vue'

const userProfile = {
  avatar: 'path/to/avatar.jpg',
  name: 'John Doe',
  title: 'Software Engineer'
}
</script>

<template>
  <ProfileCard
    :avatar="userProfile.avatar"
    :name="userProfile.name"
    :title="userProfile.title"
  >
    <template #actions>
      <GlassButton variant="primary" size="small">Follow</GlassButton>
      <GlassButton variant="secondary" size="small">Message</GlassButton>
    </template>
  </ProfileCard>
</template>
```

### CommentListCard
Display comments with liquid glass effects.

```vue
<script setup>
import { CommentListCard } from '@glasnost-ui/vue'

const handleMoreComments = () => {
  // Handle loading more comments
}
</script>

<template>
  <CommentListCard title="Recent Comments" @more="handleMoreComments">
    <template #count>3 comments</template>
    <template #comments>
      <div class="comment-item">
        <div class="comment-author">Sarah Chen</div>
        <div class="comment-text">Great post!</div>
        <div class="comment-meta">2 hours ago</div>
      </div>
    </template>
  </CommentListCard>
</template>
```

### GlassButton
Interactive buttons with glass morphism effects.

```vue
<script setup>
import { GlassButton } from '@glasnost-ui/vue'

const handleClick = () => {
  // Handle button click
}
</script>

<template>
  <GlassButton 
    variant="primary" 
    size="medium" 
    @click="handleClick"
  >
    Click Me
  </GlassButton>
</template>
```

Props:
- `variant`: 'primary' | 'secondary' | 'accent'
- `size`: 'small' | 'medium' | 'large'
- `disabled`: boolean

### HamburgerMenu
Animated hamburger menu button.

```vue
<script setup>
import { ref } from 'vue'
import { HamburgerMenu } from '@glasnost-ui/vue'

const isOpen = ref(false)

const handleToggle = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <HamburgerMenu 
    :isOpen="isOpen"
    @toggle="handleToggle"
  />
</template>
```

### GlassToggleButton
Toggle switch with glass effects.

```vue
<script setup>
import { ref } from 'vue'
import { GlassToggleButton } from '@glasnost-ui/vue'

const isChecked = ref(false)

const handleChange = (checked) => {
  isChecked.value = checked
}
</script>

<template>
  <GlassToggleButton
    :checked="isChecked"
    @change="handleChange"
    label="Dark Mode"
  />
</template>
```

## 🎨 Styling

The components use external CSS for all styling, making them highly performant and customizable. The CSS is automatically imported when you import the package.

You can override styles by targeting the component classes:

```css
/* Custom button styling */
.glasnost-glass-button {
  --glass-opacity: 0.2;
}

/* Custom toggle colors */
.toggle-button--primary.toggle-button--checked .toggle-track {
  background: linear-gradient(135deg, 
    rgba(59, 130, 246, 0.4) 0%, 
    rgba(29, 78, 216, 0.3) 100%);
}
```

## 🎨 CSS Variables

The components use CSS variables for easy customization:

```css
:root {
  --glass-primary: rgba(255, 255, 255, 0.08);
  --glass-secondary: rgba(255, 255, 255, 0.05);
  --glass-accent: rgba(255, 255, 255, 0.12);
  --glass-border: rgba(255, 255, 255, 0.18);
  --glass-shadow: rgba(0, 0, 0, 0.08);
  --glass-glow: rgba(255, 255, 255, 0.25);
}
```

## 📱 Responsive Design

All components are responsive by default and include:
- Mobile-first design
- Touch-friendly interactions
- Adaptive layouts
- Reduced motion support

## 🔧 TypeScript Support

All components include TypeScript definitions and prop types.

```ts
import type { 
  GlassButtonProps,
  ProfileCardProps,
  NavbarProps 
} from '@glasnost-ui/vue'
```

## 🌟 Best Practices

1. **Background**: Use gradient or image backgrounds for best glass effect
2. **Accessibility**: Components include ARIA labels and keyboard navigation
3. **Performance**: CSS is optimized and external for better caching
4. **Customization**: Use CSS custom properties for easy theming
5. **Responsive**: Test components on different viewport sizes

## 🚀 Performance

- External CSS for better caching and performance
- Optimized animations with `transform` and `opacity`
- Reduced motion support for accessibility
- Efficient re-renders with proper Vue 3 patterns

## 📄 License

ISC © Akash Ghosh

## 🤝 Contributing

Contributions welcome! Please read our contributing guide.

## 🔗 Related Packages

- `@glasnost-ui/react` - React components
- `@glasnost-ui/svelte` - Svelte components 