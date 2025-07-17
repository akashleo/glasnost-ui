# Glasnost UI - Svelte Components

Beautiful liquid glass UI components for Svelte applications. Create stunning, modern interfaces with smooth glass morphism effects and fluid animations.

## Features

- 🎨 Liquid glass aesthetics with advanced SVG filters
- 🔄 Smooth animations and transitions
- 📱 Fully responsive components
- ♿ Accessible and ARIA-compliant
- 🎯 TypeScript support
- ⚡ Reactive Svelte components
- 🎛️ Comprehensive state management
- 🌈 Multiple variants and sizes

## 🚀 Installation

```bash
# Using npm
npm install @glasnost-ui/svelte

# Using pnpm
pnpm add @glasnost-ui/svelte

# Using yarn
yarn add @glasnost-ui/svelte
```

## 📋 Important: Import Styles

Make sure to import the CSS styles in your application:

```javascript
// Import the styles in your entry file (e.g., main.js, app.js)
import '@glasnost-ui/svelte/styles';
 - or -
import '@glasnost-ui/svelte/dist/style.css'
```
## Demo : https://glasnost.netlify.app/

## 📦 Available Components

### Navbar
Top navigation bar with glass effect and flexible slots.

```svelte
<script>
  import { Navbar, GlassButton, HamburgerMenu } from '@glasnost-ui/svelte';
  
  let isMenuOpen = false;
  
  const handleMenuToggle = () => {
    isMenuOpen = !isMenuOpen;
  };
</script>

<Navbar>
  <div slot="left">
    <HamburgerMenu isOpen={isMenuOpen} on:toggle={handleMenuToggle} />
  </div>
  <div slot="center">
    <span class="brand-name">Glasnost UI</span>
  </div>
  <div slot="right">
    <GlassButton variant="primary">Start</GlassButton>
  </div>
</Navbar>
```

### ProfileCard
Display user profiles with avatar and actions.

```svelte
<script>
  import { ProfileCard, GlassButton } from '@glasnost-ui/svelte';
  
  const userProfile = {
    avatar: 'path/to/avatar.jpg',
    name: 'John Doe',
    title: 'Software Engineer'
  };
</script>

<ProfileCard 
  avatar={userProfile.avatar} 
  name={userProfile.name} 
  title={userProfile.title}
>
  <div slot="actions" class="profile-actions">
    <GlassButton size="small" variant="primary">Follow</GlassButton>
    <GlassButton size="small" variant="secondary">Message</GlassButton>
  </div>
</ProfileCard>
```

### CommentListCard
Display comments with liquid glass effects.

```svelte
<script>
  import { CommentListCard } from '@glasnost-ui/svelte';
  
  const handleMoreComments = () => {
    // Handle loading more comments
    console.log('Loading more comments...');
  };
</script>

<CommentListCard 
  title="Recent Comments" 
  on:more={handleMoreComments}
>
  <div slot="count">3 comments</div>
  <div slot="comments">
    <div class="comment-item">
      <div class="comment-author">Sarah Chen</div>
      <div class="comment-text">
        These liquid glass effects are absolutely stunning!
      </div>
      <div class="comment-meta">2 hours ago</div>
    </div>
    <!-- More comments -->
  </div>
</CommentListCard>
```

### GlassButton
Beautiful glass effect buttons with multiple variants and sizes.

```svelte
<script>
  import { GlassButton } from '@glasnost-ui/svelte';
  
  const handleClick = () => {
    console.log('Button clicked!');
  };
</script>

<!-- Button Sizes -->
<GlassButton size="small" on:click={handleClick}>Small</GlassButton>
<GlassButton size="medium" on:click={handleClick}>Medium</GlassButton>
<GlassButton size="large" on:click={handleClick}>Large</GlassButton>

<!-- Button Variants -->
<GlassButton variant="primary">Primary</GlassButton>
<GlassButton variant="secondary">Secondary</GlassButton>
<GlassButton variant="accent">Accent</GlassButton>

<!-- Disabled State -->
<GlassButton disabled>Disabled</GlassButton>
```

### HamburgerMenu
Animated hamburger menu toggle button.

```svelte
<script>
  import { HamburgerMenu } from '@glasnost-ui/svelte';
  
  let isOpen = false;
  
  const handleToggle = () => {
    isOpen = !isOpen;
  };
</script>

<HamburgerMenu isOpen={isOpen} on:toggle={handleToggle} />
```

### GlassToggleButton
Animated toggle switch with glass effect and comprehensive state management.

```svelte
<script>
  import { GlassToggleButton } from '@glasnost-ui/svelte';
  
  let isChecked = false;
  let toggleStates = {
    notifications: true,
    darkMode: false,
    autoSave: true,
    soundEnabled: true,
    analytics: false,
    interactive: false
  };
  
  const handleToggleChange = (event) => {
    isChecked = event.detail;
  };
  
  const handleStateToggle = (state, checked) => {
    toggleStates[state] = checked;
  };
</script>

<!-- Basic Toggle -->
<GlassToggleButton 
  checked={isChecked} 
  on:change={handleToggleChange} 
  label="Basic Toggle" 
/>

<!-- Toggle Sizes -->
<GlassToggleButton size="small" checked={isChecked} on:change={handleToggleChange} label="Small Toggle" />
<GlassToggleButton size="medium" checked={isChecked} on:change={handleToggleChange} label="Medium Toggle" />
<GlassToggleButton size="large" checked={isChecked} on:change={handleToggleChange} label="Large Toggle" />

<!-- Toggle Variants -->
<GlassToggleButton variant="primary" checked={isChecked} on:change={handleToggleChange} label="Primary" />
<GlassToggleButton variant="secondary" checked={isChecked} on:change={handleToggleChange} label="Secondary" />
<GlassToggleButton variant="accent" checked={isChecked} on:change={handleToggleChange} label="Accent" />

<!-- Feature Toggles -->
<GlassToggleButton 
  checked={toggleStates.notifications}
  on:change={e => handleStateToggle('notifications', e.detail)}
  label="Notifications" 
/>
<GlassToggleButton 
  checked={toggleStates.darkMode}
  on:change={e => handleStateToggle('darkMode', e.detail)}
  label="Dark Mode" 
/>
<GlassToggleButton 
  checked={toggleStates.autoSave}
  on:change={e => handleStateToggle('autoSave', e.detail)}
  label="Auto Save" 
/>

<!-- Disabled States -->
<GlassToggleButton checked={true} disabled label="Disabled On" />
<GlassToggleButton checked={false} disabled label="Disabled Off" />
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

All components use CSS variables for easy theming:

```css
:root {
  /* Glass Colors */
  --glass-primary: rgba(255, 255, 255, 0.08);
  --glass-secondary: rgba(255, 255, 255, 0.05);
  --glass-accent: rgba(255, 255, 255, 0.12);
  --glass-border: rgba(255, 255, 255, 0.18);
  --glass-shadow: rgba(0, 0, 0, 0.08);
  --glass-glow: rgba(255, 255, 255, 0.25);
  
  /* Glass Gradients */
  --glass-gradient-1: linear-gradient(135deg, rgba(255, 255, 255, 0.09) 0%, rgba(255, 255, 255, 0.04) 100%);
  --glass-gradient-2: linear-gradient(45deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.06) 50%, rgba(255, 255, 255, 0.03) 100%);
  --glass-radial: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 40%, transparent 100%);
  
  /* Blur values */
  --glass-blur-light: blur(16px) saturate(1.8) brightness(1.05);
  --glass-blur-medium: blur(24px) saturate(2.2) brightness(1.08);
  --glass-blur-heavy: blur(32px) saturate(2.8) brightness(1.12);
}
```

## 🔧 Component Props

### Navbar
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| class | string | '' | Additional CSS class |
| style | string | '' | Inline styles |

**Slots:**
- `left` - Left side content (e.g., hamburger menu)
- `center` - Center content (e.g., logo/brand)
- `right` - Right side content (e.g., buttons)

### ProfileCard
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| avatar | string | '' | URL to avatar image |
| name | string | '' | User name |
| title | string | '' | User title or description |
| class | string | '' | Additional CSS class |

**Slots:**
- `actions` - Action buttons (e.g., Follow, Message)

### CommentListCard
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| title | string | 'Comments' | Card title |
| class | string | '' | Additional CSS class |

**Events:**
- `more` - Fired when "More" button is clicked

**Slots:**
- `count` - Comment count display
- `comments` - Comment list content

### GlassButton
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | 'primary' \| 'secondary' \| 'accent' | 'primary' | Button style variant |
| size | 'small' \| 'medium' \| 'large' | 'medium' | Button size |
| disabled | boolean | false | Disabled state |
| class | string | '' | Additional CSS class |

**Events:**
- `click` - Fired when button is clicked

### HamburgerMenu
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| isOpen | boolean | false | Menu open state |
| class | string | '' | Additional CSS class |

**Events:**
- `toggle` - Fired when menu is toggled

### GlassToggleButton
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| checked | boolean | false | Toggle state |
| variant | 'primary' \| 'secondary' \| 'accent' | 'primary' | Toggle style variant |
| size | 'small' \| 'medium' \| 'large' | 'medium' | Toggle size |
| disabled | boolean | false | Disabled state |
| label | string | '' | Label text |
| class | string | '' | Additional CSS class |

**Events:**
- `change` - Fired when toggle state changes (event.detail contains new state)

## 🎛️ State Management Examples

### Feature Toggles
```svelte
<script>
  import { GlassToggleButton } from '@glasnost-ui/svelte';
  
  let featureStates = {
    notifications: true,
    darkMode: false,
    autoSave: true,
    soundEnabled: true,
    analytics: false,
    interactive: false
  };
  
  const handleFeatureToggle = (feature, checked) => {
    featureStates[feature] = checked;
    // Save to localStorage, API, etc.
    console.log(`${feature}: ${checked}`);
  };
</script>

<div class="feature-toggles">
  <GlassToggleButton 
    checked={featureStates.notifications}
    on:change={e => handleFeatureToggle('notifications', e.detail)}
    label="Notifications" 
  />
  <GlassToggleButton 
    checked={featureStates.darkMode}
    on:change={e => handleFeatureToggle('darkMode', e.detail)}
    label="Dark Mode" 
  />
  <GlassToggleButton 
    checked={featureStates.autoSave}
    on:change={e => handleFeatureToggle('autoSave', e.detail)}
    label="Auto Save" 
  />
</div>
```

### Loading States
```svelte
<script>
  import { GlassToggleButton } from '@glasnost-ui/svelte';
  
  let loadingStates = {
    sync: false,
    backup: false,
    update: false
  };
  
  const handleLoadingToggle = async (state, checked) => {
    loadingStates[state] = checked;
    
    if (checked) {
      // Simulate async operation
      await new Promise(resolve => setTimeout(resolve, 2000));
      loadingStates[state] = false;
    }
  };
</script>

<div class="loading-toggles">
  <GlassToggleButton 
    checked={loadingStates.sync}
    on:change={e => handleLoadingToggle('sync', e.detail)}
    label="Sync Data" 
  />
  <GlassToggleButton 
    checked={loadingStates.backup}
    on:change={e => handleLoadingToggle('backup', e.detail)}
    label="Auto Backup" 
  />
</div>
```

## 📱 Responsive Design

All components are fully responsive and work well on mobile, tablet, and desktop devices. The components automatically adjust their sizing and spacing based on screen size.

## ♿ Accessibility

All components include proper ARIA attributes and keyboard navigation support:

- **Focus management** - All interactive elements are keyboard accessible
- **Screen reader support** - Proper ARIA labels and descriptions
- **Reduced motion** - Respects `prefers-reduced-motion` media query
- **High contrast** - Works well with high contrast mode

## 🎯 TypeScript Support

Full TypeScript support with proper type definitions:

```typescript
import type { 
  GlassButtonProps, 
  GlassToggleButtonProps,
  ProfileCardProps 
} from '@glasnost-ui/svelte';

// Type-safe props
const buttonProps: GlassButtonProps = {
  variant: 'primary',
  size: 'medium',
  disabled: false
};
```

## 🔄 Events and Reactivity

All components are fully reactive and emit events for state changes:

```svelte
<script>
  import { GlassToggleButton } from '@glasnost-ui/svelte';
  
  let isEnabled = false;
  
  const handleToggle = (event) => {
    isEnabled = event.detail;
    console.log('Toggle state:', isEnabled);
  };
</script>

<GlassToggleButton 
  checked={isEnabled} 
  on:change={handleToggle}
  label="Enable Feature" 
/>
```

## 🎨 Customization

### Custom CSS Variables
```css
:root {
  /* Override default glass colors */
  --glass-primary: rgba(99, 102, 241, 0.3);
  --glass-secondary: rgba(107, 114, 128, 0.3);
  --glass-accent: rgba(236, 72, 153, 0.3);
  
  /* Custom blur effects */
  --glass-blur-medium: blur(30px) saturate(2.5) brightness(1.1);
}
```

### Component Styling
```svelte
<style>
  /* Custom button styling */
  :global(.glasnost-glass-button) {
    border-radius: 20px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  }
  
  /* Custom toggle styling */
  :global(.glasnost-toggle-button) {
    --track-width: 80px;
    --track-height: 44px;
  }
</style>
```

## 🚀 Performance

- External CSS for better caching and performance
- Optimized animations with `transform` and `opacity`
- Reduced motion support for accessibility
- Efficient re-renders with proper Svelte patterns

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Development Setup
```bash
# Clone the repository
git clone <repository-url>
cd glasnost

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build components
pnpm build
```

## 📄 License

MIT License - see LICENSE file for details.

## 🔗 Related Packages

- `@glasnost-ui/react` - React components
- `@glasnost-ui/vue` - Vue 3 components
- `@glasnost-ui/shared` - Shared utilities and styles 