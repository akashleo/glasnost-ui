<script setup lang="ts">
import { ref } from 'vue'
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
const userProfile = {
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
  name: 'Alex Johnson',
  title: 'Frontend Developer'
}

const handleMenuToggle = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const handleToggleChange = (checked: boolean) => {
  isToggleChecked.value = checked
}

const handleButtonClick = () => {
  alert('Glass button clicked!')
}
</script>

<template>
  <div class="app">
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
      <div class="container">
        <section class="hero">
          <h1 class="hero-title">Liquid Glass Components</h1>
          <p class="hero-subtitle">
            Beautiful, fluid interface components with liquid glass aesthetics
          </p>
        </section>

        <section class="components-showcase">
          <div class="showcase-grid">
            <!-- Profile Card -->
            <div class="showcase-item">
              <h3>Profile Card</h3>
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

            <!-- Buttons -->
            <div class="showcase-item">
              <h3>Glass Buttons</h3>
              <div class="button-group">
                <GlassButton 
                  variant="primary" 
                  @click="handleButtonClick"
                >
                  Primary
                </GlassButton>
                <GlassButton 
                  variant="secondary"
                  @click="handleButtonClick"
                >
                  Secondary
                </GlassButton>
                <GlassButton 
                  variant="accent"
                  @click="handleButtonClick"
                >
                  Accent
                </GlassButton>
              </div>
              
              <div class="button-group">
                <GlassButton size="small">Small</GlassButton>
                <GlassButton size="medium">Medium</GlassButton>
                <GlassButton size="large">Large</GlassButton>
              </div>
            </div>

            <!-- Comment Card -->
            <div class="showcase-item showcase-item--wide">
              <h3>Comment List Card</h3>
              <CommentListCard title="Recent Comments">
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
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<style scoped>
.app {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.main-content {
  padding-top: 2rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(45deg, #fff, #f0f9ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Hero Section */
.hero {
  text-align: center;
  padding: 4rem 0;
  margin-bottom: 4rem;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  margin: 0 0 1rem 0;
  background: linear-gradient(45deg, #ffffff, #e0f2fe);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.hero-subtitle {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

/* Components Showcase */
.components-showcase {
  margin-bottom: 4rem;
}

.showcase-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  align-items: start;
}

.showcase-item {
  text-align: center;
}

.showcase-item--wide {
  grid-column: 1 / -1;
}

.showcase-item h3 {
  color: rgba(255, 255, 255, 0.9);
  margin: 0 0 1.5rem 0;
  font-size: 1.5rem;
  font-weight: 600;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

/* Button Groups */
.button-group {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.profile-actions {
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  width: 100%;
}

/* Responsive Design */
@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
  }
  
  .showcase-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .button-group {
    gap: 0.75rem;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 2rem 0;
  }
  
  .hero-title {
    font-size: 2rem;
  }
  
  .button-group {
    flex-direction: column;
    align-items: center;
  }
}
</style> 