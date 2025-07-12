import React from 'react'
import {
  Navbar,
  ProfileCard,
  GlassButton,
  CommentListCard,
  HamburgerMenu,
  GlassToggleButton
} from './index'

// This file is just for testing that all components can be imported correctly
export const TestComponents: React.FC = () => {
  return (
    <div>
      <Navbar 
        leftSlot={<span>Left</span>}
        centerLogo={<span>Logo</span>}
        rightSlot={<span>Right</span>}
      />
      
      <ProfileCard 
        avatar="https://example.com/avatar.jpg"
        name="John Doe"
        title="Developer"
      />
      
      <GlassButton>Click Me</GlassButton>
      
      <CommentListCard title="Recent Comments" />
      
      <HamburgerMenu isOpen={false} onToggle={() => console.log('toggled')} />
      
      <GlassToggleButton 
        checked={false} 
        onChange={(checked) => console.log('toggled', checked)}
        label="Toggle me"
      />
    </div>
  )
} 