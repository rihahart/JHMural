export type NavName =
  | "Projects"
  | "About us"
  | "Get involved";

export interface NavItem {
  name: NavName;
  hasDropdown?: boolean;
  submenu: { name: string; href: string }[];
}
