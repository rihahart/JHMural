export type NavName =
  | "Projects"
  | "Get to know us"
  | "Get involved"
  | "Join our newsletter";

export interface NavItem {
  name: NavName;
  hasDropdown?: boolean;
  submenu: { name: string; href: string }[];
}
