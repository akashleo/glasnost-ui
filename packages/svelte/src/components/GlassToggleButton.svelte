<script lang="ts">
  import { onMount, createEventDispatcher } from 'svelte'
  import { injectLiquidGlassFilters } from '@glasnost/shared'

  export let checked = false
  export let label = ''
  export let disabled = false
  export let className = ''

  const dispatch = createEventDispatcher()

  $: toggleClasses = [
    'glasnost-toggle-button',
    checked ? 'toggle-button--checked' : '',
    disabled ? 'toggle-button--disabled' : '',
    className
  ].filter(Boolean).join(' ')

  const handleToggle = () => {
    if (!disabled) {
      dispatch('change', !checked)
    }
  }

  onMount(() => {
    injectLiquidGlassFilters()
  })
</script>

<label class={toggleClasses} aria-disabled={disabled}>
  <input 
    type="checkbox"
    bind:checked={checked}
    {disabled}
    on:change={handleToggle}
    class="toggle-input"
    aria-labelledby={label ? 'toggle-label' : undefined}
  />
  
  <div class="toggle-track">
    <div class="toggle-track-overlay"></div>
    <div class="toggle-knob">
      <div class="knob-inner"></div>
      <div class="knob-shine"></div>
    </div>
    <div class="toggle-shine"></div>
  </div>
  
  {#if label}
    <span id="toggle-label" class="toggle-label">
      {label}
    </span>
  {/if}
</label>

<style>
  .glasnost-toggle-button {
    display: inline-flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
    user-select: none;
    transition: all 0.3s cubic-bezier(0.23, 1, 0.320, 1);
  }

  .glasnost-toggle-button:hover {
    transform: translateY(-2px);
  }

  .toggle-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none !important;
    filter: grayscale(100%);
  }

  .toggle-input {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
    pointer-events: none;
  }

  .toggle-track {
    position: relative;
    width: 64px;
    height: 36px;
    background: linear-gradient(135deg, 
      rgba(255, 255, 255, 0.15) 0%, 
      rgba(255, 255, 255, 0.08) 100%);
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: 24px;
    backdrop-filter: blur(20px) saturate(180%) brightness(105%);
    -webkit-backdrop-filter: blur(20px) saturate(180%) brightness(105%);
    transition: all 0.4s cubic-bezier(0.23, 1, 0.320, 1);
    filter: url(#subtleEnhancement);
    box-shadow: 
      inset 0 2px 8px rgba(0, 0, 0, 0.1),
      0 4px 16px rgba(31, 38, 135, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.3);
    overflow: hidden;
    transform-style: preserve-3d;
  }

  .toggle-track-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 30% 30%, 
      rgba(255, 255, 255, 0.12) 0%, 
      transparent 70%);
    border-radius: inherit;
    transition: all 0.4s ease;
    opacity: 0;
  }

  .toggle-shine {
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
      transparent 0%, 
      rgba(255, 255, 255, 0.4) 50%, 
      transparent 100%);
    border-radius: inherit;
    transition: left 0.6s ease;
    pointer-events: none;
  }

  .glasnost-toggle-button:hover .toggle-track {
    border-color: rgba(255, 255, 255, 0.35);
    box-shadow: 
      inset 0 2px 8px rgba(0, 0, 0, 0.1),
      0 6px 20px rgba(31, 38, 135, 0.25),
      inset 0 1px 0 rgba(255, 255, 255, 0.4);
    filter: url(#buttonGlass);
  }

  .glasnost-toggle-button:hover .toggle-track-overlay {
    opacity: 1;
  }

  .glasnost-toggle-button:hover .toggle-shine {
    left: 100%;
  }

  /* Checked state track */
  .toggle-button--checked .toggle-track {
    background: linear-gradient(135deg, 
      rgba(99, 102, 241, 0.4) 0%, 
      rgba(67, 56, 202, 0.3) 100%);
    border-color: rgba(99, 102, 241, 0.5);
    box-shadow: 
      inset 0 2px 8px rgba(99, 102, 241, 0.2),
      0 6px 20px rgba(99, 102, 241, 0.3),
      inset 0 1px 0 rgba(255, 255, 255, 0.4);
  }

  .toggle-button--checked .toggle-track-overlay {
    background: radial-gradient(circle at 70% 50%, 
      rgba(99, 102, 241, 0.3) 0%, 
      transparent 70%);
  }

  .toggle-button--checked.glasnost-toggle-button:hover .toggle-track {
    border-color: rgba(99, 102, 241, 0.6);
    box-shadow: 
      inset 0 2px 8px rgba(99, 102, 241, 0.25),
      0 8px 25px rgba(99, 102, 241, 0.4),
      inset 0 2px 0 rgba(255, 255, 255, 0.5);
  }

  /* Toggle knob */
  .toggle-knob {
    position: relative;
    top: 2px;
    left: 2px;
    width: 32px;
    height: 32px;
    background: linear-gradient(135deg, 
      rgba(255, 255, 255, 0.95) 0%, 
      rgba(255, 255, 255, 0.8) 100%);
    border-radius: 50%;
    transition: all 0.4s cubic-bezier(0.23, 1, 0.320, 1);
    filter: url(#cleanGlow);
    box-shadow: 
      0 4px 12px rgba(0, 0, 0, 0.15),
      inset 0 1px 0 rgba(255, 255, 255, 0.9),
      0 1px 0 rgba(255, 255, 255, 0.2);
    z-index: 2;
    transform-style: preserve-3d;
    overflow: hidden;
  }

  .toggle-button--checked .toggle-knob {
    transform: translateX(28px);
    background: linear-gradient(135deg, 
      rgba(255, 255, 255, 0.98) 0%, 
      rgba(255, 255, 255, 0.85) 100%);
    box-shadow: 
      0 6px 16px rgba(99, 102, 241, 0.3),
      inset 0 2px 0 rgba(255, 255, 255, 0.95),
      0 2px 0 rgba(99, 102, 241, 0.2);
  }

  .glasnost-toggle-button:hover .toggle-knob {
    transform: scale(1.1);
    box-shadow: 
      0 6px 16px rgba(0, 0, 0, 0.2),
      inset 0 2px 0 rgba(255, 255, 255, 0.95),
      0 2px 0 rgba(255, 255, 255, 0.3);
  }

  .toggle-button--checked.glasnost-toggle-button:hover .toggle-knob {
    transform: translateX(28px) scale(1.1);
  }

  /* Knob inner glow */
  .knob-inner {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 24px;
    height: 24px;
    background: radial-gradient(circle, 
      rgba(255, 255, 255, 0.8) 0%, 
      rgba(255, 255, 255, 0.3) 60%,
      transparent 100%);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.3s ease;
    opacity: 0.6;
  }

  .toggle-button--checked .knob-inner {
    background: radial-gradient(circle, 
      rgba(99, 102, 241, 0.6) 0%, 
      rgba(99, 102, 241, 0.2) 60%,
      transparent 100%);
    opacity: 0.8;
  }

  .glasnost-toggle-button:hover .knob-inner {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.1);
  }

  /* Knob shine effect */
  .knob-shine {
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
    transition: left 0.4s ease;
    pointer-events: none;
  }

  .glasnost-toggle-button:hover .knob-shine {
    left: 100%;
  }

  /* Toggle label */
  .toggle-label {
    font-size: 0.95rem;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.92);
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
    letter-spacing: 0.025em;
  }

  .glasnost-toggle-button:hover .toggle-label {
    color: rgba(255, 255, 255, 0.98);
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
  }

  /* Focus states */
  .toggle-input:focus-visible + .toggle-track {
    outline: 2px solid rgba(255, 255, 255, 0.6);
    outline-offset: 3px;
  }

  /* Active state */
  .glasnost-toggle-button:active .toggle-knob {
    transform: scale(0.95);
    filter: url(#shimmerEffect);
  }

  .toggle-button--checked.glasnost-toggle-button:active .toggle-knob {
    transform: translateX(28px) scale(0.95);
  }

  /* Disabled state enhancements */
  .toggle-button--disabled .toggle-track,
  .toggle-button--disabled .toggle-knob {
    filter: grayscale(100%) !important;
    opacity: 0.4;
  }

  .toggle-button--disabled .toggle-shine,
  .toggle-button--disabled .knob-shine,
  .toggle-button--disabled .toggle-track-overlay {
    display: none;
  }

  /* Responsive design */
  @media (max-width: 768px) {
    .glasnost-toggle-button {
      gap: 0.75rem;
    }
    
    .toggle-track {
      width: 56px;
      height: 32px;
    }
    
    .toggle-knob {
      width: 28px;
      height: 28px;
    }
    
    .toggle-button--checked .toggle-knob {
      transform: translateX(24px);
    }
    
    .toggle-button--checked.glasnost-toggle-button:hover .toggle-knob {
      transform: translateX(24px) scale(1.1);
    }
    
    .toggle-button--checked.glasnost-toggle-button:active .toggle-knob {
      transform: translateX(24px) scale(0.95);
    }
    
    .toggle-label {
      font-size: 0.875rem;
    }
    
    .knob-inner {
      width: 20px;
      height: 20px;
    }
  }

  /* Reduced motion */
  @media (prefers-reduced-motion: reduce) {
    .glasnost-toggle-button,
    .toggle-track,
    .toggle-knob,
    .toggle-shine,
    .knob-shine,
    .toggle-track-overlay,
    .knob-inner {
      transition: none;
      animation: none;
    }
    
    .glasnost-toggle-button:hover {
      transform: none;
    }
  }
</style> 