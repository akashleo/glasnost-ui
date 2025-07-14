export interface GlassComponentProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export interface NavbarProps extends GlassComponentProps {
  leftSlot?: React.ReactNode;
  centerLogo?: React.ReactNode;
  rightSlot?: React.ReactNode;
}

export interface ProfileCardProps extends GlassComponentProps {
  avatar: string;
  name: string;
  title?: string;
  actions?: React.ReactNode;
}

export interface CommentListCardProps extends GlassComponentProps {
  comments?: React.ReactNode;
  title?: string;
  count?: number;
  showMoreButton?: boolean;
  moreButtonText?: string;
  onMore?: () => void;
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
  onChange?: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'accent';
} 