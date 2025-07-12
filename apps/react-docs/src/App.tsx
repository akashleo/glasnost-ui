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
  avatar: 'https://scontent.fblr8-1.fna.fbcdn.net/v/t39.30808-6/228591002_4568736809845299_2656376336883463931_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Fz78mmlwA60Q7kNvwFE-VjL&_nc_oc=AdmNdG3BMJfR2of-84iVsPqqFAqvHCJvo-7LzJJrVsXiSjjagRDBNaCDWa-Lj3BVNFk&_nc_zt=23&_nc_ht=scontent.fblr8-1.fna&_nc_gid=AcpxF6AP30QFZiLIiXOtMg&oh=00_AfR6wwEHvI9CTWPAmpI1BzwhjdsEzeGB180HS-34Gj-DBw&oe=687879E1',
  name: 'Akash Ghosh',
  title: 'Frontend Engineer',
};

// Component list for sidebar
const componentList = [
  {
    id: 'profile-card',
    name: 'Profile Card',
    icon: '👤',
    description: 'User profile display with avatar and actions'
  },
  {
    id: 'glass-buttons',
    name: 'Glass Buttons',
    icon: '🔘',
    description: 'Interactive buttons with glass morphism'
  },
  {
    id: 'comment-card',
    name: 'Comment Card',
    icon: '💬',
    description: 'Comment list with liquid glass effects'
  },
  {
    id: 'toggle-button',
    name: 'Toggle Button',
    icon: '🔘',
    description: 'Animated toggle switch component'
  },
  {
    id: 'hamburger-menu',
    name: 'Hamburger Menu',
    icon: '☰',
    description: 'Animated hamburger menu button'
  },
  {
    id: 'navbar',
    name: 'Navbar',
    icon: '📋',
    description: 'Navigation bar with glass effects'
  }
];

// Background gradient options
const backgroundOptions = [
  {
    name: 'Protruding Squares',
    svg: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 200 200"><rect fill="%23ee5522" width="200" height="200"/><defs><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="100" y1="33" x2="100" y2="-3"><stop offset="0" stop-color="%23000" stop-opacity="0"/><stop offset="1" stop-color="%23000" stop-opacity="1"/></linearGradient><linearGradient id="b" gradientUnits="userSpaceOnUse" x1="100" y1="135" x2="100" y2="97"><stop offset="0" stop-color="%23000" stop-opacity="0"/><stop offset="1" stop-color="%23000" stop-opacity="1"/></linearGradient></defs><g fill="%23d23d09" fill-opacity="0.6"><rect x="100" width="100" height="100"/><rect y="100" width="100" height="100"/></g><g fill-opacity="0.5"><polygon fill="url(%23a)" points="100 30 0 0 200 0"/><polygon fill="url(%23b)" points="100 100 0 130 0 100 200 100 200 130"/></g></svg>')`,
    icon: '🟪'
  },
  {
    name: 'Wavey Fingerprint',
    svg: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="250" height="30" viewBox="0 0 1000 120"><rect fill="%23000000" width="1000" height="120"/><g fill="none" stroke="%23222" stroke-width="10" stroke-opacity="1"><path d="M-500 75c0 0 125-30 250-30S0 75 0 75s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30"/><path d="M-500 45c0 0 125-30 250-30S0 45 0 45s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30"/><path d="M-500 105c0 0 125-30 250-30S0 105 0 105s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30"/><path d="M-500 15c0 0 125-30 250-30S0 15 0 15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30"/><path d="M-500-15c0 0 125-30 250-30S0-15 0-15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30"/><path d="M-500 135c0 0 125-30 250-30S0 135 0 135s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30"/></g></svg>')`,
    icon: '🌀'
  },
  {
    name: 'Abstract Timekeeper',
    svg: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 1500"><rect fill="%23000000" width="2000" height="1500"/><defs><circle stroke="%23D60" vector-effect="non-scaling-stroke" id="a" fill="none" stroke-width="5" r="315"/><use id="f" href="%23a" stroke-dasharray="100 100 100 9999"/><use id="b" href="%23a" stroke-dasharray="250 250 250 250 250 9999"/><use id="e" href="%23a" stroke-dasharray="1000 500 1000 500 9999"/><use id="g" href="%23a" stroke-dasharray="1500 9999"/><use id="h" href="%23a" stroke-dasharray="2000 500 500 9999"/><use id="j" href="%23a" stroke-dasharray="800 800 800 800 800 9999"/><use id="k" href="%23a" stroke-dasharray="1200 1200 1200 1200 1200 9999"/><use id="l" href="%23a" stroke-dasharray="1600 1600 1600 1600 1600 9999"/></defs><g transform="translate(1000 750)" stroke-opacity="1"><g transform="rotate(0 0 0)"><circle fill="%23D60" fill-opacity="1" r="10"/><g transform="rotate(0 0 0)"><use href="%23f" transform="scale(.1) rotate(50 0 0)"/><use href="%23f" transform="scale(.2) rotate(100 0 0)"/><use href="%23f" transform="scale(.3) rotate(150 0 0)"/></g><g transform="rotate(0 0 0)"><use href="%23b" transform="scale(.4) rotate(200 0 0)"/><use href="%23z" transform="scale(.5) rotate(250 0 0)"/></g><g id="z" transform="rotate(0 0 0)"><g transform="rotate(0 0 0)"><use href="%23b"/><use href="%23b" transform="scale(1.2) rotate(90 0 0)"/><use href="%23b" transform="scale(1.4) rotate(60 0 0)"/><use href="%23e" transform="scale(1.6) rotate(120 0 0)"/><use href="%23e" transform="scale(1.8) rotate(30 0 0)"/></g></g><g id="y" transform="rotate(0 0 0)"><g transform="rotate(0 0 0)"><use href="%23e" transform="scale(1.1) rotate(20 0 0)"/><use href="%23g" transform="scale(1.3) rotate(-40 0 0)"/><use href="%23g" transform="scale(1.5) rotate(60 0 0)"/><use href="%23h" transform="scale(1.7) rotate(-80 0 0)"/><use href="%23j" transform="scale(1.9) rotate(100 0 0)"/></g></g><g transform="rotate(0 0 0)"><g transform="rotate(0 0 0)"><g transform="rotate(0 0 0)"><use href="%23h" transform="scale(2) rotate(60 0 0)"/><use href="%23j" transform="scale(2.1) rotate(120 0 0)"/><use href="%23j" transform="scale(2.3) rotate(180 0 0)"/><use href="%23h" transform="scale(2.4) rotate(240 0 0)"/><use href="%23j" transform="scale(2.5) rotate(300 0 0)"/></g><use href="%23y" transform="scale(2) rotate(180 0 0)"/><use href="%23j" transform="scale(2.7)"/><use href="%23j" transform="scale(2.8) rotate(45 0 0)"/><use href="%23j" transform="scale(2.9) rotate(90 0 0)"/><use href="%23k" transform="scale(3.1) rotate(135 0 0)"/><use href="%23k" transform="scale(3.2) rotate(180 0 0)"/></g><use href="%23k" transform="scale(3.3) rotate(225 0 0)"/><use href="%23k" transform="scale(3.5) rotate(270 0 0)"/><use href="%23k" transform="scale(3.6) rotate(315 0 0)"/><use href="%23k" transform="scale(3.7)"/><use href="%23k" transform="scale(3.9) rotate(75 0 0)"/></g></g></g></svg>')`,
    icon: '⏰'
  },
  {
    name: 'Zig Zag',
    svg: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect fill="%2300bb77" width="120" height="120"/><polygon fill="%23000" fill-opacity=".1" points="120 0 120 60 90 30 60 0 0 0 0 0 60 60 0 120 60 120 90 90 120 60 120 0"/></svg>')`,
    icon: '〰️'
  }
];

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isToggleChecked, setIsToggleChecked] = useState(false);
  const [selectedBackground, setSelectedBackground] = useState(0);
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

  const currentGradient = backgroundOptions[selectedBackground].svg;
  const currentComponent = componentList.find(c => c.id === selectedComponent);

  const handleMenuToggle = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const handleToggleChange = useCallback((checked: boolean) => {
    setIsToggleChecked(checked);
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

  const selectBackground = useCallback((index: number) => {
    setSelectedBackground(index);
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
    <div className="app" style={{ background: currentGradient }}>
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
            </div>
          </section>

          {/* Right Sidebar: Background Options */}
          <aside className="sidebar-right">
            <div className="sidebar-content">
              <h2 className="sidebar-title">Background</h2>
              <div className="background-options">
                {backgroundOptions.map((option, index) => (
                  <button
                    key={index}
                    className={`background-option ${selectedBackground === index ? 'active' : ''}`}
                    style={{ background: option.svg }}
                    onClick={() => selectBackground(index)}
                    title={option.name}
                  >
                    <span className="option-icon">{option.icon}</span>
                    <span className="option-name">{option.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default App; 