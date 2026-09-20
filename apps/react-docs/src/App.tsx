import React, { useState, useCallback } from 'react';
import {
  Navbar,
  ProfileCard,
  CommentListCard,
  GlassButton,
  HamburgerMenu,
  GlassToggleButton,
} from '@glasnost-ui/react';

import './App.css';

const userProfile = {
  avatar: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0e/Zitting_Cisticola_in_Bhigwan_August_2025_by_Tisha_Mukherjee_01.jpg/1920px-Zitting_Cisticola_in_Bhigwan_August_2025_by_Tisha_Mukherjee_01.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
  name: 'Akash Ghosh',
  title: 'Frontend Engineer',
};

// Component list for sidebar
const componentList = [
  {
    id: 'profile-card',
    name: 'Profile Card',
    icon: '👤',
    description: 'User profile display with avatar and actions',
    usage: 'Display a user identity with avatar, name and title. Provide custom actions (follow, message, etc.) through the actions prop — typically GlassButtons.',
    code: `<ProfileCard
  avatar="/avatar.jpg"
  name="Akash Ghosh"
  title="Frontend Engineer"
  actions={
    <GlassButton size="small" variant="primary">
      Follow
    </GlassButton>
  }
/>`
  },
  {
    id: 'glass-buttons',
    name: 'Glass Buttons',
    icon: '🔘',
    description: 'Interactive buttons with glass morphism',
    usage: 'Use for primary actions throughout the interface. Combine a size (small, medium, large) with a variant (primary, secondary, accent) and disable when the action is unavailable.',
    code: `<GlassButton size="medium" variant="primary">
  Click me
</GlassButton>

<GlassButton variant="primary" disabled>
  Disabled
</GlassButton>`
  },
  {
    id: 'comment-card',
    name: 'Comment Card',
    icon: '💬',
    description: 'Comment list with liquid glass effects',
    usage: 'Wrap comment items in a styled card with a title and optional "load more" pagination via the onMore callback and showMoreButton prop.',
    code: `<CommentListCard
  title="Recent Comments"
  onMore={loadMore}
  showMoreButton
  count={3}
  moreButtonText="Load More"
>
  {comments.map(renderComment)}
</CommentListCard>`
  },
  {
    id: 'toggle-button',
    name: 'Toggle Button',
    icon: '🔘',
    description: 'Animated toggle switch component',
    usage: 'A controlled switch for boolean settings. Keep the checked state in React state and update it via the onChange callback; add a label for accessibility.',
    code: `const [enabled, setEnabled] = useState(false);

<GlassToggleButton
  size="medium"
  variant="primary"
  checked={enabled}
  onChange={setEnabled}
  label="Enable notifications"
/>`
  },
  {
    id: 'hamburger-menu',
    name: 'Hamburger Menu',
    icon: '☰',
    description: 'Animated hamburger menu button',
    usage: 'Animated menu trigger — typically placed in the Navbar left slot. Drive it with an isOpen boolean and an onToggle handler.',
    code: `const [isOpen, setIsOpen] = useState(false);

<HamburgerMenu
  isOpen={isOpen}
  onToggle={() => setIsOpen(o => !o)}
/>`
  },
  {
    id: 'navbar',
    name: 'Navbar',
    icon: '📋',
    description: 'Navigation bar with glass effects',
    usage: 'Compose a top navigation bar from three slots: leftSlot (menu), centerLogo (brand) and rightSlot (actions).',
    code: `<Navbar
  leftSlot={<HamburgerMenu isOpen={isOpen} onToggle={toggle} />}
  centerLogo={<span>Glasnost UI</span>}
  rightSlot={<GlassButton variant="primary">Start</GlassButton>}
/>`
  }
];

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState('profile-card');

  // Toggle button states
  const [toggleSizes, setToggleSizes] = useState({
    small: false,
    medium: false,
    large: false
  });

  const [toggleVariants, setToggleVariants] = useState({
    primary: false,
    secondary: false,
    accent: false
  });

  const [toggleStates, setToggleStates] = useState({
    interactive: false,
    notifications: true,
  });

  const currentComponent = componentList.find(c => c.id === selectedComponent);

  const handleMenuToggle = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const handleSizeToggle = useCallback((size: 'small' | 'medium' | 'large', checked: boolean) => {
    setToggleSizes(prev => ({ ...prev, [size]: checked }));
  }, []);

  const handleVariantToggle = useCallback((variant: 'primary' | 'secondary' | 'accent', checked: boolean) => {
    setToggleVariants(prev => ({ ...prev, [variant]: checked }));
  }, []);

  const handleStateToggle = useCallback((state: 'interactive' | 'notifications', checked: boolean) => {
    setToggleStates(prev => ({ ...prev, [state]: checked }));
  }, []);

  const handleMoreComments = useCallback(() => {
    alert('Loading more comments...');
  }, []);

  const selectComponent = useCallback((componentId: string) => {
    setSelectedComponent(componentId);
  }, []);

  const renderSelectedComponent = () => {
    switch (selectedComponent) {
      case 'profile-card':
        return (
          <div className="demo-container">
            <ProfileCard 
              avatar={userProfile.avatar}
              name={userProfile.name}
              title={userProfile.title}
              actions={
                <div className="profile-actions">
                  <GlassButton size="small" variant="primary">
                    Follow
                  </GlassButton>
                  <GlassButton size="small" variant="secondary">
                    Message
                  </GlassButton>
                </div>
              }
            />
          </div>
        );

      case 'glass-buttons':
        return (
          <div className="demo-container">
            <div className="button-demo">
              <div className="button-group">
                <h4>Button Sizes</h4>
                <div className="button-row">
                  <GlassButton size="small">Small</GlassButton>
                  <GlassButton size="medium">Medium</GlassButton>
                  <GlassButton size="large">Large</GlassButton>
                </div>
              </div>
              <div className="button-group">
                <h4>Button Variants</h4>
                <div className="button-row">
                  <GlassButton size="small" variant="primary">Primary Small</GlassButton>
                  <GlassButton size="medium" variant="secondary">Secondary Medium</GlassButton>
                  <GlassButton size="large" variant="accent">Accent Large</GlassButton>
                </div>
              </div>
              <div className="button-group">
                <h4>Button States</h4>
                <div className="button-row">
                  <GlassButton variant="primary">Normal</GlassButton>
                  <GlassButton variant="primary" disabled>Disabled</GlassButton>
                </div>
              </div>
            </div>
          </div>
        );

      case 'comment-card':
        return (
          <div className="demo-container">
            <CommentListCard 
              title="Recent Comments"
              className="comment-demo"
              onMore={handleMoreComments}
              showMoreButton={true}
              count={3}
              moreButtonText="Load More"
            >
              <div className="comment-item">
                <div className="comment-author">Sarah Chen</div>
                <div className="comment-text">
                  These liquid glass effects are absolutely stunning!
                  The fluid animations really bring the interface to life.
                </div>
                <div className="comment-meta">2 hours ago</div>
              </div>

              <div className="comment-item">
                <div className="comment-author">Mike Rodriguez</div>
                <div className="comment-text">
                  Love the SVG filter implementation. The distortion effects
                  add such a unique touch to the components.
                </div>
                <div className="comment-meta">5 hours ago</div>
              </div>

              <div className="comment-item">
                <div className="comment-author">Emma Thompson</div>
                <div className="comment-text">
                  Perfect for modern web applications. The responsiveness
                  and accessibility features are well thought out.
                </div>
                <div className="comment-meta">1 day ago</div>
              </div>
            </CommentListCard>
          </div>
        );

      case 'toggle-button':
        return (
          <div className="demo-container">
            <div className="toggle-demo">
              <div className="button-group">
                <h4>Toggle Sizes</h4>
                <div className="toggle-row">
                  <GlassToggleButton 
                    size="small" 
                    checked={toggleSizes.small}
                    onChange={(checked: boolean) => handleSizeToggle('small', checked)}
                    label="Small Toggle" 
                  />
                  <GlassToggleButton 
                    size="medium" 
                    checked={toggleSizes.medium}
                    onChange={(checked: boolean) => handleSizeToggle('medium', checked)}
                    label="Medium Toggle" 
                  />
                  <GlassToggleButton 
                    size="large" 
                    checked={toggleSizes.large}
                    onChange={(checked: boolean) => handleSizeToggle('large', checked)}
                    label="Large Toggle" 
                  />
                </div>
              </div>

              <div className="button-group">
                <h4>Toggle Variants</h4>
                <div className="toggle-row">
                  <GlassToggleButton 
                    variant="primary"
                    size="small"
                    checked={toggleVariants.primary}
                    onChange={(checked: boolean) => handleVariantToggle('primary', checked)}
                    label="Primary Small" 
                  />
                  <GlassToggleButton 
                    variant="secondary"
                    size="medium"
                    checked={toggleVariants.secondary}
                    onChange={(checked: boolean) => handleVariantToggle('secondary', checked)}
                    label="Secondary Medium" 
                  />
                  <GlassToggleButton 
                    variant="accent"
                    size="large"
                    checked={toggleVariants.accent}
                    onChange={(checked: boolean) => handleVariantToggle('accent', checked)}
                    label="Accent Large" 
                  />
                </div>
              </div>

              <div className="button-group">
                <h4>Toggle States</h4>
                <div className="toggle-row">
                  <GlassToggleButton 
                    checked={toggleStates.notifications}
                    onChange={(checked: boolean) => handleStateToggle('notifications', checked)}
                    label="Notifications" 
                  />
                  <GlassToggleButton 
                    checked={true} 
                    disabled 
                    label="Disabled On" 
                  />
                  <GlassToggleButton 
                    checked={false} 
                    disabled 
                    label="Disabled Off" 
                  />
                </div>
              </div>

              <div className="button-group">
                <div className="toggle-states-display">
                  <h4>Current States</h4>
                  <div className="state-group">
                    <h5>Sizes</h5>
                    <div className="state-row">
                      <p>Small: {toggleSizes.small ? 'On' : 'Off'}</p>
                      <p>Medium: {toggleSizes.medium ? 'On' : 'Off'}</p>
                      <p>Large: {toggleSizes.large ? 'On' : 'Off'}</p>
                    </div>
                  </div>
                  <div className="state-group">
                    <h5>Variants</h5>
                    <div className="state-row">
                      <p>Primary: {toggleVariants.primary ? 'On' : 'Off'}</p>
                      <p>Secondary: {toggleVariants.secondary ? 'On' : 'Off'}</p>
                      <p>Accent: {toggleVariants.accent ? 'On' : 'Off'}</p>
                    </div>
                  </div>
                  <div className="state-group">
                    <h5>Features</h5>
                    <div className="state-row">
                      <p>Notifications: {toggleStates.notifications ? 'On' : 'Off'}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'hamburger-menu':
        return (
          <div className="demo-container">
            <div className="hamburger-demo">
              <HamburgerMenu isOpen={isMenuOpen} onToggle={handleMenuToggle} />
              <p className="demo-note">Click to toggle menu state</p>
            </div>
          </div>
        );

      case 'navbar':
        return (
          <div className="demo-container">
            <div className="navbar-demo">
              <Navbar 
                leftSlot={<HamburgerMenu isOpen={isMenuOpen} onToggle={handleMenuToggle} />}
                centerLogo={<span className="brand-name" style={{ fontWeight: 600, fontSize: '1.1rem' }}>Glasnost UI</span>}
                rightSlot={<GlassButton variant="primary">Start</GlassButton>}
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="app">
      {/* Top Navigation */}
      <header className="app-header">
        <Navbar 
          style={{width: "100%", margin:"0 auto"}}
          leftSlot={<HamburgerMenu isOpen={isMenuOpen} onToggle={handleMenuToggle} />}
          centerLogo={<span className="brand-name" style={{ fontWeight: 700, fontSize: '1.25rem' }}>Glasnost UI</span>}
          rightSlot={
            <GlassButton size="small" variant="primary">
              React Docs
            </GlassButton>
          }
        />
      </header>

      {/* Main Content */}
      <main className="main-content">
        <div className="layout-container">
          {/* Left Sidebar: Component List */}
          <aside className="sidebar-left">
            <div className="sidebar-content">
              <h2 className="sidebar-title">Components</h2>
              <div className="component-list">
                {componentList.map(component => (
                  <button 
                    key={component.id}
                    className={`component-item ${selectedComponent === component.id ? 'active' : ''}`}
                    onClick={() => selectComponent(component.id)}
                  >
                    <span className="component-icon">{component.icon}</span>
                    <div className="component-info">
                      <h3 className="component-name">{component.name}</h3>
                      <p className="component-description">{component.description}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Center: Selected Component Display */}
          <section className="main-section">
            <div className="component-showcase">
              <div className="showcase-content">
                {renderSelectedComponent()}
              </div>
              {currentComponent && (
                <div className="usage-panel">
                  <div className="usage-header">
                    <span className="usage-icon">{currentComponent.icon}</span>
                    <h3 className="usage-title">Using {currentComponent.name}</h3>
                  </div>
                  <p className="usage-description">{currentComponent.usage}</p>
                  <pre className="usage-code"><code>{currentComponent.code}</code></pre>
                </div>
              )}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default App; 