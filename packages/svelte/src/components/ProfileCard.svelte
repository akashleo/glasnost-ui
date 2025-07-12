<script lang="ts">
  import { onMount } from 'svelte'
  import { injectLiquidGlassFilters } from '@glasnost/shared'

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

  <div class="floating-orb orb-1"></div>
  <div class="floating-orb orb-2"></div>
  <div class="floating-orb orb-3"></div>
  <div class="card-shine"></div>
</div>

<style>
  .glasnost-profile-card {
    position: relative;
    width: 100%;
    max-width: 340px;
    padding: 2.5rem 2rem;
    backdrop-filter: blur(40px) saturate(200%) brightness(120%);
    -webkit-backdrop-filter: blur(40px) saturate(200%) brightness(120%);
    background: linear-gradient(135deg, 
      rgba(255, 255, 255, 0.25) 0%, 
      rgba(255, 255, 255, 0.1) 50%,
      rgba(255, 255, 255, 0.05) 100%);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 24px;
    filter: url(#profileGlass);
    box-shadow: 
      0 20px 60px rgba(31, 38, 135, 0.37),
      inset 0 1px 0 rgba(255, 255, 255, 0.5),
      0 1px 0 rgba(255, 255, 255, 0.1);
    transition: all 0.4s cubic-bezier(0.23, 1, 0.320, 1);
    overflow: hidden;
    transform-style: preserve-3d;
  }

  .profile-glass-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, 
      rgba(255, 255, 255, 0.1) 0%,
      transparent 50%,
      rgba(255, 255, 255, 0.05) 100%);
    border-radius: inherit;
    opacity: 0;
    transition: opacity 0.4s ease;
    pointer-events: none;
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
      rgba(255, 255, 255, 0.3) 0%, 
      rgba(255, 255, 255, 0.15) 50%,
      rgba(255, 255, 255, 0.1) 100%);
    border-color: rgba(255, 255, 255, 0.4);
    box-shadow: 
      0 30px 80px rgba(31, 38, 135, 0.5),
      inset 0 2px 0 rgba(255, 255, 255, 0.6),
      0 2px 0 rgba(255, 255, 255, 0.2);
  }

  .glasnost-profile-card:hover .profile-glass-overlay {
    opacity: 1;
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
    box-shadow: 
      0 8px 32px rgba(31, 38, 135, 0.4),
      inset 0 1px 0 rgba(255, 255, 255, 0.3);
  }

  .glasnost-profile-card:hover .profile-avatar {
    transform: scale(1.1);
    border-color: rgba(255, 255, 255, 0.6);
    box-shadow: 
      0 12px 40px rgba(31, 38, 135, 0.6),
      inset 0 2px 0 rgba(255, 255, 255, 0.5);
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
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
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
    text-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  }

  .profile-actions {
    width: 100%;
  }

  /* Enhanced floating orbs */
  .floating-orb {
    position: absolute;
    background: radial-gradient(circle, 
      rgba(255, 255, 255, 0.2) 0%, 
      rgba(255, 255, 255, 0.1) 50%,
      transparent 100%);
    border-radius: 50%;
    pointer-events: none;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .orb-1 {
    width: 24px;
    height: 24px;
    top: 15%;
    left: 10%;
    animation: floatOrb 8s ease-in-out infinite;
  }

  .orb-2 {
    width: 18px;
    height: 18px;
    top: 70%;
    right: 15%;
    animation: floatOrb 10s ease-in-out infinite 2s;
  }

  .orb-3 {
    width: 20px;
    height: 20px;
    bottom: 20%;
    left: 20%;
    animation: floatOrb 12s ease-in-out infinite 4s;
  }

  @keyframes floatOrb {
    0%, 100% { 
      transform: translateY(0) rotate(0deg); 
      opacity: 0.3; 
    }
    25% { 
      transform: translateY(-15px) rotate(90deg); 
      opacity: 0.6; 
    }
    50% { 
      transform: translateY(-25px) rotate(180deg); 
      opacity: 0.4; 
    }
    75% { 
      transform: translateY(-10px) rotate(270deg); 
      opacity: 0.7; 
    }
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
    .floating-orb,
    .card-shine,
    .profile-glass-overlay {
      transition: none;
      animation: none;
    }
    
    .glasnost-profile-card:hover {
      transform: translateY(-8px);
    }
  }
</style> 