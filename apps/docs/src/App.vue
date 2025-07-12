<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  Navbar,
  ProfileCard,
  CommentListCard,
  GlassButton,
  HamburgerMenu,
  GlassToggleButton
} from '@glasnost-ui/vue'

// Component state
const isMenuOpen = ref(false)
const isToggleChecked = ref(false)
const selectedBackground = ref(0)
const selectedComponent = ref('profile-card')

// Toggle button states
const toggleSizes = ref({
  small: false,
  medium: false,
  large: false
})

const toggleVariants = ref({
  primary: false,
  secondary: false,
  accent: false
})

const toggleStates = ref({
  interactive: false,
  notifications: true,
})

const userProfile = {
  avatar: 'https://scontent.fblr8-1.fna.fbcdn.net/v/t39.30808-6/228591002_4568736809845299_2656376336883463931_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Fz78mmlwA60Q7kNvwFE-VjL&_nc_oc=AdmNdG3BMJfR2of-84iVsPqqFAqvHCJvo-7LzJJrVsXiSjjagRDBNaCDWa-Lj3BVNFk&_nc_zt=23&_nc_ht=scontent.fblr8-1.fna&_nc_gid=AcpxF6AP30QFZiLIiXOtMg&oh=00_AfR6wwEHvI9CTWPAmpI1BzwhjdsEzeGB180HS-34Gj-DBw&oe=687879E1',
  name: 'Akash Ghosh',
  title: 'Frontend Engineer'
}

// Component list for sidebar
const componentList = [
  {
    id: 'profile-card',
    name: 'Profile Card',
    icon: '👤',
    description: 'User profile display with avatar and actions'
  },
  {
    id: 'glass-buttons',
    name: 'Glass Buttons',
    icon: '🔘',
    description: 'Interactive buttons with glass morphism'
  },
  {
    id: 'comment-card',
    name: 'Comment Card',
    icon: '💬',
    description: 'Comment list with liquid glass effects'
  },
  {
    id: 'toggle-button',
    name: 'Toggle Button',
    icon: '🔘',
    description: 'Animated toggle switch component'
  },
  {
    id: 'hamburger-menu',
    name: 'Hamburger Menu',
    icon: '☰',
    description: 'Animated hamburger menu button'
  },
  {
    id: 'navbar',
    name: 'Navbar',
    icon: '📋',
    description: 'Navigation bar with glass effects'
  }
]

// Background gradient options
const backgroundOptions = [
  {
    name: 'Protruding Squares',
    svg: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 200 200"><rect fill="%23ee5522" width="200" height="200"/><defs><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="100" y1="33" x2="100" y2="-3"><stop offset="0" stop-color="%23000" stop-opacity="0"/><stop offset="1" stop-color="%23000" stop-opacity="1"/></linearGradient><linearGradient id="b" gradientUnits="userSpaceOnUse" x1="100" y1="135" x2="100" y2="97"><stop offset="0" stop-color="%23000" stop-opacity="0"/><stop offset="1" stop-color="%23000" stop-opacity="1"/></linearGradient></defs><g fill="%23d23d09" fill-opacity="0.6"><rect x="100" width="100" height="100"/><rect y="100" width="100" height="100"/></g><g fill-opacity="0.5"><polygon fill="url(%23a)" points="100 30 0 0 200 0"/><polygon fill="url(%23b)" points="100 100 0 130 0 100 200 100 200 130"/></g></svg>')`,
    icon: '🟪'
  },
  {
    name: 'Wavey Fingerprint',
    svg: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="250" height="30" viewBox="0 0 1000 120"><rect fill="%23000000" width="1000" height="120"/><g fill="none" stroke="%23222" stroke-width="10" stroke-opacity="1"><path d="M-500 75c0 0 125-30 250-30S0 75 0 75s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30"/><path d="M-500 45c0 0 125-30 250-30S0 45 0 45s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30"/><path d="M-500 105c0 0 125-30 250-30S0 105 0 105s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30"/><path d="M-500 15c0 0 125-30 250-30S0 15 0 15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30"/><path d="M-500-15c0 0 125-30 250-30S0-15 0-15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30"/><path d="M-500 135c0 0 125-30 250-30S0 135 0 135s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30"/></g></svg>')`,
    icon: '🌀'
  },
  {
    name: 'Abstract Timekeeper',
    svg: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 1500"><rect fill="%23000000" width="2000" height="1500"/><defs><circle stroke="%23D60" vector-effect="non-scaling-stroke" id="a" fill="none" stroke-width="5" r="315"/><use id="f" href="%23a" stroke-dasharray="100 100 100 9999"/><use id="b" href="%23a" stroke-dasharray="250 250 250 250 250 9999"/><use id="e" href="%23a" stroke-dasharray="1000 500 1000 500 9999"/><use id="g" href="%23a" stroke-dasharray="1500 9999"/><use id="h" href="%23a" stroke-dasharray="2000 500 500 9999"/><use id="j" href="%23a" stroke-dasharray="800 800 800 800 800 9999"/><use id="k" href="%23a" stroke-dasharray="1200 1200 1200 1200 1200 9999"/><use id="l" href="%23a" stroke-dasharray="1600 1600 1600 1600 1600 9999"/></defs><g transform="translate(1000 750)" stroke-opacity="1"><g transform="rotate(0 0 0)"><circle fill="%23D60" fill-opacity="1" r="10"/><g transform="rotate(0 0 0)"><use href="%23f" transform="scale(.1) rotate(50 0 0)"/><use href="%23f" transform="scale(.2) rotate(100 0 0)"/><use href="%23f" transform="scale(.3) rotate(150 0 0)"/></g><g transform="rotate(0 0 0)"><use href="%23b" transform="scale(.4) rotate(200 0 0)"/><use href="%23z" transform="scale(.5) rotate(250 0 0)"/></g><g id="z" transform="rotate(0 0 0)"><g transform="rotate(0 0 0)"><use href="%23b"/><use href="%23b" transform="scale(1.2) rotate(90 0 0)"/><use href="%23b" transform="scale(1.4) rotate(60 0 0)"/><use href="%23e" transform="scale(1.6) rotate(120 0 0)"/><use href="%23e" transform="scale(1.8) rotate(30 0 0)"/></g></g><g id="y" transform="rotate(0 0 0)"><g transform="rotate(0 0 0)"><use href="%23e" transform="scale(1.1) rotate(20 0 0)"/><use href="%23g" transform="scale(1.3) rotate(-40 0 0)"/><use href="%23g" transform="scale(1.5) rotate(60 0 0)"/><use href="%23h" transform="scale(1.7) rotate(-80 0 0)"/><use href="%23j" transform="scale(1.9) rotate(100 0 0)"/></g></g><g transform="rotate(0 0 0)"><g transform="rotate(0 0 0)"><g transform="rotate(0 0 0)"><use href="%23h" transform="scale(2) rotate(60 0 0)"/><use href="%23j" transform="scale(2.1) rotate(120 0 0)"/><use href="%23j" transform="scale(2.3) rotate(180 0 0)"/><use href="%23h" transform="scale(2.4) rotate(240 0 0)"/><use href="%23j" transform="scale(2.5) rotate(300 0 0)"/></g><use href="%23y" transform="scale(2) rotate(180 0 0)"/><use href="%23j" transform="scale(2.7)"/><use href="%23j" transform="scale(2.8) rotate(45 0 0)"/><use href="%23j" transform="scale(2.9) rotate(90 0 0)"/><use href="%23k" transform="scale(3.1) rotate(135 0 0)"/><use href="%23k" transform="scale(3.2) rotate(180 0 0)"/></g><use href="%23k" transform="scale(3.3) rotate(225 0 0)"/><use href="%23k" transform="scale(3.5) rotate(270 0 0)"/><use href="%23k" transform="scale(3.6) rotate(315 0 0)"/><use href="%23k" transform="scale(3.7)"/><use href="%23k" transform="scale(3.9) rotate(75 0 0)"/></g></g></g></svg>')`,
    icon: '⏰'
  },
  {
    name: 'Zig Zag',
    svg: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect fill="%2300bb77" width="120" height="120"/><polygon fill="%23000" fill-opacity=".1" points="120 0 120 60 90 30 60 0 0 0 0 0 60 60 0 120 60 120 90 90 120 60 120 0"/></svg>')`,
    icon: '〰️'
  }
]

const currentGradient = computed(() => backgroundOptions[selectedBackground.value].svg)
const currentComponent = computed(() => componentList.find(c => c.id === selectedComponent.value))

const handleMenuToggle = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const handleToggleChange = (checked: boolean) => {
  isToggleChecked.value = checked
}

const handleSizeToggle = (size: 'small' | 'medium' | 'large', checked: boolean) => {
  toggleSizes.value[size] = checked
}

const handleVariantToggle = (variant: 'primary' | 'secondary' | 'accent', checked: boolean) => {
  toggleVariants.value[variant] = checked
}

const handleStateToggle = (state: 'interactive' | 'notifications' , checked: boolean) => {
  toggleStates.value[state] = checked
}

const handleButtonClick = () => {
  alert('Glass button clicked!')
}

const handleMoreComments = () => {
  alert('Loading more comments...')
}

const selectBackground = (index: number) => {
  selectedBackground.value = index
}

const selectComponent = (componentId: string) => {
  selectedComponent.value = componentId
}
</script>

<template>
  <div class="app" :style="{ background: currentGradient }">
    <!-- Main Content -->
    <main class="main-content">
      <div class="layout-container">
        <!-- Left Sidebar: Component List -->
        <aside class="sidebar-left">
          <div class="sidebar-content">
            <h2 class="sidebar-title">Components</h2>
            <div class="component-list">
              <button v-for="component in componentList" :key="component.id" class="component-item"
                :class="{ active: selectedComponent === component.id }" @click="selectComponent(component.id)">
                <span class="component-icon">{{ component.icon }}</span>
                <div class="component-info">
                  <h3 class="component-name">{{ component.name }}</h3>
                  <p class="component-description">{{ component.description }}</p>
                </div>
              </button>
            </div>
          </div>
        </aside>

        <!-- Center: Selected Component Display -->
        <section class="main-section">
          <div class="component-showcase">
            <div class="showcase-content">
              <!-- Profile Card -->
              <div v-if="selectedComponent === 'profile-card'" class="demo-container">
                <ProfileCard :avatar="userProfile.avatar" :name="userProfile.name" :title="userProfile.title">
                  <template #actions>
                    <div class="profile-actions">
                      <GlassButton size="small" variant="primary">
                        Follow
                      </GlassButton>
                      <GlassButton size="small" variant="secondary">
                        Message
                      </GlassButton>
                    </div>
                  </template>
                </ProfileCard>
              </div>

              <!-- Glass Buttons -->
              <div v-else-if="selectedComponent === 'glass-buttons'" class="demo-container">
                <div class="button-demo">
                  <div class="button-group">
                    <h4>Button Sizes</h4>
                    <div class="button-row">
                      <GlassButton size="small">Small</GlassButton>
                      <GlassButton size="medium">Medium</GlassButton>
                      <GlassButton size="large">Large</GlassButton>
                    </div>
                  </div>
                  <div class="button-group">
                    <h4>Button Variants</h4>
                    <div class="button-row">
                      <GlassButton size="small" variant="primary">Primary Small</GlassButton>
                      <GlassButton size="medium" variant="secondary">Secondary Medium</GlassButton>
                      <GlassButton size="large" variant="accent">Accent Large</GlassButton>
                    </div>
                  </div>
                  <div class="button-group">
                    <h4>Button States</h4>
                    <div class="button-row">
                      <GlassButton variant="primary">Normal</GlassButton>
                      <GlassButton variant="primary" disabled>Disabled</GlassButton>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Comment Card -->
              <div v-else-if="selectedComponent === 'comment-card'" class="demo-container">
                <CommentListCard title="Recent Comments" class="comment-demo" @more="handleMoreComments">
                  <template #count>3 comments</template>
                  <template #comments>
                    <div class="comment-item">
                      <div class="comment-author">Sarah Chen</div>
                      <div class="comment-text">
                        These liquid glass effects are absolutely stunning!
                        The fluid animations really bring the interface to life.
                      </div>
                      <div class="comment-meta">2 hours ago</div>
                    </div>

                    <div class="comment-item">
                      <div class="comment-author">Mike Rodriguez</div>
                      <div class="comment-text">
                        Love the SVG filter implementation. The distortion effects
                        add such a unique touch to the components.
                      </div>
                      <div class="comment-meta">5 hours ago</div>
                    </div>

                    <div class="comment-item">
                      <div class="comment-author">Emma Thompson</div>
                      <div class="comment-text">
                        Perfect for modern web applications. The responsiveness
                        and accessibility features are well thought out.
                      </div>
                      <div class="comment-meta">1 day ago</div>
                    </div>
                  </template>
                </CommentListCard>
              </div>

              <!-- Toggle Button -->
              <div v-else-if="selectedComponent === 'toggle-button'" class="demo-container">
                <div class="toggle-demo">
                  <div class="button-group">
                    <h4>Toggle Sizes</h4>
                    <div class="toggle-row">
                      <GlassToggleButton 
                        size="small" 
                        :checked="toggleSizes.small"
                        @change="(checked) => handleSizeToggle('small', checked)"
                        label="Small Toggle" 
                      />
                      <GlassToggleButton 
                        size="medium" 
                        :checked="toggleSizes.medium"
                        @change="(checked) => handleSizeToggle('medium', checked)"
                        label="Medium Toggle" 
                      />
                      <GlassToggleButton 
                        size="large" 
                        :checked="toggleSizes.large"
                        @change="(checked) => handleSizeToggle('large', checked)"
                        label="Large Toggle" 
                      />
                    </div>
                  </div>

                  <div class="button-group">
                    <h4>Toggle Variants</h4>
                    <div class="toggle-row">
                      <GlassToggleButton 
                        variant="primary"
                        size="small"
                        :checked="toggleVariants.primary"
                        @change="(checked) => handleVariantToggle('primary', checked)"
                        label="Primary Small" 
                      />
                      <GlassToggleButton 
                        variant="secondary"
                        size="medium"
                        :checked="toggleVariants.secondary"
                        @change="(checked) => handleVariantToggle('secondary', checked)"
                        label="Secondary Medium" 
                      />
                      <GlassToggleButton 
                        variant="accent"
                        size="large"
                        :checked="toggleVariants.accent"
                        @change="(checked) => handleVariantToggle('accent', checked)"
                        label="Accent Large" 
                      />
                    </div>
                  </div>

                  <div class="button-group">
                    <h4>Toggle States</h4>
                    <div class="toggle-row">
                      <GlassToggleButton 
                        :checked="toggleStates.notifications"
                        @change="(checked) => handleStateToggle('notifications', checked)"
                        label="Notifications" 
                      />
                    
                      <GlassToggleButton 
                        :checked="true" 
                        disabled 
                        label="Disabled On" 
                      />
                      <GlassToggleButton 
                        :checked="false" 
                        disabled 
                        label="Disabled Off" 
                      />
                    </div>
                  </div>

                  <div class="button-group">
                    <div class="toggle-states-display">
                      <h4>Current States</h4>
                      <div class="state-group">
                        <h5>Sizes</h5>
                        <div class="state-row">
                          <p>Small: {{ toggleSizes.small ? 'On' : 'Off' }}</p>
                          <p>Medium: {{ toggleSizes.medium ? 'On' : 'Off' }}</p>
                          <p>Large: {{ toggleSizes.large ? 'On' : 'Off' }}</p>
                        </div>
                      </div>
                      <div class="state-group">
                        <h5>Variants</h5>
                        <div class="state-row">
                          <p>Primary: {{ toggleVariants.primary ? 'On' : 'Off' }}</p>
                          <p>Secondary: {{ toggleVariants.secondary ? 'On' : 'Off' }}</p>
                          <p>Accent: {{ toggleVariants.accent ? 'On' : 'Off' }}</p>
                        </div>
                      </div>
                      <div class="state-group">
                        <h5>Features</h5>
                        <div class="state-row">
                          <p>Notifications: {{ toggleStates.notifications ? 'On' : 'Off' }}</p>
                         
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Hamburger Menu -->
              <div v-else-if="selectedComponent === 'hamburger-menu'" class="demo-container">
                <div class="hamburger-demo">
                  <HamburgerMenu :isOpen="isMenuOpen" @toggle="handleMenuToggle" />
                  <p class="demo-note">Click to toggle menu state</p>
                </div>
              </div>

              <!-- Navbar -->
              <div v-else-if="selectedComponent === 'navbar'" class="demo-container">
                <div class="navbar-demo">
                  <Navbar>
                    <template #left>
                      <HamburgerMenu :isOpen="isMenuOpen" @toggle="handleMenuToggle" />
                    </template>
                    <template #center>
                      <span class="brand-name" style="font-weight: 600; font-size: 1.1rem;">Glasnost UI</span>
                    </template>
                    <template #right>
                      <GlassButton color="primary" >Start</GlassButton>
                    </template>
                  </Navbar>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Right Sidebar: Background Options -->
        <aside class="sidebar-right">
          <div class="sidebar-content">
            <h2 class="sidebar-title">Background</h2>
            <div class="background-options">
              <button v-for="(option, index) in backgroundOptions" :key="index" class="background-option"
                :class="{ active: selectedBackground === index }" :style="{ background: option.svg }"
                @click="selectBackground(index)" :title="option.name">
                <span class="option-icon">{{ option.icon }}</span>
                <span class="option-name">{{ option.name }}</span>
              </button>
            </div>
          </div>
        </aside>
      </div>
    </main>
  </div>
</template>

<style scoped>
.app {
  min-height: 100vh;
  transition: background 0.5s ease;
}

.main-content {
  padding-top: 1rem;
}

.layout-container {
  display: grid;
  grid-template-columns: 300px 1fr 280px;
  gap: 2rem;
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 2rem;
  min-height: calc(100vh - 80px);
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(45deg, #fff, #f0f9ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Sidebar Styles */
.sidebar-left,
.sidebar-right {
  position: sticky;
  top: 2rem;
  height: fit-content;
}

.sidebar-content {
  backdrop-filter: blur(20px) saturate(1.8) brightness(1.1);
  -webkit-backdrop-filter: blur(20px) saturate(1.8) brightness(1.1);
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 100%);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 2rem;
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
}

.sidebar-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.95);
  margin: 0 0 1.5rem 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

/* Component List */
.component-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.component-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border: 2px solid rgba(255, 255, 255, 0.25); /* Increased border thickness and visibility */
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: left;
  color: rgba(255, 255, 255, 0.9);
}

.component-item:hover {
  transform: translateY(-2px);
  border-color: rgba(255, 255, 255, 0.3);
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 100%);
}

.component-item.active {
  border-color: rgba(255, 255, 255, 0.4);
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.12) 100%);
  transform: translateY(-1px);
}

.component-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.component-info {
  flex: 1;
}

.component-name {
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 0.25rem 0;
  color: rgba(255, 255, 255, 0.95);
}

.component-description {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  line-height: 1.3;
}

/* Main Section */
.main-section {
  padding: 2rem 0;
}

.component-showcase {
  max-width: 800px;
  margin: 0 auto;
}

.showcase-header {
  text-align: center;
  margin-bottom: 3rem;
}

.showcase-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.95);
  margin: 0 0 1rem 0;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.showcase-description {
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
}

.showcase-content {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

.demo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;
}

/* Demo Specific Styles */
.button-demo {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  max-width: 600px;
}

.button-group {
  text-align: center;
}

.button-group h4 {
  color: rgba(255, 255, 255, 0.9);
  margin: 0 0 1rem 0;
  font-size: 1.125rem;
}

.button-row {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.comment-demo {
  width: 100%;
  max-width: 600px;
}

.toggle-demo {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
}

.toggle-group {
  display: flex;
  align-items: center;
}

.hamburger-demo {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.demo-note {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.875rem;
  text-align: center;
  margin: 0;
}

.navbar-demo {
  width: 100%;
  max-width: 600px;
}

.profile-actions {
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  width: 100%;
}

/* Background Options */
.background-options {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.background-option {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: left;
  color: rgba(255, 255, 255, 0.9);
  position: relative;
  overflow: hidden;
}

.background-option::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: inherit;
  opacity: 0.3;
  z-index: 1;
}

.background-option:hover {
  transform: translateY(-2px);
  border-color: rgba(255, 255, 255, 0.3);
}

.background-option.active {
  border-color: rgba(255, 255, 255, 0.4);
  transform: translateY(-1px);
}

.option-icon,
.option-name {
  position: relative;
  z-index: 2;
}

.option-icon {
  font-size: 1.25rem;
  flex-shrink: 0;
}

.option-name {
  font-size: 0.875rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.95);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
}

/* Responsive Design */
@media (max-width: 1200px) {
  .layout-container {
    grid-template-columns: 250px 1fr 220px;
    gap: 1.5rem;
  }
}

@media (max-width: 1024px) {
  .layout-container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .sidebar-left,
  .sidebar-right {
    position: static;
  }

  .sidebar-content {
    padding: 1.5rem;
  }

  .component-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 0.75rem;
  }

  .background-options {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 0.75rem;
  }
}

@media (max-width: 768px) {
  .layout-container {
    padding: 0 1rem;
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .showcase-title {
    font-size: 2rem;
  }

  .component-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 0.75rem;
  }

  .component-item {
    flex-direction: column;
    text-align: center;
    gap: 0.5rem;
    padding: 0.75rem 0.5rem;
    min-height: 100px;
  }

  .component-icon {
    font-size: 1.5rem;
  }

  .component-name {
    font-size: 0.85rem;
    line-height: 1.2;
  }

  .component-description {
    font-size: 0.75rem;
    line-height: 1.3;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .background-options {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    justify-content: space-between;
    padding: 0;
  }

  .background-option {
    flex: 1;
    min-width: 0;
    max-width: none;
    padding: 1rem 0.5rem;
    flex-direction: column;
    text-align: center;
    gap: 0.5rem;
  }

  .option-icon {
    font-size: 1.5rem;
  }

  .option-name {
    display: none;
  }

  .button-row {
    flex-direction: column;
    align-items: center;
  }
}

@media (max-width: 480px) {
  .layout-container {
    padding: 0 0.75rem;
  }

  .component-item {
    padding: 0.5rem 0.25rem;
    min-height: 90px;
  }

  .component-icon {
    font-size: 1.25rem;
  }

  .component-name {
    font-size: 0.8rem;
  }

  .component-description {
    font-size: 0.7rem;
  }

  .background-option {
    padding: 0.75rem 0.25rem;
  }

  .option-icon {
    font-size: 1.25rem;
  }

  .sidebar-content {
    padding: 1rem;
  }
}

.toggle-row {
  display: flex;
  flex-direction: row;
  gap: 2rem;
  align-items: center;
  justify-content: flex-start;
}

@media (max-width: 768px) {
  .toggle-row {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }
}

.toggle-states-display {
  display: flex;
  flex-direction: row;
  gap: 2rem;
  padding: 1.5rem;
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
  border: 1px solid rgba(255, 255, 255, 0.15);
}

.state-group {
  text-align: left;
}

.state-group h5 {
  color: rgba(255, 255, 255, 0.9);
  margin: 0 0 1rem 0;
  font-size: 1rem;
}

.state-group p {
  color: rgba(255, 255, 255, 0.7);
  margin: 0.5rem 0;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .toggle-states-display {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .state-group {
    text-align: center;
  }
}
</style>