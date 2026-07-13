export type NavName =
  | "Murals"
  | "Get to know us"
  | "Join our newsletter";

export interface NavItem {
  name: NavName;
  hasDropdown?: boolean;
  submenu: { name: string; href: string }[];
}
