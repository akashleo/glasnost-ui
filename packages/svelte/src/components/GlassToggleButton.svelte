<script lang="ts">
  import { onMount, createEventDispatcher } from 'svelte'
import { injectLiquidGlassFilters } from '../filters'

  export let checked = false
  export let label = ''
  export let disabled = false
  export let className = ''
  export let size = 'medium'
  export let variant = 'primary'

  const dispatch = createEventDispatcher()

  $: toggleClasses = [
    'glasnost-toggle-button',
    checked ? 'toggle-button--checked' : '',
    disabled ? 'toggle-button--disabled' : '',
    `toggle-button--${size}`,
    `toggle-button--${variant}`,
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
    <div class="toggle-liquid-distortion"></div>
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
    transition: all 0.4s cubic-bezier(0.23, 1, 0.320, 1);
    
    /* CSS Custom Properties for responsive sizing */
    --track-width: 64px;
    --track-height: 36px;
    --track-radius: calc(var(--track-height) / 2);
    --knob-size: calc(var(--track-height) - 4px);
    --knob-offset: 2px;
    --knob-travel: calc(var(--track-width) - var(--knob-size) - (var(--knob-offset) * 2));
    --label-size: 0.95rem;
    --gap-size: 1rem;
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
    width: var(--track-width);
    height: var(--track-height);
    background: linear-gradient(135deg, 
      rgba(255, 255, 255, 0.15) 0%, 
      rgba(255, 255, 255, 0.08) 50%,
      rgba(255, 255, 255, 0.03) 100%);
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: var(--track-radius);
    transition: all 0.4s cubic-bezier(0.23, 1, 0.320, 1);
    overflow: hidden;
    transform-style: preserve-3d;
  }

  .toggle-track::before {
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

  .toggle-track-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 30% 30%, 
      rgba(255, 255, 255, 0.1) 0%, 
      transparent 70%);
    border-radius: inherit;
    transition: all 0.4s ease;
    opacity: 0;
  }

  .toggle-liquid-distortion {
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
    filter: url(#glassDistortion);
  }

  .glasnost-toggle-button:hover .toggle-track-overlay {
    opacity: 1;
  }

  .glasnost-toggle-button:hover .toggle-liquid-distortion {
    opacity: 0.6;
  }

  .glasnost-toggle-button:hover .toggle-track::before {
    left: 100%;
  }

  .glasnost-toggle-button:hover .toggle-shine {
    left: 100%;
  }

  /* Toggle knob */
  .toggle-knob {
    position: relative;
    top: var(--knob-offset);
    left: var(--knob-offset);
    width: var(--knob-size);
    height: var(--knob-size);
    background: linear-gradient(135deg, 
      rgba(255, 255, 255, 0.95) 0%, 
      rgba(255, 255, 255, 0.8) 100%);
    border-radius: 50%;
    transition: all 0.4s cubic-bezier(0.23, 1, 0.320, 1);
    filter: url(#cleanGlow);
    z-index: 2;
    transform-style: preserve-3d;
    overflow: hidden;
  }

  .toggle-button--checked .toggle-knob {
    transform: translateX(var(--knob-travel));
    background: linear-gradient(135deg, 
      rgba(255, 255, 255, 0.98) 0%, 
      rgba(255, 255, 255, 0.85) 100%);
  }

  .glasnost-toggle-button:hover .toggle-knob {
    transform: scale(1.1);
  }

  .toggle-button--checked.glasnost-toggle-button:hover .toggle-knob {
    transform: translateX(var(--knob-travel)) scale(1.1);
  }

  /* Knob inner glow */
  .knob-inner {
    position: absolute;
    top: 50%;
    left: 50%;
    width: calc(var(--knob-size) * 0.75);
    height: calc(var(--knob-size) * 0.75);
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
    font-size: var(--label-size);
    font-weight: 600;
    color: rgba(255, 255, 255, 0.92);
    letter-spacing: 0.025em;
    transition: all 0.3s ease;
  }

  .glasnost-toggle-button:hover .toggle-label {
    color: rgba(255, 255, 255, 0.98);
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
    transform: translateX(var(--knob-travel)) scale(0.95);
  }

  /* Disabled state enhancements */
  .toggle-button--disabled .toggle-track {
    background: rgba(255,255,255,0.3);
    border: 1.5px solid rgba(200,200,200,0.7);
    opacity: 0.7;
  }

  .toggle-button--disabled .toggle-knob {
    background: rgba(255,255,255,0.7);
    border: 1.5px solid rgba(200,200,200,0.7);
    opacity: 0.8;
  }

  .toggle-button--disabled .toggle-shine,
  .toggle-button--disabled .knob-shine,
  .toggle-button--disabled .toggle-track-overlay,
  .toggle-button--disabled .toggle-liquid-distortion {
    display: none;
  }

  /* Size variants using CSS custom properties */
  .toggle-button--small {
    --track-width: 40px;
    --track-height: 22px;
    --label-size: 0.85rem;
    --gap-size: 0.75rem;
    gap: var(--gap-size);
  }

  .toggle-button--medium {
    --track-width: 64px;
    --track-height: 36px;
    --label-size: 0.95rem;
    --gap-size: 1rem;
    gap: var(--gap-size);
  }

  .toggle-button--large {
    --track-width: 88px;
    --track-height: 48px;
    --label-size: 1.15rem;
    --gap-size: 1.25rem;
    gap: var(--gap-size);
  }

  /* Variant styles */
  .toggle-button--primary.toggle-button--checked .toggle-track {
    background: linear-gradient(135deg, 
      rgba(99, 102, 241, 0.4) 0%, 
      rgba(67, 56, 202, 0.3) 100%);
    border-color: rgba(99, 102, 241, 0.5);
  }

  .toggle-button--primary.toggle-button--checked .toggle-track-overlay {
    background: radial-gradient(circle at 70% 50%, 
      rgba(99, 102, 241, 0.3) 0%, 
      transparent 70%);
  }

  .toggle-button--primary.toggle-button--checked.glasnost-toggle-button:hover .toggle-track {
    border-color: rgba(99, 102, 241, 0.6);
    box-shadow: 
      inset 0 2px 8px rgba(99, 102, 241, 0.25),
      0 8px 25px rgba(99, 102, 241, 0.4),
      inset 0 2px 0 rgba(255, 255, 255, 0.5);
  }

  .toggle-button--secondary.toggle-button--checked .toggle-track {
    background: linear-gradient(135deg, 
      rgba(107, 114, 128, 0.4) 0%, 
      rgba(75, 85, 99, 0.3) 100%);
    border-color: rgba(107, 114, 128, 0.5);
  }

  .toggle-button--secondary.toggle-button--checked .toggle-track-overlay {
    background: radial-gradient(circle at 70% 50%, 
      rgba(107, 114, 128, 0.3) 0%, 
      transparent 70%);
  }

  .toggle-button--secondary.toggle-button--checked.glasnost-toggle-button:hover .toggle-track {
    border-color: rgba(107, 114, 128, 0.6);
    box-shadow: 
      inset 0 2px 8px rgba(107, 114, 128, 0.25),
      0 8px 25px rgba(107, 114, 128, 0.4),
      inset 0 2px 0 rgba(255, 255, 255, 0.5);
  }

  .toggle-button--accent.toggle-button--checked .toggle-track {
    background: linear-gradient(135deg, 
      rgba(236, 72, 153, 0.4) 0%, 
      rgba(190, 24, 93, 0.3) 100%);
    border-color: rgba(236, 72, 153, 0.5);
  }

  .toggle-button--accent.toggle-button--checked .toggle-track-overlay {
    background: radial-gradient(circle at 70% 50%, 
      rgba(236, 72, 153, 0.3) 0%, 
      transparent 70%);
  }

  .toggle-button--accent.toggle-button--checked.glasnost-toggle-button:hover .toggle-track {
    border-color: rgba(236, 72, 153, 0.6);
    box-shadow: 
      inset 0 2px 8px rgba(236, 72, 153, 0.25),
      0 8px 25px rgba(236, 72, 153, 0.4),
      inset 0 2px 0 rgba(255, 255, 255, 0.5);
  }

  .toggle-button--accent.toggle-button--checked .knob-inner {
    background: radial-gradient(circle, 
      rgba(236, 72, 153, 0.6) 0%, 
      rgba(236, 72, 153, 0.2) 60%,
      transparent 100%);
  }

  /* Responsive design */
  @media (max-width: 768px) {
    .toggle-button--small {
      --track-width: 32px;
      --track-height: 18px;
      --label-size: 0.8rem;
      --gap-size: 0.5rem;
    }
    
    .toggle-button--medium {
      --track-width: 48px;
      --track-height: 28px;
      --label-size: 0.875rem;
      --gap-size: 0.75rem;
    }
    
    .toggle-button--large {
      --track-width: 64px;
      --track-height: 36px;
      --label-size: 1rem;
      --gap-size: 1rem;
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
    .toggle-liquid-distortion,
    .knob-inner {
      transition: none;
      animation: none;
    }
    
    .toggle-track::before {
      transition: none;
    }
    
    .glasnost-toggle-button:hover {
      transform: none;
    }
  }
</style> 