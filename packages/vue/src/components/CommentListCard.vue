<script setup lang="ts">
import { onMounted } from 'vue'
import { injectLiquidGlassFilters } from '@glasnost/shared'

interface Props {
  comments?: any
  title?: string
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  className: '',
  title: 'Comments'
})

onMounted(() => {
  injectLiquidGlassFilters()
})
</script>

<template>
  <div :class="`glasnost-comment-card flowing-glass ${className}`">
    <!-- Embedded SVG filters -->
    <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="commentFlowDistortion" x="-25%" y="-25%" width="150%" height="150%">
          <feTurbulence 
            type="turbulence" 
            baseFrequency="0.012 0.008" 
            numOctaves="3" 
            result="commentFlow"
          />
          <feDisplacementMap 
            in="SourceGraphic" 
            in2="commentFlow" 
            scale="8" 
            xChannelSelector="R" 
            yChannelSelector="B"
          />
        </filter>
      </defs>
    </svg>

    <div class="comment-card-header">
      <h3 class="comment-title">{{ title }}</h3>
      <div class="comment-count">
        <slot name="count"></slot>
      </div>
    </div>

    <div class="comment-card-content">
      <slot name="comments">
        <div v-if="comments" v-html="comments"></div>
        <div v-else class="no-comments">
          <div class="no-comments-icon">💬</div>
          <p>No comments yet. Be the first to share your thoughts!</p>
        </div>
      </slot>
    </div>

    <!-- Flowing liquid elements -->
    <div class="liquid-wave wave-1"></div>
    <div class="liquid-wave wave-2"></div>
  </div>
</template>

<style scoped>
.glasnost-comment-card {
  position: relative;
  width: 100%;
  padding: 1.5rem;
  backdrop-filter: blur(20px) saturate(2.5);
  -webkit-backdrop-filter: blur(20px) saturate(2.5);
  background: linear-gradient(45deg, 
    rgba(255, 255, 255, 0.2) 0%, 
    rgba(255, 255, 255, 0.1) 25%,
    rgba(255, 255, 255, 0.05) 50%,
    rgba(255, 255, 255, 0.1) 75%,
    rgba(255, 255, 255, 0.2) 100%);
  background-size: 200% 200%;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 24px;
  filter: url(#commentFlowDistortion);
  animation: flowingBackground 10s ease-in-out infinite;
  box-shadow: 
    0 12px 40px rgba(0, 0, 0, 0.1),
    inset 0 2px 0 rgba(255, 255, 255, 0.4),
    0 2px 0 rgba(255, 255, 255, 0.15);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}

@keyframes flowingBackground {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.glasnost-comment-card:hover {
  transform: translateY(-4px);
  box-shadow: 
    0 20px 56px rgba(0, 0, 0, 0.15),
    inset 0 3px 0 rgba(255, 255, 255, 0.5),
    0 3px 0 rgba(255, 255, 255, 0.2);
}

.comment-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;
  z-index: 2;
}

.comment-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.95);
  margin: 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  letter-spacing: 0.025em;
}

.comment-count {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);
  background: rgba(255, 255, 255, 0.1);
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.comment-card-content {
  position: relative;
  z-index: 2;
  min-height: 120px;
}

.no-comments {
  text-align: center;
  padding: 2rem 1rem;
  color: rgba(255, 255, 255, 0.7);
}

.no-comments-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  opacity: 0.6;
}

.no-comments p {
  margin: 0;
  font-size: 1rem;
  line-height: 1.5;
}

/* Liquid wave effects */
.liquid-wave {
  position: absolute;
  width: 200%;
  height: 40px;
  background: linear-gradient(90deg, 
    transparent, 
    rgba(255, 255, 255, 0.1), 
    transparent);
  border-radius: 50%;
  animation: liquidWave 8s ease-in-out infinite;
  pointer-events: none;
}

.wave-1 {
  top: 20%;
  left: -50%;
  animation-delay: 0s;
  transform: rotate(-5deg);
}

.wave-2 {
  bottom: 20%;
  right: -50%;
  animation-delay: 4s;
  transform: rotate(5deg);
}

@keyframes liquidWave {
  0%, 100% {
    transform: translateX(-20px) scale(1) rotate(-5deg);
    opacity: 0.3;
  }
  50% {
    transform: translateX(20px) scale(1.1) rotate(5deg);
    opacity: 0.6;
  }
}

/* Comment list styling for slotted content */
.glasnost-comment-card :deep(.comment-item) {
  padding: 1rem;
  margin-bottom: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  transition: all 0.3s ease;
}

.glasnost-comment-card :deep(.comment-item:hover) {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateX(4px);
}

.glasnost-comment-card :deep(.comment-author) {
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 0.5rem;
}

.glasnost-comment-card :deep(.comment-text) {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
}

.glasnost-comment-card :deep(.comment-meta) {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 0.5rem;
}

/* Responsive design */
@media (max-width: 768px) {
  .glasnost-comment-card {
    padding: 1.25rem;
    border-radius: 20px;
  }
  
  .comment-card-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }
  
  .comment-title {
    font-size: 1.1rem;
  }
  
  .no-comments {
    padding: 1.5rem 0.5rem;
  }
  
  .no-comments-icon {
    font-size: 2.5rem;
  }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .glasnost-comment-card {
    animation: none;
  }
  
  .liquid-wave {
    animation: none;
  }
  
  .glasnost-comment-card :deep(.comment-item) {
    transition: none;
  }
}
</style> 