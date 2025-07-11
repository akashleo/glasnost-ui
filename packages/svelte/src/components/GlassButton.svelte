<script lang="ts">
  import { onMount, createEventDispatcher } from 'svelte'
  import { injectLiquidGlassFilters } from '@glasnost/shared'

  export let variant: 'primary' | 'secondary' | 'accent' = 'primary'
  export let size: 'small' | 'medium' | 'large' = 'medium'
  export let disabled: boolean = false
  export let className: string = ''

  const dispatch = createEventDispatcher()

  $: buttonClasses = [
    'glasnost-glass-button glass-button',
    `glass-button--${variant}`,
    `glass-button--${size}`,
    disabled ? 'glass-button--disabled' : '',
    className
  ].filter(Boolean).join(' ')

  onMount(() => {
    injectLiquidGlassFilters()
  })

  const handleClick = () => {
    if (!disabled) {
      dispatch('click')
    }
  }
</script>

<button 
  class={buttonClasses}
  {disabled}
  on:click={handleClick}
  type="button"
>
  <!-- Embedded SVG filters -->
  <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="buttonLiquidDistortion" x="-15%" y="-15%" width="130%" height="130%">
        <feTurbulence 
          type="fractalNoise" 
          baseFrequency="0.03 0.02" 
          numOctaves="2" 
          result="buttonNoise"
        />
        <feDisplacementMap 
          in="SourceGraphic" 
          in2="buttonNoise" 
          scale="4" 
          xChannelSelector="R" 
          yChannelSelector="G"
        />
      </filter>

      <filter id="buttonRipple" x="-50%" y="-50%" width="200%" height="200%">
        <feTurbulence 
          type="turbulence" 
          baseFrequency="0.02" 
          numOctaves="1" 
          result="rippleNoise"
        />
        <feDisplacementMap 
          in="SourceGraphic" 
          in2="rippleNoise" 
          scale="8" 
          xChannelSelector="R" 
          yChannelSelector="B"
        />
      </filter>
    </defs>
  </svg>

  <span class="button-content">
    <slot></slot>
  </span>
  
  <div class="button-ripple"></div>
  <div class="button-glow"></div>
</button>

<style>
  .glasnost-glass-button {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(12px) saturate(1.8);
    -webkit-backdrop-filter: blur(12px) saturate(1.8);
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.05) 100%);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 12px;
    color: rgba(255, 255, 255, 0.9);
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    filter: url(#buttonLiquidDistortion);
    box-shadow: 
      0 4px 16px rgba(0, 0, 0, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.4);
    overflow: hidden;
    text-decoration: none;
    user-select: none;
    outline: none;
  }

  .glasnost-glass-button:hover {
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.25);
    border-color: rgba(255, 255, 255, 0.4);
    box-shadow: 
      0 8px 24px rgba(0, 0, 0, 0.15),
      inset 0 2px 0 rgba(255, 255, 255, 0.5);
  }

  .glasnost-glass-button:active {
    transform: translateY(0);
    filter: url(#buttonRipple);
  }

  .glasnost-glass-button:focus-visible {
    outline: 2px solid rgba(255, 255, 255, 0.5);
    outline-offset: 2px;
  }

  /* Size variants */
  :global(.glass-button--small) {
    padding: 8px 16px;
    font-size: 0.875rem;
    border-radius: 8px;
  }

  :global(.glass-button--medium) {
    padding: 12px 24px;
    font-size: 1rem;
    border-radius: 12px;
  }

  :global(.glass-button--large) {
    padding: 16px 32px;
    font-size: 1.125rem;
    border-radius: 16px;
  }

  /* Variant styles */
  :global(.glass-button--primary) {
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.3) 0%, rgba(29, 78, 216, 0.2) 100%);
  }

  :global(.glass-button--primary:hover) {
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.4) 0%, rgba(29, 78, 216, 0.3) 100%);
  }

  :global(.glass-button--secondary) {
    background: linear-gradient(135deg, rgba(156, 163, 175, 0.2) 0%, rgba(107, 114, 128, 0.1) 100%);
  }

  :global(.glass-button--secondary:hover) {
    background: linear-gradient(135deg, rgba(156, 163, 175, 0.3) 0%, rgba(107, 114, 128, 0.2) 100%);
  }

  :global(.glass-button--accent) {
    background: linear-gradient(135deg, rgba(236, 72, 153, 0.3) 0%, rgba(190, 24, 93, 0.2) 100%);
  }

  :global(.glass-button--accent:hover) {
    background: linear-gradient(135deg, rgba(236, 72, 153, 0.4) 0%, rgba(190, 24, 93, 0.3) 100%);
  }

  /* Disabled state */
  :global(.glass-button--disabled) {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none !important;
    filter: none !important;
  }

  :global(.glass-button--disabled:hover) {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.05) 100%);
    border-color: rgba(255, 255, 255, 0.3);
    box-shadow: 
      0 4px 16px rgba(0, 0, 0, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.4);
  }

  /* Button content */
  .button-content {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  /* Ripple effect */
  .button-ripple {
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

  .glasnost-glass-button:hover .button-ripple {
    width: 200px;
    height: 200px;
  }

  /* Button glow effect */
  .button-glow {
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: conic-gradient(from 0deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    border-radius: inherit;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 0;
    pointer-events: none;
  }

  .glasnost-glass-button:hover .button-glow {
    opacity: 0.6;
    animation: buttonGlowRotate 2s linear infinite;
  }

  @keyframes buttonGlowRotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* Responsive design */
  @media (max-width: 768px) {
    :global(.glass-button--small) {
      padding: 6px 12px;
      font-size: 0.8rem;
    }
    
    :global(.glass-button--medium) {
      padding: 10px 20px;
      font-size: 0.9rem;
    }
    
    :global(.glass-button--large) {
      padding: 14px 28px;
      font-size: 1rem;
    }
  }

  /* Reduced motion */
  @media (prefers-reduced-motion: reduce) {
    .glasnost-glass-button {
      transition: none;
    }
    
    .button-ripple {
      transition: none;
    }
    
    .button-glow {
      animation: none;
    }
  }
</style> 