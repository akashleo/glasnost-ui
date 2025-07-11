<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { injectLiquidGlassFilters } from '@glasnost/shared'

interface Props {
  isOpen: boolean
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  className: ''
})

const emit = defineEmits<{
  toggle: []
}>()

const menuClasses = computed(() => {
  return [
    'glasnost-hamburger-menu',
    'glass-button',
    props.isOpen ? 'hamburger-menu--open' : '',
    props.className
  ].filter(Boolean).join(' ')
})

onMounted(() => {
  injectLiquidGlassFilters()
})

const handleToggle = () => {
  emit('toggle')
}
</script>

<template>
  <button 
    :class="menuClasses"
    @click="handleToggle"
    type="button"
    :aria-label="isOpen ? 'Close menu' : 'Open menu'"
    :aria-expanded="isOpen"
  >
    <!-- Embedded SVG filters -->
    <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="hamburgerDistortion" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence 
            type="fractalNoise" 
            baseFrequency="0.04 0.02" 
            numOctaves="2" 
            result="hamburgerNoise"
          />
          <feDisplacementMap 
            in="SourceGraphic" 
            in2="hamburgerNoise" 
            scale="3" 
            xChannelSelector="R" 
            yChannelSelector="G"
          />
        </filter>

        <filter id="hamburgerGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="glowBlur"/>
          <feMerge> 
            <feMergeNode in="glowBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
    </svg>

    <div class="hamburger-icon">
      <span class="hamburger-line hamburger-line--top"></span>
      <span class="hamburger-line hamburger-line--middle"></span>
      <span class="hamburger-line hamburger-line--bottom"></span>
    </div>

    <!-- Ripple effect on click -->
    <div class="hamburger-ripple"></div>
  </button>
</template>

<style scoped>
.glasnost-hamburger-menu {
  position: relative;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(12px) saturate(1.8);
  -webkit-backdrop-filter: blur(12px) saturate(1.8);
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.05) 100%);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  filter: url(#hamburgerDistortion);
  box-shadow: 
    0 4px 16px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.4);
  overflow: hidden;
  outline: none;
}

.glasnost-hamburger-menu:hover {
  transform: translateY(-2px) scale(1.05);
  background: rgba(255, 255, 255, 0.25);
  border-color: rgba(255, 255, 255, 0.4);
  box-shadow: 
    0 8px 24px rgba(0, 0, 0, 0.15),
    inset 0 2px 0 rgba(255, 255, 255, 0.5);
}

.glasnost-hamburger-menu:focus-visible {
  outline: 2px solid rgba(255, 255, 255, 0.5);
  outline-offset: 2px;
}

.glasnost-hamburger-menu:active {
  transform: translateY(0) scale(1);
}

/* Open state styling */
.hamburger-menu--open {
  background: linear-gradient(135deg, rgba(236, 72, 153, 0.3) 0%, rgba(190, 24, 93, 0.2) 100%);
  border-color: rgba(236, 72, 153, 0.4);
}

.hamburger-menu--open:hover {
  background: linear-gradient(135deg, rgba(236, 72, 153, 0.4) 0%, rgba(190, 24, 93, 0.3) 100%);
}

/* Hamburger icon container */
.hamburger-icon {
  position: relative;
  width: 24px;
  height: 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 2;
}

/* Hamburger lines */
.hamburger-line {
  display: block;
  width: 100%;
  height: 2px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 2px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: center;
  filter: url(#hamburgerGlow);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}

/* Animation states */
.hamburger-menu--open .hamburger-line--top {
  transform: translateY(8px) rotate(45deg);
  background: rgba(255, 255, 255, 0.95);
}

.hamburger-menu--open .hamburger-line--middle {
  opacity: 0;
  transform: scaleX(0);
}

.hamburger-menu--open .hamburger-line--bottom {
  transform: translateY(-8px) rotate(-45deg);
  background: rgba(255, 255, 255, 0.95);
}

/* Ripple effect */
.hamburger-ripple {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1;
  pointer-events: none;
}

.glasnost-hamburger-menu:active .hamburger-ripple {
  width: 80px;
  height: 80px;
  animation: hamburgerRipple 0.6s ease-out;
}

@keyframes hamburgerRipple {
  0% {
    width: 0;
    height: 0;
    opacity: 0.8;
  }
  50% {
    width: 80px;
    height: 80px;
    opacity: 0.4;
  }
  100% {
    width: 100px;
    height: 100px;
    opacity: 0;
  }
}

/* Liquid glass effect on hover */
.glasnost-hamburger-menu::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: conic-gradient(from 0deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  border-radius: inherit;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 0;
  animation: hamburgerGlowRotate 3s linear infinite;
}

.glasnost-hamburger-menu:hover::before {
  opacity: 0.4;
}

.hamburger-menu--open::before {
  background: conic-gradient(from 0deg, transparent, rgba(236, 72, 153, 0.4), transparent);
}

@keyframes hamburgerGlowRotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Floating particles effect */
.glasnost-hamburger-menu::after {
  content: '';
  position: absolute;
  top: 10%;
  left: 10%;
  right: 10%;
  bottom: 10%;
  background: 
    radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.1) 2px, transparent 2px),
    radial-gradient(circle at 80% 40%, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
    radial-gradient(circle at 40% 80%, rgba(255, 255, 255, 0.06) 1px, transparent 1px);
  background-size: 15px 15px, 12px 12px, 18px 18px;
  opacity: 0;
  transition: opacity 0.4s ease;
  animation: floatingParticles 6s ease-in-out infinite;
  pointer-events: none;
}

.glasnost-hamburger-menu:hover::after {
  opacity: 0.6;
}

@keyframes floatingParticles {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
}

/* Responsive design */
@media (max-width: 768px) {
  .glasnost-hamburger-menu {
    width: 44px;
    height: 44px;
  }
  
  .hamburger-icon {
    width: 20px;
    height: 16px;
  }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .glasnost-hamburger-menu,
  .hamburger-line,
  .hamburger-ripple {
    transition: none;
    animation: none;
  }
  
  .glasnost-hamburger-menu::before,
  .glasnost-hamburger-menu::after {
    animation: none;
  }
}
</style> 