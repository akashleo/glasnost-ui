# Glasnost UI - React Components

Beautiful liquid glass UI components for React applications. Create stunning, modern interfaces with smooth glass morphism effects and fluid animations.

## Features

- 🎨 Liquid glass aesthetics with advanced CSS animations
- 🔄 Smooth animations and transitions
- 📱 Fully responsive components
- ♿ Accessible and ARIA-compliant
- 🎯 TypeScript support
- ⚡ Optimized CSS with external stylesheets

## 🚀 Installation

```bash
# Using npm
npm install @glasnost-ui/react

# Using pnpm
pnpm add @glasnost-ui/react

# Using yarn
yarn add @glasnost-ui/react
```

## 📋 Important: Import Styles

Make sure to import the CSS styles in your application:

```jsx
// Import the styles in your entry file (e.g., main.tsx, index.tsx)
import '@glasnost-ui/react/styles';
 -or-
import '@glasnost-ui/vue/dist/style.css'
```

## Demo : https://glasnost.netlify.app/

## 📦 Available Components

### Navbar
Top navigation bar with glass effect and flexible slots.

```jsx
import { Navbar, GlassButton, HamburgerMenu } from '@glasnost-ui/react'

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  return (
    <Navbar 
      leftSlot={<span>🌟 Brand</span>}
      centerLogo={<span>App Name</span>}
      rightSlot={
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <GlassButton size="small">Sign In</GlassButton>
          <HamburgerMenu isOpen={isMenuOpen} onToggle={() => setIsMenuOpen(!isMenuOpen)} />
        </div>
      }
    />
  )
}
```

### ProfileCard
Display user profiles with avatar and actions.

```jsx
import { ProfileCard, GlassButton } from '@glasnost-ui/react'

const UserProfile = () => (
  <ProfileCard
    avatar="https://example.com/avatar.jpg"
    name="John Doe"
    title="Software Engineer"
    actions={
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <GlassButton variant="primary" size="small">Follow</GlassButton>
        <GlassButton variant="secondary" size="small">Message</GlassButton>
      </div>
    }
  />
)
```

### CommentListCard
Display comments with liquid glass effects.

```jsx
import { CommentListCard } from '@glasnost-ui/react'

const Comments = () => (
  <CommentListCard 
    title="Recent Comments"
    showMoreButton={true}
    moreButtonText="Load More"
    onMore={() => console.log('Loading more...')}
  >
    <div className="comment-item">
      <div className="comment-author">Sarah Chen</div>
      <div className="comment-text">Great post!</div>
      <div className="comment-meta">2 hours ago</div>
    </div>
  </CommentListCard>
)
```

### GlassButton
Interactive buttons with glass morphism effects.

```jsx
import { GlassButton } from '@glasnost-ui/react'

const ButtonExample = () => (
  <div style={{ display: 'flex', gap: '1rem' }}>
    <GlassButton 
      variant="primary" 
      size="small"
      onClick={() => console.log('Clicked!')}
    >
      Small Primary
    </GlassButton>
    <GlassButton variant="secondary" size="medium">
      Medium Secondary
    </GlassButton>
    <GlassButton variant="accent" size="large">
      Large Accent
    </GlassButton>
  </div>
)
```

Props:
- `variant`: 'primary' | 'secondary' | 'accent'
- `size`: 'small' | 'medium' | 'large'
- `disabled`: boolean
- `onClick`: () => void

### HamburgerMenu
Animated hamburger menu button.

```jsx
import { HamburgerMenu } from '@glasnost-ui/react'

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <HamburgerMenu 
      isOpen={isOpen}
      onToggle={() => setIsOpen(!isOpen)}
    />
  )
}
```

### GlassToggleButton
Toggle switch with glass effects.

```jsx
import { GlassToggleButton } from '@glasnost-ui/react'

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false)
  
  return (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <GlassToggleButton
        checked={darkMode}
        onChange={setDarkMode}
        label="Dark Mode"
        size="medium"
        variant="primary"
      />
      <GlassToggleButton
        checked={true}
        onChange={() => {}}
        label="Notifications"
        size="small"
        variant="secondary"
      />
    </div>
  )
}
```

Props:
- `checked`: boolean
- `onChange`: (checked: boolean) => void
- `label`: string
- `size`: 'small' | 'medium' | 'large'
- `variant`: 'primary' | 'secondary' | 'accent'
- `disabled`: boolean

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

## 📱 Responsive Design

All components are responsive by default and include:
- Mobile-first design approach
- Touch-friendly interactions
- Adaptive layouts for different screen sizes
- Reduced motion support for accessibility

## 🔧 TypeScript Support

All components include comprehensive TypeScript definitions:

```typescript
import type { 
  GlassButtonProps,
  ProfileCardProps,
  NavbarProps,
  CommentListCardProps,
  HamburgerMenuProps,
  GlassToggleButtonProps
} from '@glasnost-ui/react'
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
- Efficient re-renders with proper React patterns

## 📄 License

ISC © Akash Ghosh

## 🤝 Contributing

Contributions welcome! Please read our contributing guide.

## 🔗 Related Packages

- `@glasnost-ui/vue` - Vue 3 components
- `@glasnost-ui/svelte` - Svelte components 