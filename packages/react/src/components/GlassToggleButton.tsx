import React, { useEffect } from 'react'
import { injectLiquidGlassFilters } from '../filters'
import type { GlassToggleButtonProps } from '../types'

export interface ReactGlassToggleButtonProps extends Omit<GlassToggleButtonProps, 'onChange'> {
  checked: boolean
  onChange?: (checked: boolean) => void
  label?: string
  disabled?: boolean
  className?: string
  style?: React.CSSProperties
  size?: 'small' | 'medium' | 'large'
  variant?: 'primary' | 'secondary' | 'accent'
}

export const GlassToggleButton: React.FC<ReactGlassToggleButtonProps> = ({
  checked,
  onChange,
  label = '',
  disabled = false,
  className = '',
  style,
  size = 'medium',
  variant = 'primary'
}) => {
  useEffect(() => {
    injectLiquidGlassFilters()
  }, [])

  const toggleClasses = [
    'glasnost-toggle-button',
    checked ? 'toggle-button--checked' : '',
    disabled ? 'toggle-button--disabled' : '',
    `toggle-button--${size}`,
    `toggle-button--${variant}`,
    className
  ].filter(Boolean).join(' ')

  const handleToggle = () => {
    if (!disabled && onChange) {
      onChange(!checked)
    }
  }

  return (
    <label 
      className={toggleClasses}
      aria-disabled={disabled}
      style={style}
    >
      <input 
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={handleToggle}
        className="toggle-input"
        aria-labelledby={label ? 'toggle-label' : undefined}
      />
      
      <div className="toggle-track">
        <div className="toggle-track-overlay"></div>
        <div className="toggle-liquid-distortion"></div>
        <div className="toggle-knob">
          <div className="knob-inner"></div>
          <div className="knob-shine"></div>
        </div>
        <div className="toggle-shine"></div>
      </div>
      
      {label && (
        <span id="toggle-label" className="toggle-label">
          {label}
        </span>
      )}
    </label>
  )
} 