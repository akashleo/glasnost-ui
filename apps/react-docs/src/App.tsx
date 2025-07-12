import React, { useState } from 'react';
import {
  Navbar,
  ProfileCard,
  CommentListCard,
  GlassButton,
  HamburgerMenu,
  GlassToggleButton,
} from '@glasnost/react';

import './App.css';

const userProfile = {
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
  name: 'Alex Johnson',
  title: 'Frontend Developer',
};

const componentList = [
  {
    id: 'profile-card',
    name: 'Profile Card',
    component: (
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
    ),
  },
  {
    id: 'glass-buttons',
    name: 'Glass Buttons',
    component: (
      <div className="button-demo">
        <div className="button-group">
          <h4>Button Variants</h4>
          <div className="button-row">
            <GlassButton variant="primary">Primary</GlassButton>
            <GlassButton variant="secondary">Secondary</GlassButton>
            <GlassButton variant="accent">Accent</GlassButton>
          </div>
        </div>
        <div className="button-group">
          <h4>Button Sizes</h4>
          <div className="button-row">
            <GlassButton size="small">Small</GlassButton>
            <GlassButton size="medium">Medium</GlassButton>
            <GlassButton size="large">Large</GlassButton>
          </div>
        </div>
        <div className="button-group">
          <h4>Button States</h4>
          <div className="button-row">
            <GlassButton variant="primary">Normal</GlassButton>
            <GlassButton variant="primary" disabled>
              Disabled
            </GlassButton>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'comment-card',
    name: 'Comment Card',
    component: (
      <CommentListCard title="Recent Comments" className="comment-demo">
        <div className="comment-item">
          <div className="comment-author">Sarah Chen</div>
          <div className="comment-text">
            These liquid glass effects are absolutely stunning! The fluid
            animations really bring the interface to life.
          </div>
          <div className="comment-meta">2 hours ago</div>
        </div>
        <div className="comment-item">
          <div className="comment-author">Mike Rodriguez</div>
          <div className="comment-text">
            Love the SVG filter implementation. The distortion effects add such a
            unique touch to the components.
          </div>
          <div className="comment-meta">5 hours ago</div>
        </div>
      </CommentListCard>
    ),
  },
];

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isToggleChecked, setIsToggleChecked] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleToggleChange = (checked: boolean) => {
    setIsToggleChecked(checked);
  };

  const filteredComponents = componentList.filter((c) =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app">
      <Navbar
        leftSlot={<HamburgerMenu isOpen={isMenuOpen} onToggle={handleMenuToggle} />}
        centerLogo={<div className="logo">🌊 Glasnost UI - React</div>}
        rightSlot={
          <GlassToggleButton
            checked={isToggleChecked}
            onChange={handleToggleChange}
            label="Dark Mode"
          />
        }
      />

      <main className="main-content">
        <div className="component-showcase" style={{ maxWidth: '1200px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem 0' }}>
            <input
              type="text"
              placeholder="Search components..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                padding: '0.75rem 1.5rem',
                fontSize: '1rem',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                background: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                backdropFilter: 'blur(10px)',
                width: '50%',
                maxWidth: '600px',
                textAlign: 'center'
              }}
            />
          </div>

          {filteredComponents.map((component) => (
            <div className="demo-container" key={component.id}>
              <h2>{component.name}</h2>
              {component.component}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default App; 