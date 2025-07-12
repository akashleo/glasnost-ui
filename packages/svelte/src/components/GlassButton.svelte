<script lang="ts">
  import { onMount, createEventDispatcher } from 'svelte'
  import { injectLiquidGlassFilters } from '@glasnost-ui/shared'

  export let variant = 'primary'
  export let size = 'medium'
  export let disabled = false
  export let className = ''

  const dispatch = createEventDispatcher()

  $: buttonClasses = [
    'glasnost-glass-button',
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
  <div class="button-glass-overlay"></div>
  <span class="button-content">
    <slot></slot>
  </span>
  <div class="button-shine"></div>
</button>

<style>
  .glasnost-glass-button {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(25px) saturate(200%) brightness(110%);
    -webkit-backdrop-filter: blur(25px) saturate(200%) brightness(110%);
    background: linear-gradient(135deg, 
      rgba(255, 255, 255, 0.25) 0%, 
      rgba(255, 255, 255, 0.1) 100%);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 16px;
    color: rgba(255, 255, 255, 0.95);
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.23, 1, 0.320, 1);
    filter: url(#buttonGlass);
    box-shadow: 
      0 8px 32px rgba(31, 38, 135, 0.37),
      inset 0 1px 0 rgba(255, 255, 255, 0.5),
      0 1px 0 rgba(255, 255, 255, 0.1);
    overflow: hidden;
    text-decoration: none;
    user-select: none;
    outline: none;
    transform-style: preserve-3d;
  }

  .button-glass-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, 
      rgba(255, 255, 255, 0.2) 0%,
      transparent 50%,
      rgba(255, 255, 255, 0.1) 100%);
    border-radius: inherit;
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }

  .button-shine {
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
      transparent 0%, 
      rgba(255, 255, 255, 0.6) 50%, 
      transparent 100%);
    border-radius: inherit;
    transition: left 0.6s ease;
    pointer-events: none;
  }

  .glasnost-glass-button:hover {
    transform: translateY(-3px) scale(1.02);
    background: linear-gradient(135deg, 
      rgba(255, 255, 255, 0.3) 0%, 
      rgba(255, 255, 255, 0.15) 100%);
    border-color: rgba(255, 255, 255, 0.4);
    box-shadow: 
      0 15px 45px rgba(31, 38, 135, 0.4),
      inset 0 2px 0 rgba(255, 255, 255, 0.6),
      0 2px 0 rgba(255, 255, 255, 0.2);
  }

  .glasnost-glass-button:hover .button-glass-overlay {
    opacity: 1;
  }

  .glasnost-glass-button:hover .button-shine {
    left: 100%;
  }

  .glasnost-glass-button:active {
    transform: translateY(-1px) scale(0.98);
    box-shadow: 
      0 5px 20px rgba(31, 38, 135, 0.3),
      inset 0 1px 0 rgba(255, 255, 255, 0.4);
  }

  .glasnost-glass-button:focus-visible {
    outline: 2px solid rgba(255, 255, 255, 0.5);
    outline-offset: 3px;
  }

  /* Size variants */
  :global(.glass-button--small) {
    padding: 8px 20px;
    font-size: 0.875rem;
    border-radius: 12px;
  }

  :global(.glass-button--medium) {
    padding: 12px 28px;
    font-size: 1rem;
    border-radius: 16px;
  }

  :global(.glass-button--large) {
    padding: 16px 36px;
    font-size: 1.125rem;
    border-radius: 20px;
  }

  /* Variant styles */
  :global(.glass-button--primary) {
    background: linear-gradient(135deg, 
      rgba(99, 102, 241, 0.3) 0%, 
      rgba(67, 56, 202, 0.2) 100%);
    color: rgba(255, 255, 255, 0.95);
  }

  :global(.glass-button--primary:hover) {
    background: linear-gradient(135deg, 
      rgba(99, 102, 241, 0.4) 0%, 
      rgba(67, 56, 202, 0.3) 100%);
    box-shadow: 
      0 15px 45px rgba(99, 102, 241, 0.4),
      inset 0 2px 0 rgba(255, 255, 255, 0.6),
      0 2px 0 rgba(99, 102, 241, 0.2);
  }

  :global(.glass-button--secondary) {
    background: linear-gradient(135deg, 
      rgba(107, 114, 128, 0.3) 0%, 
      rgba(75, 85, 99, 0.2) 100%);
  }

  :global(.glass-button--secondary:hover) {
    background: linear-gradient(135deg, 
      rgba(107, 114, 128, 0.4) 0%, 
      rgba(75, 85, 99, 0.3) 100%);
    box-shadow: 
      0 15px 45px rgba(107, 114, 128, 0.4),
      inset 0 2px 0 rgba(255, 255, 255, 0.6),
      0 2px 0 rgba(107, 114, 128, 0.2);
  }

  :global(.glass-button--accent) {
    background: linear-gradient(135deg, 
      rgba(236, 72, 153, 0.3) 0%, 
      rgba(190, 24, 93, 0.2) 100%);
  }

  :global(.glass-button--accent:hover) {
    background: linear-gradient(135deg, 
      rgba(236, 72, 153, 0.4) 0%, 
      rgba(190, 24, 93, 0.3) 100%);
    box-shadow: 
      0 15px 45px rgba(236, 72, 153, 0.4),
      inset 0 2px 0 rgba(255, 255, 255, 0.6),
      0 2px 0 rgba(236, 72, 153, 0.2);
  }

  /* Disabled state */
  :global(.glass-button--disabled) {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none !important;
    filter: grayscale(100%);
  }

  :global(.glass-button--disabled:hover) {
    background: linear-gradient(135deg, 
      rgba(255, 255, 255, 0.25) 0%, 
      rgba(255, 255, 255, 0.1) 100%);
    border-color: rgba(255, 255, 255, 0.3);
    box-shadow: 
      0 8px 32px rgba(31, 38, 135, 0.37),
      inset 0 1px 0 rgba(255, 255, 255, 0.5);
    transform: none;
  }

  :global(.glass-button--disabled .button-shine),
  :global(.glass-button--disabled .button-glass-overlay) {
    display: none;
  }

  /* Button content */
  .button-content {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  }

  /* Responsive design */
  @media (max-width: 768px) {
    :global(.glass-button--small) {
      padding: 6px 16px;
      font-size: 0.8rem;
    }
    
    :global(.glass-button--medium) {
      padding: 10px 24px;
      font-size: 0.9rem;
    }
    
    :global(.glass-button--large) {
      padding: 14px 32px;
      font-size: 1rem;
    }
  }

  /* Reduced motion */
  @media (prefers-reduced-motion: reduce) {
    .glasnost-glass-button,
    .button-shine,
    .button-glass-overlay {
      transition: none;
    }
  }
</style> 