<script setup lang="ts">
import { onMounted } from 'vue'
import { injectLiquidGlassFilters } from '../filters'

interface Props {
  leftSlot?: any
  centerLogo?: any
  rightSlot?: any
  className?: string
}

withDefaults(defineProps<Props>(), {
  className: ''
})

onMounted(() => {
  injectLiquidGlassFilters()
})
</script>

<template>
  <nav :class="`glasnost-navbar ${className}`">
    <div class="navbar-glass-overlay"></div>
    <div class="navbar-liquid-distortion"></div>
    <div class="navbar-content">
      <div class="navbar-left">
        <slot name="left">
          <div v-if="leftSlot" v-html="leftSlot"></div>
        </slot>
      </div>
      
      <div class="navbar-center">
        <slot name="center">
          <div v-if="centerLogo" v-html="centerLogo"></div>
        </slot>
      </div>
      
      <div class="navbar-right">
        <slot name="right">
          <div v-if="rightSlot" v-html="rightSlot"></div>
        </slot>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.glasnost-navbar {
  position: sticky;
  top: 1rem;
  width: 90%;
  margin: 1rem auto;
  padding: 1.25rem 2rem;
  border-radius: 24px;
  /* backdrop-filter: blur(2px) saturate(180%) brightness(120%);
  -webkit-backdrop-filter: blur(2px) saturate(180%) brightness(120%); */
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.15) 0%, 
    rgba(255, 255, 255, 0.08) 50%,
    rgba(255, 255, 255, 0.03) 100%);
  border: 1px solid rgba(255, 255, 255, 0.25);
  filter: url(#liquidNavbar);
  transition: all 0.4s cubic-bezier(0.23, 1, 0.320, 1);
  z-index: 1000;
  overflow: hidden;
  position: relative;
}

.navbar-glass-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 30% 40%, 
    rgba(255, 255, 255, 0.1) 0%,
    transparent 70%);
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.4s ease;
  border-radius: inherit;
}

.navbar-liquid-distortion {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, 
    rgba(255, 255, 255, 0.05) 0%,
    transparent 50%,
    rgba(255, 255, 255, 0.05) 100%);
  filter: url(#frostedGlass);
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
  border-radius: inherit;
}

.glasnost-navbar:hover .navbar-glass-overlay {
  opacity: 1;
}

.glasnost-navbar:hover .navbar-liquid-distortion {
  opacity: 0.6;
}

.glasnost-navbar::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, 
    transparent 0%, 
    rgba(255, 255, 255, 0.3) 50%, 
    transparent 100%);
  transition: left 0.6s ease;
  pointer-events: none;
  border-radius: inherit;
}

.glasnost-navbar:hover::before {
  left: 100%;
}

.navbar-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

.navbar-left,
.navbar-center,
.navbar-right {
  display: flex;
  align-items: center;
  flex: 1;
}

.navbar-left {
  justify-content: flex-start;
}

.navbar-center {
  justify-content: center;
  font-weight: 700;
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.95);
  letter-spacing: 0.05em;
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.95) 0%,
    rgba(255, 255, 255, 0.8) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  box-shadow: none !important;
}

.navbar-content > * {
  box-shadow: none !important;
}

.glasnost-navbar * {
  box-shadow: none !important;
}

.navbar-right {
  justify-content: flex-end;
}

/* Enhanced glass effect on hover */
.glasnost-navbar:hover {
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.2) 0%, 
    rgba(255, 255, 255, 0.12) 50%,
    rgba(255, 255, 255, 0.06) 100%);
  border-color: rgba(255, 255, 255, 0.35);
  box-shadow: 
    0 16px 48px rgba(0, 0, 0, 0.15),
    inset 0 2px 0 rgba(255, 255, 255, 0.5),
    0 0 0 1px rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
  filter: url(#glassDistortion);
}

/* Responsive design */
@media (max-width: 768px) {
  .glasnost-navbar {
    width: 98%;
    margin: 0.5rem auto;
    padding: 1rem 1.5rem;
    border-radius: 20px;
  }
  
  .navbar-center {
    font-size: 1.25rem;
  }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .glasnost-navbar::before,
  .navbar-glass-overlay,
  .navbar-liquid-distortion {
    transition: none;
  }
  
  .glasnost-navbar:hover {
    transform: none;
  }
}
</style> 