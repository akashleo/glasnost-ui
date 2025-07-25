<script lang="ts">
  import { onMount, createEventDispatcher } from 'svelte'
import { injectLiquidGlassFilters } from '../filters'

  export let comments = null
  export let title = 'Comments'
  export let className = ''
  export let showMoreButton = true
  export let moreButtonText = 'More'

  const dispatch = createEventDispatcher()

  onMount(() => {
    injectLiquidGlassFilters()
  })

  const handleMoreClick = () => {
    dispatch('more')
  }
</script>

<div class="glasnost-comment-card {className}">
  <div class="comment-glass-overlay"></div>
  <div class="comment-liquid-distortion"></div>
  <div class="comment-card-header">
    <h3 class="comment-title">{title}</h3>
    <div class="comment-count">
      <slot name="count"></slot>
    </div>
  </div>

  <div class="comment-card-content">
    <slot name="comments">
      {#if comments}
        {@html comments}
      {:else}
        <div class="no-comments">
          <div class="no-comments-icon">💬</div>
          <p>No comments yet. Be the first to share your thoughts!</p>
        </div>
      {/if}
    </slot>
  </div>

  <!-- More button -->
  {#if showMoreButton}
    <div class="comment-card-footer">
      <button 
        class="more-button"
        on:click={handleMoreClick}
        type="button"
      >
        <span class="more-button-text">{moreButtonText}</span>
        <div class="more-button-shine"></div>
      </button>
    </div>
  {/if}

  <!-- Enhanced floating elements -->
  <div class="floating-particle particle-1"></div>
  <div class="floating-particle particle-2"></div>
  <div class="floating-particle particle-3"></div>
  <div class="comment-shine"></div>
</div>

<style>
  .glasnost-comment-card {
    position: relative;
    width: 100%;
    padding: 2rem;
    /* backdrop-filter: blur(2px) saturate(180%) brightness(120%);
    -webkit-backdrop-filter: blur(2px) saturate(180%) brightness(120%); */
    background: linear-gradient(135deg, 
      rgba(255, 255, 255, 0.15) 0%, 
      rgba(255, 255, 255, 0.08) 50%,
      rgba(255, 255, 255, 0.03) 100%);
    background-size: 200% 200%;
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: 20px;
    animation: flowingBackground 15s ease-in-out infinite;
    filter: url(#liquidNavbar);
    box-shadow: 
      0 15px 50px rgba(31, 38, 135, 0.37),
      inset 0 1px 0 rgba(255, 255, 255, 0.5),
      0 1px 0 rgba(255, 255, 255, 0.1);
    transition: all 0.4s cubic-bezier(0.23, 1, 0.320, 1);
    overflow: hidden;
    transform-style: preserve-3d;
  }

  .glasnost-comment-card::before {
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

  @keyframes flowingBackground {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }

  .comment-glass-overlay {
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

  .comment-liquid-distortion {
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

  .comment-shine {
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
      transparent 0%, 
      rgba(255, 255, 255, 0.3) 50%, 
      transparent 100%);
    border-radius: inherit;
    transition: left 0.7s ease;
    pointer-events: none;
  }

  .glasnost-comment-card:hover {
    transform: translateY(-6px) rotateX(2deg);
    background: linear-gradient(135deg, 
      rgba(255, 255, 255, 0.2) 0%, 
      rgba(255, 255, 255, 0.12) 50%,
      rgba(255, 255, 255, 0.06) 100%);
    border-color: rgba(255, 255, 255, 0.35);
    box-shadow: 
      0 25px 70px rgba(31, 38, 135, 0.5),
      inset 0 2px 0 rgba(255, 255, 255, 0.6),
      0 2px 0 rgba(255, 255, 255, 0.2);
    filter: url(#glassDistortion);
  }

  .glasnost-comment-card:hover .comment-glass-overlay {
    opacity: 1;
  }

  .glasnost-comment-card:hover .comment-liquid-distortion {
    opacity: 0.6;
  }

  .glasnost-comment-card:hover::before {
    left: 100%;
  }

  .glasnost-comment-card:hover .comment-shine {
    left: 100%;
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
    font-size: 1.5rem;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.95);
    margin: 0;
    letter-spacing: 0.025em;
    background: linear-gradient(135deg, 
      rgba(255, 255, 255, 0.95) 0%,
      rgba(255, 255, 255, 0.8) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .comment-count {
    font-size: 0.875rem;
    color: rgba(255, 255, 255, 0.8);
    background: linear-gradient(135deg, 
      rgba(40, 42, 55, 1) 0%, 
      rgba(30, 32, 40, 0.98) 100%);
    padding: 0.5rem 1rem;
    border-radius: 20px;
    backdrop-filter: blur(15px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    font-weight: 600;
  }

  .comment-card-content {
    position: relative;
    z-index: 2;
    min-height: 120px;
  }

  .no-comments {
    text-align: center;
    padding: 3rem 1rem;
    color: rgba(255, 255, 255, 0.7);
  }

  .no-comments-icon {
    font-size: 3.5rem;
    margin-bottom: 1.5rem;
    opacity: 0.6;
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
  }

  .no-comments p {
    margin: 0;
    font-size: 1.1rem;
    line-height: 1.6;
    font-weight: 500;
  }

  /* Enhanced floating particles */
  .floating-particle {
    position: absolute;
    background: radial-gradient(circle, 
      rgba(255, 255, 255, 0.3) 0%, 
      rgba(255, 255, 255, 0.1) 50%,
      transparent 100%);
    border-radius: 50%;
    pointer-events: none;
    backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .particle-1 {
    width: 16px;
    height: 16px;
    top: 20%;
    left: 15%;
    animation: floatParticle 12s ease-in-out infinite;
  }

  .particle-2 {
    width: 12px;
    height: 12px;
    top: 70%;
    right: 20%;
    animation: floatParticle 15s ease-in-out infinite 3s;
  }

  .particle-3 {
    width: 14px;
    height: 14px;
    bottom: 25%;
    left: 25%;
    animation: floatParticle 18s ease-in-out infinite 6s;
  }

  @keyframes floatParticle {
    0%, 100% {
      transform: translateY(0) translateX(0) rotate(0deg);
      opacity: 0.3;
    }
    25% {
      transform: translateY(-20px) translateX(10px) rotate(90deg);
      opacity: 0.6;
    }
    50% {
      transform: translateY(-30px) translateX(-5px) rotate(180deg);
      opacity: 0.4;
    }
    75% {
      transform: translateY(-15px) translateX(15px) rotate(270deg);
      opacity: 0.7;
    }
  }

  /* Enhanced comment list styling for slotted content */
  :global(.glasnost-comment-card .comment-item) {
    padding: 1.5rem;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, 
      rgba(30, 32, 40, 0.95) 0%, 
      rgba(40, 42, 55, 0.92) 100%);
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(20px);
    transition: all 0.3s cubic-bezier(0.23, 1, 0.320, 1);
  }

  :global(.glasnost-comment-card .comment-item:hover) {
    background: linear-gradient(135deg, 
      rgba(40, 42, 55, 1) 0%, 
      rgba(30, 32, 40, 0.98) 100%);
    border-color: rgba(255, 255, 255, 0.25);
    transform: translateX(8px) translateY(-2px);
    box-shadow: 
      0 12px 35px rgba(31, 38, 135, 0.25),
      inset 0 2px 0 rgba(255, 255, 255, 0.3);
  }

  :global(.glasnost-comment-card .comment-author) {
    font-weight: 700;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 0.75rem;
    font-size: 1.1rem;
  }

  :global(.glasnost-comment-card .comment-text) {
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.7;
    font-size: 1rem;
  }

  :global(.glasnost-comment-card .comment-meta) {
    font-size: 0.875rem;
    color: rgba(255, 255, 255, 0.6);
    margin-top: 0.75rem;
    font-weight: 500;
  }

  .comment-card-footer {
    margin-top: 1.5rem;
    padding-top: 1rem;
    border-top: 1px solid rgba(255, 255, 255, 0.15);
    display: flex;
    justify-content: center;
    position: relative;
    z-index: 2;
  }

  .more-button {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.75rem 2rem;
    background: linear-gradient(135deg, 
      rgba(255, 255, 255, 0.15) 0%, 
      rgba(255, 255, 255, 0.08) 50%,
      rgba(255, 255, 255, 0.03) 100%);
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: 12px;
    color: rgba(255, 255, 255, 0.9);
    font-weight: 600;
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.23, 1, 0.320, 1);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    overflow: hidden;
    text-decoration: none;
    user-select: none;
    outline: none;
    letter-spacing: 0.025em;
  }

  .more-button:hover {
    transform: translateY(-2px);
    background: linear-gradient(135deg, 
      rgba(255, 255, 255, 0.2) 0%, 
      rgba(255, 255, 255, 0.12) 50%,
      rgba(255, 255, 255, 0.06) 100%);
    border-color: rgba(255, 255, 255, 0.35);
    box-shadow: 
      0 8px 25px rgba(31, 38, 135, 0.3),
      inset 0 1px 0 rgba(255, 255, 255, 0.4);
    color: rgba(255, 255, 255, 0.95);
  }

  .more-button:active {
    transform: translateY(-1px);
  }

  .more-button:focus-visible {
    outline: 2px solid rgba(255, 255, 255, 0.5);
    outline-offset: 2px;
  }

  .more-button-text {
    position: relative;
    z-index: 2;
  }

  .more-button-shine {
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
    transition: left 0.5s ease;
    pointer-events: none;
  }

  .more-button:hover .more-button-shine {
    left: 100%;
  }

  /* Responsive design */
  @media (max-width: 768px) {
    .glasnost-comment-card {
      padding: 1.5rem;
      border-radius: 18px;
    }
    
    .comment-card-header {
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }
    
    .comment-title {
      font-size: 1.25rem;
    }
    
    .comment-count {
      align-self: flex-end;
    }
    
    .more-button {
      padding: 0.65rem 1.5rem;
      font-size: 0.85rem;
    }
    
    .no-comments {
      padding: 2rem 0.5rem;
    }
    
    .no-comments-icon {
      font-size: 3rem;
    }
    
    .no-comments p {
      font-size: 1rem;
    }
  }

  /* Reduced motion */
  @media (prefers-reduced-motion: reduce) {
    .glasnost-comment-card,
    .floating-particle,
    .comment-shine,
    .comment-glass-overlay,
    .comment-liquid-distortion,
    .more-button,
    .more-button-shine {
      animation: none;
      transition: none;
    }
    
    .glasnost-comment-card::before {
      transition: none;
    }
    
    :global(.glasnost-comment-card .comment-item) {
      transition: none;
    }
    
    .glasnost-comment-card:hover {
      transform: translateY(-4px);
    }
    
    .more-button:hover {
      transform: translateY(-1px);
    }
  }
</style> 