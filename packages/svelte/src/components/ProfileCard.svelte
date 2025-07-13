<script lang="ts">
  import { onMount } from 'svelte'
  import { injectLiquidGlassFilters } from '@glasnost-ui/shared'

  export let avatar = ''
  export let name = ''
  export let title = ''
  export let actions = null
  export let className = ''

  onMount(() => {
    injectLiquidGlassFilters()
  })
</script>

<div class="glasnost-profile-card {className}">
  <div class="profile-glass-overlay"></div>
  <div class="profile-liquid-distortion"></div>
  <div class="profile-card-content">
    <div class="avatar-container">
      <div class="avatar-glow-ring"></div>
      <img 
        src={avatar} 
        alt="{name} avatar" 
        class="profile-avatar"
      />
      <div class="avatar-shimmer"></div>
    </div>
    
    <div class="profile-info">
      <h3 class="profile-name">{name}</h3>
      {#if title}
        <p class="profile-title">{title}</p>
      {/if}
    </div>
    
    {#if actions || $$slots.actions}
      <div class="profile-actions">
        <slot name="actions">
          {#if actions}
            {@html actions}
          {/if}
        </slot>
      </div>
    {/if}
  </div>

  <div class="card-shine"></div>
</div>

<style>
  .glasnost-profile-card {
    position: relative;
    width: 100%;
    max-width: 340px;
    padding: 2.5rem 2rem;
    /* backdrop-filter: blur(2px) saturate(180%) brightness(120%);
    -webkit-backdrop-filter: blur(2px) saturate(180%) brightness(120%); */
    background: linear-gradient(135deg, 
      rgba(255, 255, 255, 0.15) 0%, 
      rgba(255, 255, 255, 0.08) 50%,
      rgba(255, 255, 255, 0.03) 100%);
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: 24px;
    transition: all 0.4s cubic-bezier(0.23, 1, 0.320, 1);
    overflow: hidden;
    transform-style: preserve-3d;
  }

  .glasnost-profile-card::before {
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

  .profile-glass-overlay {
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

  .profile-liquid-distortion {
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

  .card-shine {
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
    transition: left 0.8s ease;
    pointer-events: none;
  }

  .glasnost-profile-card:hover {
    transform: translateY(-12px) rotateX(5deg) rotateY(5deg);
    background: linear-gradient(135deg, 
      rgba(255, 255, 255, 0.2) 0%, 
      rgba(255, 255, 255, 0.12) 50%,
      rgba(255, 255, 255, 0.06) 100%);
    border-color: rgba(255, 255, 255, 0.35);
    filter: url(#glassDistortion);
  }

  .glasnost-profile-card:hover .profile-glass-overlay {
    opacity: 1;
  }

  .glasnost-profile-card:hover .profile-liquid-distortion {
    opacity: 0.6;
  }

  .glasnost-profile-card:hover::before {
    left: 100%;
  }

  .glasnost-profile-card:hover .card-shine {
    left: 100%;
  }

  .profile-card-content {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .avatar-container {
    position: relative;
    margin-bottom: 2rem;
  }

  .avatar-glow-ring {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 120px;
    height: 120px;
    background: conic-gradient(from 0deg, 
      rgba(99, 102, 241, 0.5), 
      rgba(236, 72, 153, 0.5), 
      rgba(99, 102, 241, 0.5));
    border-radius: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: all 0.4s ease;
    animation: avatarRotate 6s linear infinite;
    z-index: 1;
  }

  .glasnost-profile-card:hover .avatar-glow-ring {
    opacity: 0.6;
  }

  @keyframes avatarRotate {
    0% { transform: translate(-50%, -50%) rotate(0deg); }
    100% { transform: translate(-50%, -50%) rotate(360deg); }
  }

  .profile-avatar {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid rgba(255, 255, 255, 0.4);
    filter: url(#avatarGlow);
    transition: all 0.4s ease;
    position: relative;
    z-index: 3;
  }

  .glasnost-profile-card:hover .profile-avatar {
    transform: scale(1.1);
    border-color: rgba(255, 255, 255, 0.6);
  }

  .avatar-shimmer {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100px;
    height: 100px;
    background: radial-gradient(circle, 
      rgba(255, 255, 255, 0.3) 0%, 
      rgba(255, 255, 255, 0.1) 40%,
      transparent 70%);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: all 0.4s ease;
    animation: avatarPulse 4s ease-in-out infinite;
    z-index: 2;
  }

  .glasnost-profile-card:hover .avatar-shimmer {
    opacity: 0.8;
  }

  @keyframes avatarPulse {
    0%, 100% { 
      transform: translate(-50%, -50%) scale(1); 
      opacity: 0.3; 
    }
    50% { 
      transform: translate(-50%, -50%) scale(1.3); 
      opacity: 0.6; 
    }
  }

  .profile-info {
    margin-bottom: 2rem;
  }

  .profile-name {
    font-size: 1.75rem;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.95);
    margin: 0 0 0.75rem 0;
    letter-spacing: 0.025em;
    background: linear-gradient(135deg, 
      rgba(255, 255, 255, 0.95) 0%,
      rgba(255, 255, 255, 0.8) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .profile-title {
    font-size: 1.1rem;
    color: rgba(255, 255, 255, 0.75);
    margin: 0;
    font-weight: 500;
  }

  .profile-actions {
    width: 100%;
  }

  /* Responsive design */
  @media (max-width: 768px) {
    .glasnost-profile-card {
      max-width: 300px;
      padding: 2rem 1.5rem;
      border-radius: 20px;
    }
    
    .profile-avatar {
      width: 80px;
      height: 80px;
    }
    
    .avatar-glow-ring {
      width: 100px;
      height: 100px;
    }
    
    .avatar-shimmer {
      width: 90px;
      height: 90px;
    }
    
    .profile-name {
      font-size: 1.5rem;
    }
    
    .profile-title {
      font-size: 1rem;
    }
  }

  /* Reduced motion */
  @media (prefers-reduced-motion: reduce) {
    .glasnost-profile-card,
    .profile-avatar,
    .avatar-shimmer,
    .avatar-glow-ring,
    .card-shine,
    .profile-glass-overlay,
    .profile-liquid-distortion {
      transition: none;
      animation: none;
    }
    
    .glasnost-profile-card::before {
      transition: none;
    }
    
    .glasnost-profile-card:hover {
      transform: translateY(-8px);
    }
  }
</style> 