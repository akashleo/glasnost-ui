import React, { useEffect } from 'react'
import { injectLiquidGlassFilters } from '@glasnost/shared'
import type { NavbarProps } from '@glasnost/shared'

export interface ReactNavbarProps extends Omit<NavbarProps, 'children'> {
  leftSlot?: React.ReactNode
  centerLogo?: React.ReactNode
  rightSlot?: React.ReactNode
}

export const Navbar: React.FC<ReactNavbarProps> = ({
  leftSlot,
  centerLogo,
  rightSlot,
  className = '',
  style
}) => {
  useEffect(() => {
    injectLiquidGlassFilters()
  }, [])

  return (
    <nav 
      className={`glasnost-navbar liquid-glass ${className}`}
      style={style}
    >
      {/* Embedded SVG filters */}
      <svg style={{ display: 'none' }} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="navbarDistortion" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence 
              type="fractalNoise" 
              baseFrequency="0.01 0.005" 
              numOctaves={3} 
              result="navNoise"
            />
            <feDisplacementMap 
              in="SourceGraphic" 
              in2="navNoise" 
              scale={6} 
              xChannelSelector="R" 
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      <div className="navbar-content">
        <div className="navbar-left">
          {leftSlot}
        </div>
        
        <div className="navbar-center">
          {centerLogo}
        </div>
        
        <div className="navbar-right">
          {rightSlot}
        </div>
      </div>

      <style>
        {`
        .glasnost-navbar {
          position: relative;
          width: 100%;
          padding: 1rem 2rem;
          backdrop-filter: blur(20px) saturate(2.5) brightness(1.1);
          -webkit-backdrop-filter: blur(20px) saturate(2.5) brightness(1.1);
          background: linear-gradient(135deg, 
            rgba(255, 255, 255, 0.2) 0%, 
            rgba(255, 255, 255, 0.1) 50%,
            rgba(255, 255, 255, 0.05) 100%);
          border-bottom: 1px solid rgba(255, 255, 255, 0.3);
          filter: url(#navbarDistortion);
          box-shadow: 
            0 8px 32px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.4);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 1000;
        }

        .glasnost-navbar::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(90deg, 
            transparent 0%, 
            rgba(255, 255, 255, 0.1) 50%, 
            transparent 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .glasnost-navbar:hover::before {
          opacity: 1;
          animation: navbarShimmer 2s ease-in-out infinite;
        }

        @keyframes navbarShimmer {
          0%, 100% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
        }

        .navbar-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .navbar-left,
        .navbar-center,
        .navbar-right {
          display: flex;
          align-items: center;
          flex: 1;
        }

        .navbar-left {
          justify-content: flex-start;
        }

        .navbar-center {
          justify-content: center;
          font-weight: 600;
          font-size: 1.25rem;
          color: rgba(255, 255, 255, 0.95);
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }

        .navbar-right {
          justify-content: flex-end;
        }

        /* Responsive design */
        @media (max-width: 768px) {
          .glasnost-navbar {
            padding: 0.75rem 1rem;
          }
          
          .navbar-center {
            font-size: 1.1rem;
          }
        }

        /* Reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .glasnost-navbar::before {
            animation: none;
          }
          
          .glasnost-navbar {
            transition: none;
          }
        }
        `}
      </style>
    </nav>
  )
} 