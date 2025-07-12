import React, { useState } from 'react'
import {
  Navbar,
  ProfileCard,
  GlassButton,
  CommentListCard,
  HamburgerMenu,
  GlassToggleButton
} from './index'

// This file is for testing that all components work correctly with the new CSS
export const TestComponents: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isToggleChecked, setIsToggleChecked] = useState(false)

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleToggleChange = (checked: boolean) => {
    setIsToggleChecked(checked)
  }

  const handleMoreComments = () => {
    console.log('Loading more comments...')
  }

  return (
    <div style={{ 
      padding: '2rem', 
      backgroundColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem'
    }}>
      <Navbar 
        leftSlot={<span>🌟 Glasnost</span>}
        centerLogo={<span>UI Components</span>}
        rightSlot={
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <GlassButton size="small" variant="primary">
              Sign In
            </GlassButton>
            <HamburgerMenu isOpen={isMenuOpen} onToggle={handleMenuToggle} />
          </div>
        }
      />
      
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
        <ProfileCard 
          avatar="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
          name="John Doe"
          title="Frontend Developer"
          actions={
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <GlassButton size="small" variant="primary">
                Follow
              </GlassButton>
              <GlassButton size="small" variant="secondary">
                Message
              </GlassButton>
            </div>
          }
        />
        
        <CommentListCard 
          title="Recent Comments"
          onMore={handleMoreComments}
          showMoreButton={true}
          moreButtonText="Load More"
        >
          <div className="comment-item">
            <div className="comment-author">Sarah Chen</div>
            <div className="comment-text">
              These liquid glass effects are absolutely stunning! The fluid animations really bring the interface to life.
            </div>
            <div className="comment-meta">2 hours ago</div>
          </div>
          <div className="comment-item">
            <div className="comment-author">Mike Rodriguez</div>
            <div className="comment-text">
              Love the SVG filter implementation. The distortion effects add such a unique touch to the components.
            </div>
            <div className="comment-meta">5 hours ago</div>
          </div>
          <div className="comment-item">
            <div className="comment-author">Emma Thompson</div>
            <div className="comment-text">
              Perfect for modern web applications. The responsiveness and accessibility features are well thought out.
            </div>
            <div className="comment-meta">1 day ago</div>
          </div>
        </CommentListCard>
      </div>
      
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <GlassButton size="small" variant="primary">Small</GlassButton>
          <GlassButton size="medium" variant="secondary">Medium</GlassButton>
          <GlassButton size="large" variant="accent">Large</GlassButton>
        </div>
        
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <GlassToggleButton 
            checked={isToggleChecked}
            onChange={handleToggleChange}
            label="Dark Mode"
            size="medium"
            variant="primary"
          />
          <GlassToggleButton 
            checked={true}
            onChange={() => {}}
            label="Notifications"
            size="small"
            variant="secondary"
          />
          <GlassToggleButton 
            checked={false}
            onChange={() => {}}
            label="Auto-save"
            size="large"
            variant="accent"
          />
        </div>
      </div>
    </div>
  )
} 