import React, { useEffect } from 'react'
import { injectLiquidGlassFilters } from '@glasnost-ui/shared'
import type { ProfileCardProps } from '@glasnost-ui/shared'

export interface ReactProfileCardProps extends Omit<ProfileCardProps, 'children'> {
  avatar: string
  name: string
  title?: string
  actions?: React.ReactNode
  children?: React.ReactNode
}

export const ProfileCard: React.FC<ReactProfileCardProps> = ({
  avatar,
  name,
  title,
  actions,
  children,
  className = '',
  style
}) => {
  useEffect(() => {
    injectLiquidGlassFilters()
  }, [])

  return (
    <div 
      className={`glasnost-profile-card ${className}`}
      style={style}
    >
      <div className="profile-glass-overlay"></div>
      <div className="profile-liquid-distortion"></div>
      <div className="profile-card-content">
        <div className="avatar-container">
          <div className="avatar-glow-ring"></div>
          <img 
            src={avatar} 
            alt={`${name} avatar`} 
            className="profile-avatar"
          />
          <div className="avatar-shimmer"></div>
        </div>
        
        <div className="profile-info">
          <h3 className="profile-name">{name}</h3>
          {title && <p className="profile-title">{title}</p>}
        </div>
        
        {(actions || children) && (
          <div className="profile-actions">
            {actions}
            {children}
          </div>
        )}
      </div>

      <div className="card-shine"></div>
    </div>
  )
} 