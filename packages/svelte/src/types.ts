export interface GlassComponentProps {
  className?: string;
  style?: Record<string, any>;
  children?: any;
}

export interface NavbarProps extends GlassComponentProps {
  leftSlot?: any;
  centerLogo?: any;
  rightSlot?: any;
}

export interface ProfileCardProps extends GlassComponentProps {
  avatar: string;
  name: string;
  title?: string;
  actions?: any;
}

export interface CommentListCardProps extends GlassComponentProps {
  comments?: any;
  title?: string;
  showMoreButton?: boolean;
  moreButtonText?: string;
}

export interface GlassButtonProps extends GlassComponentProps {
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  onClick?: () => void;
}

export interface HamburgerMenuProps extends GlassComponentProps {
  isOpen: boolean;
  onToggle: () => void;
}

export interface GlassToggleButtonProps extends GlassComponentProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'accent';
} 