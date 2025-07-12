import React, { useEffect } from 'react'
import { injectLiquidGlassFilters } from '@glasnost-ui/shared'
import type { GlassButtonProps } from '@glasnost-ui/shared'

export interface ReactGlassButtonProps extends Omit<GlassButtonProps, 'onClick' | 'children'> {
  variant?: 'primary' | 'secondary' | 'accent'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
  onClick?: () => void
  children: React.ReactNode
}

export const GlassButton: React.FC<ReactGlassButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  disabled = false,
  onClick,
  children,
  className = '',
  style
}) => {
  useEffect(() => {
    injectLiquidGlassFilters()
  }, [])

  const buttonClasses = [
    'glasnost-glass-button',
    `glass-button--${variant}`,
    `glass-button--${size}`,
    disabled ? 'glass-button--disabled' : '',
    className
  ].filter(Boolean).join(' ')

  const handleClick = () => {
    if (!disabled && onClick) {
      onClick()
    }
  }

  return (
    <button 
      className={buttonClasses}
      disabled={disabled}
      onClick={handleClick}
      type="button"
      style={style}
    >
      <div className="button-glass-overlay"></div>
      <div className="button-liquid-distortion"></div>
      <span className="button-content">
        {children}
      </span>
      <div className="button-shine"></div>
    </button>
  )
} 