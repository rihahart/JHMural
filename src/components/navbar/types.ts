export type NavName =
  | "Projects"
  | "About us"
  | "Events"
  | "Join newsletter";

export interface NavItem {
  name: NavName;
  hasDropdown?: boolean;
  submenu: { name: string; href: string }[];
}
