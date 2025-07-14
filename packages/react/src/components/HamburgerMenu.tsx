import React, { useEffect } from 'react'
import { injectLiquidGlassFilters } from '../filters'

export interface ReactHamburgerMenuProps {
  isOpen: boolean
  onToggle: () => void
  className?: string
  style?: React.CSSProperties
}

export const HamburgerMenu: React.FC<ReactHamburgerMenuProps> = ({
  isOpen,
  onToggle,
  className = '',
  style
}) => {
  useEffect(() => {
    injectLiquidGlassFilters()
  }, [])

  const menuClasses = [
    'glasnost-hamburger-menu',
    isOpen ? 'hamburger-menu--open' : '',
    className
  ].filter(Boolean).join(' ')

  const handleToggle = () => {
    onToggle()
  }

  return (
    <button 
      className={menuClasses}
      onClick={handleToggle}
      type="button"
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isOpen}
      style={style}
    >
      <div className="hamburger-glass-overlay"></div>
      <div className="hamburger-liquid-distortion"></div>
      <div className="hamburger-icon">
        <span className="hamburger-line hamburger-line--top"></span>
        <span className="hamburger-line hamburger-line--middle"></span>
        <span className="hamburger-line hamburger-line--bottom"></span>
      </div>
      <div className="hamburger-shine"></div>
    </button>
  )
} 