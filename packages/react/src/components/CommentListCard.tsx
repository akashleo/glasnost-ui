import React, { useEffect } from 'react'
import { injectLiquidGlassFilters } from '../filters'
import type { CommentListCardProps } from '../types'

export interface ReactCommentListCardProps extends Omit<CommentListCardProps, 'children'> {
  title?: string
  count?: number
  comments?: React.ReactNode
  children?: React.ReactNode
  className?: string
  style?: React.CSSProperties
  showMoreButton?: boolean
  moreButtonText?: string
  onMore?: () => void
}

export const CommentListCard: React.FC<ReactCommentListCardProps> = ({
  title = 'Comments',
  comments,
  count =0,
  children,
  className = '',
  style,
  showMoreButton = true,
  moreButtonText = 'More',
  onMore
}) => {
  useEffect(() => {
    injectLiquidGlassFilters()
  }, [])

  const handleMoreClick = () => {
    if (onMore) {
      onMore()
    }
  }

  return (
    <div 
      className={`glasnost-comment-card ${className}`}
      style={style}
    >
      <div className="comment-glass-overlay"></div>
      <div className="comment-liquid-distortion"></div>
      <div className="comment-card-header">
        <h3 className="comment-title">{title}</h3>
        <div className="comment-count">
          {count}
        </div>
      </div>

      <div className="comment-card-content">
        {children || comments || (
          <div className="no-comments">
            <div className="no-comments-icon">💬</div>
            <p>No comments yet. Be the first to share your thoughts!</p>
          </div>
        )}
      </div>

      {/* More button */}
      {showMoreButton && (
        <div className="comment-card-footer">
          <button 
            className="more-button"
            onClick={handleMoreClick}
            type="button"
          >
            <span className="more-button-text">{moreButtonText}</span>
            <div className="more-button-shine"></div>
          </button>
        </div>
      )}

      {/* Enhanced floating elements */}
      <div className="floating-particle particle-1"></div>
      <div className="floating-particle particle-2"></div>
      <div className="floating-particle particle-3"></div>
      <div className="comment-shine"></div>
    </div>
  )
} 