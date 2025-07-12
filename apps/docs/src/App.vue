<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  Navbar,
  ProfileCard,
  CommentListCard,
  GlassButton,
  HamburgerMenu,
  GlassToggleButton
} from '@glasnost/vue'

// Component state
const isMenuOpen = ref(false)
const isToggleChecked = ref(false)
const selectedBackground = ref(0)
const selectedComponent = ref('profile-card')

const userProfile = {
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
  name: 'Alex Johnson',
  title: 'Frontend Developer'
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
    name: 'Ocean Blue',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    icon: '🌊'
  },
  {
    name: 'Sunset Orange',
    gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)',
    icon: '🌅'
  },
  {
    name: 'Forest Green',
    gradient: 'linear-gradient(135deg, #134e5e 0%, #71b280 100%)',
    icon: '🌲'
  },
  {
    name: 'Purple Dreams',
    gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    icon: '💜'
  },
  {
    name: 'Golden Hour',
    gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
    icon: '🌇'
  },
  {
    name: 'Arctic Ice',
    gradient: 'linear-gradient(135deg, #74b9ff 0%, #0984e3 100%)',
    icon: '❄️'
  }
]

const currentGradient = computed(() => backgroundOptions[selectedBackground.value].gradient)
const currentComponent = computed(() => componentList.find(c => c.id === selectedComponent.value))

const handleMenuToggle = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const handleToggleChange = (checked: boolean) => {
  isToggleChecked.value = checked
}

const handleButtonClick = () => {
  alert('Glass button clicked!')
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
    <!-- Navigation Bar -->
    <Navbar>
      <template #left>
        <HamburgerMenu 
          :isOpen="isMenuOpen" 
          @toggle="handleMenuToggle"
        />
      </template>
      
      <template #center>
        <div class="logo">
          🌊 Glasnost UI
        </div>
      </template>
      
      <template #right>
        <GlassToggleButton
          :checked="isToggleChecked"
          @change="handleToggleChange"
          label="Dark Mode"
        />
      </template>
    </Navbar>

    <!-- Main Content -->
    <main class="main-content">
      <div class="layout-container">
        <!-- Left Sidebar: Component List -->
        <aside class="sidebar-left">
          <div class="sidebar-content">
            <h2 class="sidebar-title">Components</h2>
            <div class="component-list">
              <button
                v-for="component in componentList"
                :key="component.id"
                class="component-item"
                :class="{ active: selectedComponent === component.id }"
                @click="selectComponent(component.id)"
              >
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
            <div class="showcase-header">
              <h1 class="showcase-title">{{ currentComponent?.name }}</h1>
              <p class="showcase-description">{{ currentComponent?.description }}</p>
            </div>

            <div class="showcase-content">
              <!-- Profile Card -->
              <div v-if="selectedComponent === 'profile-card'" class="demo-container">
                <ProfileCard
                  :avatar="userProfile.avatar"
                  :name="userProfile.name"
                  :title="userProfile.title"
                >
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
                    <h4>Button Variants</h4>
                    <div class="button-row">
                      <GlassButton variant="primary" @click="handleButtonClick">
                        Primary
                      </GlassButton>
                      <GlassButton variant="secondary" @click="handleButtonClick">
                        Secondary
                      </GlassButton>
                      <GlassButton variant="accent" @click="handleButtonClick">
                        Accent
                      </GlassButton>
                    </div>
                  </div>
                  
                  <div class="button-group">
                    <h4>Button Sizes</h4>
                    <div class="button-row">
                      <GlassButton size="small">Small</GlassButton>
                      <GlassButton size="medium">Medium</GlassButton>
                      <GlassButton size="large">Large</GlassButton>
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
                <CommentListCard title="Recent Comments" class="comment-demo">
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
                  <div class="toggle-group">
                    <GlassToggleButton
                      :checked="isToggleChecked"
                      @change="handleToggleChange"
                      label="Dark Mode"
                    />
                  </div>
                  <div class="toggle-group">
                    <GlassToggleButton
                      :checked="true"
                      label="Notifications"
                    />
                  </div>
                  <div class="toggle-group">
                    <GlassToggleButton
                      :checked="false"
                      label="Auto-save"
                    />
                  </div>
                </div>
              </div>

              <!-- Hamburger Menu -->
              <div v-else-if="selectedComponent === 'hamburger-menu'" class="demo-container">
                <div class="hamburger-demo">
                  <HamburgerMenu 
                    :isOpen="isMenuOpen" 
                    @toggle="handleMenuToggle"
                  />
                  <p class="demo-note">Click to toggle menu state</p>
                </div>
              </div>

              <!-- Navbar -->
              <div v-else-if="selectedComponent === 'navbar'" class="demo-container">
                <div class="navbar-demo">
                  <Navbar>
                    <template #left>
                      <span>Logo</span>
                    </template>
                    <template #center>
                      <span>Navigation</span>
                    </template>
                    <template #right>
                      <span>Actions</span>
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
              <button
                v-for="(option, index) in backgroundOptions"
                :key="index"
                class="background-option"
                :class="{ active: selectedBackground === index }"
                :style="{ background: option.gradient }"
                @click="selectBackground(index)"
                :title="option.name"
              >
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
  border: 1px solid rgba(255, 255, 255, 0.15);
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
  }
  
  .showcase-title {
    font-size: 2rem;
  }
  
  .component-list {
    grid-template-columns: 1fr;
  }
  
  .background-options {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .button-row {
    flex-direction: column;
    align-items: center;
  }
}

@media (max-width: 480px) {
  .component-item {
    flex-direction: column;
    text-align: center;
    gap: 0.5rem;
  }
  
  .background-option {
    flex-direction: column;
    text-align: center;
    gap: 0.5rem;
  }
  
  .background-options {
    grid-template-columns: 1fr;
  }
}
</style> 