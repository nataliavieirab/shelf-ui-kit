export interface OhanaHeaderProps {
  currentUserName: string;
  currentUserRole: string;
  currentUserAvatar?: string;
}

export interface BreadcrumbItemProps {
  item: string;
  index: number;
  isLast: boolean;
}

export interface UserProfileProps {
  userName: string;
  userRole: string;
  userAvatar?: string;
}

export interface NotificationsProps {
  // Futuras props para notificações
}

export interface HeaderMenuProps {
  anchorEl: HTMLElement | null;
  open: boolean;
  onClose: () => void;
}
