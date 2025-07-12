<script lang="ts">
  import { onMount, createEventDispatcher } from 'svelte'
  import { injectLiquidGlassFilters } from '@glasnost-ui/shared'

  export let isOpen = false
  export let className = ''

  const dispatch = createEventDispatcher()

  $: menuClasses = [
    'glasnost-hamburger-menu',
    isOpen ? 'hamburger-menu--open' : '',
    className
  ].filter(Boolean).join(' ')

  const handleToggle = () => {
    dispatch('toggle')
  }

  onMount(() => {
    injectLiquidGlassFilters()
  })
</script>

<button 
  class={menuClasses}
  on:click={handleToggle}
  type="button"
  aria-label={isOpen ? 'Close menu' : 'Open menu'}
  aria-expanded={isOpen}
>
  <div class="hamburger-glass-overlay"></div>
  <div class="hamburger-icon">
    <span class="hamburger-line hamburger-line--top"></span>
    <span class="hamburger-line hamburger-line--middle"></span>
    <span class="hamburger-line hamburger-line--bottom"></span>
  </div>
  <div class="hamburger-shine"></div>
</button>

<style>
  .glasnost-hamburger-menu {
    position: relative;
    width: 52px;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(25px) saturate(200%) brightness(110%);
    -webkit-backdrop-filter: blur(25px) saturate(200%) brightness(110%);
    background: linear-gradient(135deg, 
      rgba(255, 255, 255, 0.25) 0%, 
      rgba(255, 255, 255, 0.1) 100%);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 16px;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.23, 1, 0.320, 1);
    filter: url(#subtleEnhancement);
    box-shadow: 
      0 8px 32px rgba(31, 38, 135, 0.37),
      inset 0 1px 0 rgba(255, 255, 255, 0.5),
      0 1px 0 rgba(255, 255, 255, 0.1);
    overflow: hidden;
    outline: none;
    transform-style: preserve-3d;
  }

  .hamburger-glass-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, 
      rgba(255, 255, 255, 0.15) 0%,
      transparent 50%,
      rgba(255, 255, 255, 0.08) 100%);
    border-radius: inherit;
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }

  .hamburger-shine {
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
      transparent 0%, 
      rgba(255, 255, 255, 0.5) 50%, 
      transparent 100%);
    border-radius: inherit;
    transition: left 0.5s ease;
    pointer-events: none;
  }

  .glasnost-hamburger-menu:hover {
    transform: translateY(-3px) scale(1.05);
    background: linear-gradient(135deg, 
      rgba(255, 255, 255, 0.3) 0%, 
      rgba(255, 255, 255, 0.15) 100%);
    border-color: rgba(255, 255, 255, 0.4);
    box-shadow: 
      0 12px 40px rgba(31, 38, 135, 0.4),
      inset 0 2px 0 rgba(255, 255, 255, 0.6),
      0 2px 0 rgba(255, 255, 255, 0.2);
    filter: url(#buttonGlass);
  }

  .glasnost-hamburger-menu:hover .hamburger-glass-overlay {
    opacity: 1;
  }

  .glasnost-hamburger-menu:hover .hamburger-shine {
    left: 100%;
  }

  .glasnost-hamburger-menu:focus-visible {
    outline: 2px solid rgba(255, 255, 255, 0.5);
    outline-offset: 3px;
  }

  .glasnost-hamburger-menu:active {
    transform: translateY(-1px) scale(1.02);
    filter: url(#shimmerEffect);
  }

  /* Open state styling */
  .hamburger-menu--open {
    background: linear-gradient(135deg, 
      rgba(236, 72, 153, 0.3) 0%, 
      rgba(190, 24, 93, 0.2) 100%);
    border-color: rgba(236, 72, 153, 0.4);
    box-shadow: 
      0 12px 40px rgba(236, 72, 153, 0.3),
      inset 0 1px 0 rgba(255, 255, 255, 0.5),
      0 1px 0 rgba(236, 72, 153, 0.2);
  }

  .hamburger-menu--open:hover {
    background: linear-gradient(135deg, 
      rgba(236, 72, 153, 0.4) 0%, 
      rgba(190, 24, 93, 0.3) 100%);
    box-shadow: 
      0 15px 45px rgba(236, 72, 153, 0.4),
      inset 0 2px 0 rgba(255, 255, 255, 0.6),
      0 2px 0 rgba(236, 72, 153, 0.3);
  }

  /* Hamburger icon container */
  .hamburger-icon {
    position: relative;
    width: 26px;
    height: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 2;
  }

  /* Hamburger lines */
  .hamburger-line {
    display: block;
    width: 100%;
    height: 3px;
    background: linear-gradient(135deg, 
      rgba(255, 255, 255, 0.95) 0%, 
      rgba(255, 255, 255, 0.8) 100%);
    border-radius: 3px;
    transition: all 0.4s cubic-bezier(0.23, 1, 0.320, 1);
    transform-origin: center;
    filter: url(#cleanGlow);
    box-shadow: 
      0 2px 4px rgba(0, 0, 0, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.3);
  }

  /* Animation states */
  .hamburger-menu--open .hamburger-line--top {
    transform: translateY(8.5px) rotate(45deg);
    background: linear-gradient(135deg, 
      rgba(255, 255, 255, 0.98) 0%, 
      rgba(255, 255, 255, 0.85) 100%);
  }

  .hamburger-menu--open .hamburger-line--middle {
    opacity: 0;
    transform: scaleX(0);
  }

  .hamburger-menu--open .hamburger-line--bottom {
    transform: translateY(-8.5px) rotate(-45deg);
    background: linear-gradient(135deg, 
      rgba(255, 255, 255, 0.98) 0%, 
      rgba(255, 255, 255, 0.85) 100%);
  }

  /* Enhanced hover effects for lines */
  .glasnost-hamburger-menu:hover .hamburger-line {
    background: linear-gradient(135deg, 
      rgba(255, 255, 255, 0.98) 0%, 
      rgba(255, 255, 255, 0.9) 100%);
    box-shadow: 
      0 3px 6px rgba(0, 0, 0, 0.25),
      inset 0 1px 0 rgba(255, 255, 255, 0.4);
  }

  /* Responsive design */
  @media (max-width: 768px) {
    .glasnost-hamburger-menu {
      width: 48px;
      height: 48px;
      border-radius: 14px;
    }
    
    .hamburger-icon {
      width: 22px;
      height: 18px;
    }
    
    .hamburger-line {
      height: 2.5px;
    }
    
    .hamburger-menu--open .hamburger-line--top {
      transform: translateY(7.75px) rotate(45deg);
    }
    
    .hamburger-menu--open .hamburger-line--bottom {
      transform: translateY(-7.75px) rotate(-45deg);
    }
  }

  /* Reduced motion */
  @media (prefers-reduced-motion: reduce) {
    .glasnost-hamburger-menu,
    .hamburger-line,
    .hamburger-shine,
    .hamburger-glass-overlay {
      transition: none;
      animation: none;
    }
    
    .glasnost-hamburger-menu:hover {
      transform: translateY(-2px);
    }
  }
</style> 