<script lang="ts">
  import { onMount } from 'svelte'
  import { injectLiquidGlassFilters } from '@glasnost-ui/shared'

  export let leftSlot = null
  export let centerLogo = null
  export let rightSlot = null
  export let className = ''

  onMount(() => {
    injectLiquidGlassFilters()
  })
</script>

<nav class="glasnost-navbar {className}">
  <div class="navbar-glass-overlay"></div>
  <div class="navbar-content">
    <div class="navbar-left">
      <slot name="left">
        {#if leftSlot}
          {@html leftSlot}
        {/if}
      </slot>
    </div>
    
    <div class="navbar-center">
      <slot name="center">
        {#if centerLogo}
          {@html centerLogo}
        {/if}
      </slot>
    </div>
    
    <div class="navbar-right">
      <slot name="right">
        {#if rightSlot}
          {@html rightSlot}
        {/if}
      </slot>
    </div>
  </div>
</nav>

<style>
  .glasnost-navbar {
    position: relative;
    width: 100%;
    padding: 1.25rem 2rem;
    backdrop-filter: blur(40px) saturate(180%) brightness(120%);
    -webkit-backdrop-filter: blur(40px) saturate(180%) brightness(120%);
    background: linear-gradient(135deg, 
      rgba(255, 255, 255, 0.25) 0%, 
      rgba(255, 255, 255, 0.1) 50%,
      rgba(255, 255, 255, 0.05) 100%);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    filter: url(#navbarGlass);
    box-shadow: 
      0 8px 32px rgba(31, 38, 135, 0.37),
      inset 0 1px 0 rgba(255, 255, 255, 0.5),
      0 1px 0 rgba(255, 255, 255, 0.1);
    transition: all 0.3s cubic-bezier(0.23, 1, 0.320, 1);
    z-index: 1000;
    overflow: hidden;
  }

  .navbar-glass-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, 
      rgba(255, 255, 255, 0.1) 0%,
      transparent 50%,
      rgba(255, 255, 255, 0.05) 100%);
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .glasnost-navbar:hover .navbar-glass-overlay {
    opacity: 1;
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
      rgba(255, 255, 255, 0.4) 50%, 
      transparent 100%);
    transition: left 0.5s ease;
    pointer-events: none;
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
    z-index: 1;
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
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    letter-spacing: 0.05em;
  }

  .navbar-right {
    justify-content: flex-end;
  }

  /* Enhanced glass effect on hover */
  .glasnost-navbar:hover {
    background: linear-gradient(135deg, 
      rgba(255, 255, 255, 0.3) 0%, 
      rgba(255, 255, 255, 0.15) 50%,
      rgba(255, 255, 255, 0.1) 100%);
    border-color: rgba(255, 255, 255, 0.4);
    box-shadow: 
      0 12px 40px rgba(31, 38, 135, 0.5),
      inset 0 2px 0 rgba(255, 255, 255, 0.6),
      0 2px 0 rgba(255, 255, 255, 0.2);
  }

  /* Responsive design */
  @media (max-width: 768px) {
    .glasnost-navbar {
      padding: 1rem 1.5rem;
    }
    
    .navbar-center {
      font-size: 1.25rem;
    }
  }

  /* Reduced motion */
  @media (prefers-reduced-motion: reduce) {
    .glasnost-navbar::before,
    .navbar-glass-overlay {
      transition: none;
    }
  }
</style> 