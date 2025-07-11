import React, { useEffect } from 'react'
import { injectLiquidGlassFilters } from '@glasnost/shared'
import type { ProfileCardProps } from '@glasnost/shared'

export interface ReactProfileCardProps extends Omit<ProfileCardProps, 'children'> {
  avatar: string
  name: string
  title?: string
  actions?: React.ReactNode
}

export const ProfileCard: React.FC<ReactProfileCardProps> = ({
  avatar,
  name,
  title,
  actions,
  className = '',
  style
}) => {
  useEffect(() => {
    injectLiquidGlassFilters()
  }, [])

  return (
    <div 
      className={`glasnost-profile-card enhanced-liquid ${className}`}
      style={style}
    >
      {/* Embedded SVG filters */}
      <svg style={{ display: 'none' }} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="profileCardDistortion" x="-30%" y="-30%" width="160%" height="160%">
            <feTurbulence 
              type="fractalNoise" 
              baseFrequency="0.008 0.012" 
              numOctaves={4} 
              result="profileNoise"
            />
            <feDisplacementMap 
              in="SourceGraphic" 
              in2="profileNoise" 
              scale={10} 
              xChannelSelector="R" 
              yChannelSelector="G" 
              result="profileDisplaced"
            />
            <feGaussianBlur in="profileDisplaced" stdDeviation="0.6" result="profileBlur"/>
            <feColorMatrix 
              in="profileBlur" 
              type="matrix" 
              values="1.05 0 0 0 0  0 1.05 0 0 0  0 0 1.1 0 0  0 0 0 0.95 0"
            />
          </filter>

          <filter id="avatarGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
      </svg>

      <div className="profile-card-content">
        <div className="avatar-container">
          <img 
            src={avatar} 
            alt={`${name} avatar`} 
            className="profile-avatar"
          />
          <div className="avatar-glow"></div>
        </div>
        
        <div className="profile-info">
          <h3 className="profile-name">{name}</h3>
          {title && <p className="profile-title">{title}</p>}
        </div>
        
        {actions && (
          <div className="profile-actions">
            {actions}
          </div>
        )}
      </div>

      {/* Floating elements for additional liquid effect */}
      <div className="floating-bubble bubble-1"></div>
      <div className="floating-bubble bubble-2"></div>
      <div className="floating-bubble bubble-3"></div>

      <style jsx>{`
        .glasnost-profile-card {
          position: relative;
          width: 100%;
          max-width: 320px;
          padding: 2rem 1.5rem;
          backdrop-filter: blur(24px) saturate(3) brightness(1.2);
          -webkit-backdrop-filter: blur(24px) saturate(3) brightness(1.2);
          background: 
            linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.1) 100%),
            linear-gradient(45deg, rgba(255, 255, 255, 0.1) 0%, transparent 100%);
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 28px;
          filter: url(#profileCardDistortion);
          box-shadow: 
            0 16px 48px rgba(0, 0, 0, 0.1),
            inset 0 2px 0 rgba(255, 255, 255, 0.4),
            0 0 0 1px rgba(255, 255, 255, 0.1);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        }

        .glasnost-profile-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          animation: cardShimmer 4s ease-in-out infinite;
          z-index: 1;
        }

        .glasnost-profile-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 
            0 24px 64px rgba(0, 0, 0, 0.15),
            inset 0 3px 0 rgba(255, 255, 255, 0.5),
            0 0 0 2px rgba(255, 255, 255, 0.2);
        }

        @keyframes cardShimmer {
          0% { left: -100%; }
          50% { left: -100%; }
          100% { left: 100%; }
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
          margin-bottom: 1.5rem;
        }

        .profile-avatar {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid rgba(255, 255, 255, 0.4);
          filter: url(#avatarGlow);
          transition: all 0.3s ease;
          position: relative;
          z-index: 2;
        }

        .avatar-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100px;
          height: 100px;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          opacity: 0.6;
          animation: avatarPulse 3s ease-in-out infinite;
          z-index: 1;
        }

        @keyframes avatarPulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.6; }
          50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.3; }
        }

        .profile-info {
          margin-bottom: 1.5rem;
        }

        .profile-name {
          font-size: 1.5rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.95);
          margin: 0 0 0.5rem 0;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
          letter-spacing: 0.025em;
        }

        .profile-title {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.8);
          margin: 0;
          font-weight: 400;
          opacity: 0.9;
        }

        .profile-actions {
          width: 100%;
        }

        /* Floating bubble effects */
        .floating-bubble {
          position: absolute;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
          animation: floatBubble 6s ease-in-out infinite;
        }

        .bubble-1 {
          width: 20px;
          height: 20px;
          top: 20%;
          left: 15%;
          animation-delay: 0s;
        }

        .bubble-2 {
          width: 15px;
          height: 15px;
          top: 60%;
          right: 20%;
          animation-delay: 2s;
        }

        .bubble-3 {
          width: 12px;
          height: 12px;
          bottom: 25%;
          left: 25%;
          animation-delay: 4s;
        }

        @keyframes floatBubble {
          0%, 100% { 
            transform: translateY(0) scale(1); 
            opacity: 0.3; 
          }
          50% { 
            transform: translateY(-20px) scale(1.2); 
            opacity: 0.6; 
          }
        }

        /* Responsive design */
        @media (max-width: 768px) {
          .glasnost-profile-card {
            max-width: 280px;
            padding: 1.5rem 1.25rem;
            border-radius: 20px;
          }
          
          .profile-avatar {
            width: 70px;
            height: 70px;
          }
          
          .avatar-glow {
            width: 85px;
            height: 85px;
          }
          
          .profile-name {
            font-size: 1.3rem;
          }
        }

        /* Reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .glasnost-profile-card::before,
          .avatar-glow,
          .floating-bubble {
            animation: none;
          }
          
          .glasnost-profile-card {
            transition: none;
          }
          
          .profile-avatar {
            transition: none;
          }
        }
      `}</style>
    </div>
  )
} 