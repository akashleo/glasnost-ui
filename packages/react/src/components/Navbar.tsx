import React, { useEffect } from 'react'
import { injectLiquidGlassFilters } from '@glasnost/shared'
import type { NavbarProps } from '@glasnost/shared'

export interface ReactNavbarProps extends Omit<NavbarProps, 'children'> {
  leftSlot?: React.ReactNode
  centerLogo?: React.ReactNode
  rightSlot?: React.ReactNode
  children?: React.ReactNode
}

export const Navbar: React.FC<ReactNavbarProps> = ({
  leftSlot,
  centerLogo,
  rightSlot,
  children,
  className = '',
  style
}) => {
  useEffect(() => {
    injectLiquidGlassFilters()
  }, [])

  return (
    <nav 
      className={`glasnost-navbar ${className}`}
      style={style}
    >
      <div className="navbar-glass-overlay"></div>
      <div className="navbar-liquid-distortion"></div>
      <div className="navbar-content">
        <div className="navbar-left">
          {leftSlot}
          {children && (
            <div className="navbar-left-slot">
              {children}
            </div>
          )}
        </div>
        
        <div className="navbar-center">
          {centerLogo}
        </div>
        
        <div className="navbar-right">
          {rightSlot}
        </div>
      </div>
    </nav>
  )
} 