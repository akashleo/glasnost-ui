<script lang="ts">
  import {
    Navbar,
    ProfileCard,
    CommentListCard,
    GlassButton,
    HamburgerMenu,
    GlassToggleButton,
  } from '@glasnost/svelte';

  let isMenuOpen = false;
  let isToggleChecked = false;
  let searchQuery = '';

  const userProfile = {
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    name: 'Alex Johnson',
    title: 'Svelte Developer',
  };

  const componentList = [
    { id: 'profile-card', name: 'Profile Card', component: ProfileCard },
    { id: 'glass-buttons', name: 'Glass Buttons', component: GlassButton },
    { id: 'comment-card', name: 'Comment Card', component: CommentListCard },
    { id: 'hamburger-menu', name: 'Hamburger Menu', component: HamburgerMenu },
    { id: 'toggle-button', name: 'Toggle Button', component: GlassToggleButton },
  ];

  const handleMenuToggle = () => {
    isMenuOpen = !isMenuOpen;
  };

  const handleToggleChange = (event: CustomEvent<boolean>) => {
    isToggleChecked = event.detail;
  };

  const handleButtonClick = () => {
    alert('Glass button clicked!');
  };

  $: filteredComponents = componentList.filter((c) =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
</script>

<div class="app">
  <Navbar>
    <div slot="left">
      <HamburgerMenu isOpen={isMenuOpen} on:toggle={handleMenuToggle} />
    </div>
    <div slot="center" class="logo">🌊 Glasnost UI - Svelte</div>
    <div slot="right">
      <GlassToggleButton
        checked={isToggleChecked}
        on:change={handleToggleChange}
        label="Dark Mode"
      />
    </div>
  </Navbar>

  <main class="main-content">
    <div class="component-showcase" style="max-width: 1200px; display: flex; flex-direction: column; gap: 2rem;">
      <div style="display: flex; justify-content: center; padding: 2rem 0">
        <input
          type="text"
          placeholder="Search components..."
          bind:value={searchQuery}
          style="padding: 0.75rem 1.5rem; font-size: 1rem; border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.3); background: rgba(255, 255, 255, 0.1); color: white; backdrop-filter: blur(10px); width: 50%; max-width: 600px; text-align: center;"
        />
      </div>

      {#each filteredComponents as component (component.id)}
        <div class="demo-container">
          <h2>{component.name}</h2>
          {#if component.id === 'profile-card'}
            <ProfileCard
              avatar={userProfile.avatar}
              name={userProfile.name}
              title={userProfile.title}
            >
              <div slot="actions" class="profile-actions">
                <GlassButton size="small" variant="primary">Follow</GlassButton>
                <GlassButton size="small" variant="secondary">Message</GlassButton>
              </div>
            </ProfileCard>
          {:else if component.id === 'glass-buttons'}
            <div class="button-demo">
              <div class="button-group">
                <h4>Button Variants</h4>
                <div class="button-row">
                  <GlassButton variant="primary" on:click={handleButtonClick}>Primary</GlassButton>
                  <GlassButton variant="secondary" on:click={handleButtonClick}>Secondary</GlassButton>
                  <GlassButton variant="accent" on:click={handleButtonClick}>Accent</GlassButton>
                </div>
              </div>
              <div class="button-group">
                <h4>Button Sizes</h4>
                <div class="button-row">
                  <GlassButton size="small">Small</GlassButton>
                  <GlassButton size="medium">Medium</GlassButton>
                  <GlassButton size="large">Large</GlassButton>
                </div>
              </div>
              <div class="button-group">
                <h4>Button States</h4>
                <div class="button-row">
                  <GlassButton variant="primary">Normal</GlassButton>
                  <GlassButton variant="primary" disabled>Disabled</GlassButton>
                </div>
              </div>
            </div>
          {:else if component.id === 'comment-card'}
            <CommentListCard title="Recent Comments" class="comment-demo">
              <div slot="count">2 comments</div>
              <div slot="comments">
                <div class="comment-item">
                  <div class="comment-author">Sarah Chen</div>
                  <div class="comment-text">
                    These liquid glass effects are absolutely stunning! The fluid
                    animations really bring the interface to life.
                  </div>
                  <div class="comment-meta">2 hours ago</div>
                </div>
                <div class="comment-item">
                  <div class="comment-author">Mike Rodriguez</div>
                  <div class="comment-text">
                    Love the Svelte implementation. The reactivity is so natural.
                  </div>
                  <div class="comment-meta">5 hours ago</div>
                </div>
              </div>
            </CommentListCard>
          {/if}
        </div>
      {/each}
    </div>
  </main>
</div>

<style>
  :global(.app) {
    min-height: 100vh;
    transition: background 0.5s ease;
  }

  :global(.main-content) {
    padding-top: 1rem;
  }

  :global(.component-showcase) {
    max-width: 800px;
    margin: 0 auto;
  }

  :global(.logo) {
    font-size: 1.5rem;
    font-weight: 700;
    background: linear-gradient(45deg, #fff, #f0f9ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  :global(.demo-container) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    width: 100%;
  }

  :global(.button-demo) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    max-width: 600px;
  }

  :global(.button-group) {
    text-align: center;
  }

  :global(.button-group h4) {
    color: rgba(255, 255, 255, 0.9);
    margin: 0 0 1rem 0;
    font-size: 1.125rem;
  }

  :global(.button-row) {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  :global(.comment-demo) {
    width: 100%;
    max-width: 600px;
  }

  :global(.profile-actions) {
    display: flex;
    gap: 0.75rem;
    justify-content: center;
    width: 100%;
  }
  
  :global(.comment-item) {
    padding: 1.5rem;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, 
      rgba(255, 255, 255, 0.15) 0%, 
      rgba(255, 255, 255, 0.08) 100%);
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(20px);
    transition: all 0.3s cubic-bezier(0.23, 1, 0.320, 1);
    box-shadow: 
      0 8px 25px rgba(31, 38, 135, 0.15),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
  }

  :global(.comment-item:hover) {
    background: linear-gradient(135deg, 
      rgba(255, 255, 255, 0.2) 0%, 
      rgba(255, 255, 255, 0.12) 100%);
    border-color: rgba(255, 255, 255, 0.25);
    transform: translateX(8px) translateY(-2px);
    box-shadow: 
      0 12px 35px rgba(31, 38, 135, 0.25),
      inset 0 2px 0 rgba(255, 255, 255, 0.3);
  }

  :global(.comment-author) {
    font-weight: 700;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 0.75rem;
    font-size: 1.1rem;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  }

  :global(.comment-text) {
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.7;
    font-size: 1rem;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }

  :global(.comment-meta) {
    font-size: 0.875rem;
    color: rgba(255, 255, 255, 0.6);
    margin-top: 0.75rem;
    font-weight: 500;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }
</style> 