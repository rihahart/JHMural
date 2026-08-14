export type NavName =
  | "Projects"
  | "About us"
  | "Join newsletter";

export interface NavItem {
  name: NavName;
  hasDropdown?: boolean;
  submenu: { name: string; href: string }[];
}
