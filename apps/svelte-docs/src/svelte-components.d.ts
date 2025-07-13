declare module '@glasnost-ui/svelte' {
  import type { SvelteComponentTyped } from 'svelte';

  export class ProfileCard extends SvelteComponentTyped<{
    avatar: string;
    name: string;
    title: string;
  }, {}, {
    actions: {};
  }> {}

  export class GlassButton extends SvelteComponentTyped<{
    size?: 'small' | 'medium' | 'large';
    variant?: 'primary' | 'secondary' | 'accent';
    disabled?: boolean;
  }> {}

  export class CommentListCard extends SvelteComponentTyped<{
    title: string;
    class?: string;
  }, {
    more: CustomEvent<void>;
  }, {
    count: {};
    comments: {};
  }> {}

  export class GlassToggleButton extends SvelteComponentTyped<{
    size?: 'small' | 'medium' | 'large';
    variant?: 'primary' | 'secondary' | 'accent';
    checked: boolean;
    disabled?: boolean;
    label: string;
  }, {
    change: CustomEvent<boolean>;
  }> {}

  export class HamburgerMenu extends SvelteComponentTyped<{
    isOpen: boolean;
  }, {
    toggle: CustomEvent<void>;
  }> {}

  export class Navbar extends SvelteComponentTyped<{}, {}, {
    left: {};
    center: {};
    right: {};
  }> {}
} 