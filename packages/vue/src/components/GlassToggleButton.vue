<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { injectLiquidGlassFilters } from '@glasnost/shared'

interface Props {
  checked: boolean
  label?: string
  disabled?: boolean
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  label: '',
  disabled: false,
  className: ''
})

const emit = defineEmits<{
  change: [checked: boolean]
}>()

const toggleClasses = computed(() => {
  return [
    'glasnost-toggle-button',
    props.checked ? 'toggle-button--checked' : '',
    props.disabled ? 'toggle-button--disabled' : '',
    props.className
  ].filter(Boolean).join(' ')
})

onMounted(() => {
  injectLiquidGlassFilters()
})

const handleToggle = () => {
  if (!props.disabled) {
    emit('change', !props.checked)
  }
}
</script>

<template>
  <label :class="toggleClasses" :aria-disabled="disabled">
    <!-- Embedded SVG filters -->
    <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="toggleDistortion" x="-25%" y="-25%" width="150%" height="150%">
          <feTurbulence 
            type="fractalNoise" 
            baseFrequency="0.02 0.015" 
            numOctaves="3" 
            result="toggleNoise"
          />
          <feDisplacementMap 
            in="SourceGraphic" 
            in2="toggleNoise" 
            scale="5" 
            xChannelSelector="R" 
            yChannelSelector="G"
          />
        </filter>

        <filter id="toggleKnobGlow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="3" result="knobGlow"/>
          <feMerge> 
            <feMergeNode in="knobGlow"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
    </svg>

    <input 
      type="checkbox"
      :checked="checked"
      :disabled="disabled"
      @change="handleToggle"
      class="toggle-input"
      :aria-labelledby="label ? 'toggle-label' : undefined"
    />
    
    <div class="toggle-track">
      <div class="toggle-track-bg"></div>
      <div class="toggle-knob">
        <div class="knob-inner"></div>
        <div class="knob-glow"></div>
      </div>
      
      <!-- Liquid flow effect -->
      <div class="liquid-flow"></div>
    </div>
    
    <span v-if="label" id="toggle-label" class="toggle-label">
      {{ label }}
    </span>
  </label>
</template>

<style scoped>
.glasnost-toggle-button {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  user-select: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.glasnost-toggle-button:hover {
  transform: translateY(-1px);
}

.toggle-button--disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none !important;
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
  width: 60px;
  height: 32px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 24px;
  backdrop-filter: blur(12px) saturate(1.8);
  -webkit-backdrop-filter: blur(12px) saturate(1.8);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  filter: url(#toggleDistortion);
  box-shadow: 
    inset 0 2px 8px rgba(0, 0, 0, 0.1),
    0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.toggle-track-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
  border-radius: inherit;
  transition: all 0.4s ease;
}

/* Checked state track */
.toggle-button--checked .toggle-track {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.3) 0%, rgba(29, 78, 216, 0.2) 100%);
  border-color: rgba(59, 130, 246, 0.4);
  box-shadow: 
    inset 0 2px 8px rgba(59, 130, 246, 0.2),
    0 4px 16px rgba(59, 130, 246, 0.2);
}

.toggle-button--checked .toggle-track-bg {
  background: radial-gradient(circle at 80% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 70%);
}

/* Toggle knob */
.toggle-knob {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 28px;
  height: 28px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 100%);
  border-radius: 50%;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  filter: url(#toggleKnobGlow);
  box-shadow: 
    0 2px 8px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
  z-index: 2;
}

.toggle-button--checked .toggle-knob {
  transform: translateX(28px);
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.8) 100%);
  box-shadow: 
    0 4px 12px rgba(59, 130, 246, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.9);
}

/* Knob inner glow */
.knob-inner {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 20px;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.4) 70%, transparent 100%);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease;
}

.toggle-button--checked .knob-inner {
  background: radial-gradient(circle, rgba(59, 130, 246, 0.6) 0%, rgba(59, 130, 246, 0.2) 70%, transparent 100%);
}

/* Knob glow effect */
.knob-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 40px;
  height: 40px;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: all 0.3s ease;
  pointer-events: none;
}

.glasnost-toggle-button:hover .knob-glow {
  opacity: 0.6;
  animation: knobPulse 2s ease-in-out infinite;
}

@keyframes knobPulse {
  0%, 100% { transform: translate(-50%, -50%) scale(1); }
  50% { transform: translate(-50%, -50%) scale(1.2); }
}

/* Liquid flow effect */
.liquid-flow {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  border-radius: inherit;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1;
}

.toggle-button--checked .liquid-flow {
  left: 100%;
  background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.3), transparent);
  animation: liquidFlowAnimation 0.6s ease-out;
}

@keyframes liquidFlowAnimation {
  0% { left: 0%; }
  100% { left: 100%; }
}

/* Toggle label */
.toggle-label {
  font-size: 0.875rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  transition: color 0.3s ease;
}

.glasnost-toggle-button:hover .toggle-label {
  color: rgba(255, 255, 255, 0.95);
}

/* Hover effects */
.glasnost-toggle-button:hover .toggle-track {
  border-color: rgba(255, 255, 255, 0.3);
  box-shadow: 
    inset 0 2px 8px rgba(0, 0, 0, 0.1),
    0 4px 16px rgba(0, 0, 0, 0.15);
}

.toggle-button--checked.glasnost-toggle-button:hover .toggle-track {
  border-color: rgba(59, 130, 246, 0.5);
  box-shadow: 
    inset 0 2px 8px rgba(59, 130, 246, 0.2),
    0 6px 20px rgba(59, 130, 246, 0.3);
}

/* Focus states */
.toggle-input:focus-visible + .toggle-track {
  outline: 2px solid rgba(255, 255, 255, 0.5);
  outline-offset: 2px;
}

/* Active state */
.glasnost-toggle-button:active .toggle-knob {
  transform: scale(0.95);
}

.toggle-button--checked.glasnost-toggle-button:active .toggle-knob {
  transform: translateX(28px) scale(0.95);
}

/* Responsive design */
@media (max-width: 768px) {
  .glasnost-toggle-button {
    gap: 0.5rem;
  }
  
  .toggle-track {
    width: 52px;
    height: 28px;
  }
  
  .toggle-knob {
    width: 24px;
    height: 24px;
  }
  
  .toggle-button--checked .toggle-knob {
    transform: translateX(24px);
  }
  
  .toggle-label {
    font-size: 0.8rem;
  }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .glasnost-toggle-button,
  .toggle-track,
  .toggle-knob,
  .liquid-flow {
    transition: none;
    animation: none;
  }
  
  .knob-glow {
    animation: none;
  }
}
</style> 