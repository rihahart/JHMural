"use client";

import React from "react";
import NavButton from "../ButtonCollection/NavButton";
import WebMenu from "../WebMenu";
import type { NavItem, NavName } from "./types";

interface DesktopNavItemProps {
  item: NavItem;
  active: boolean;
  isOpen: boolean;
  isInitialLoad: boolean;
  isHovered: boolean;
  hoverEnabled: boolean;
  menuRef: React.RefObject<HTMLDivElement | null>;
  onNavigate: (href: string) => void;
  onToggleMenu: (name: NavName) => void;
  onOpenMenu: (name: NavName) => void;
  onClearCloseTimer: () => void;
  onScheduleClose: () => void;
  onHoverChange: (value: boolean) => void;
}

export default function DesktopNavItem({
  item,
  active,
  isOpen,
  isInitialLoad,
  isHovered,
  hoverEnabled,
  menuRef,
  onNavigate,
  onToggleMenu,
  onOpenMenu,
  onClearCloseTimer,
  onScheduleClose,
  onHoverChange,
}: DesktopNavItemProps) {
  // Direct link (no dropdown)
  if (item.hasDropdown === false && item.submenu && item.submenu.length > 0) {
    const href = item.submenu[0].href;
    return (
      <div className="relative">
        <NavButton
          variant="tertiary"
          isActive={active || isHovered}
          isInitialLoad={isInitialLoad}
          trailingIcon="/flower.svg"
          onClick={() => onNavigate(href)}
          onMouseEnter={() => onHoverChange(true)}
          onMouseLeave={() => onHoverChange(false)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              onNavigate(href);
            }
          }}
          role="button"
          tabIndex={0}
          className="group"
        >
          {item.name}
        </NavButton>
      </div>
    );
  }

  // Dropdown
  return (
    <div className="relative">
      <NavButton
        variant="tertiary"
        isActive={active || isOpen}
        isInitialLoad={isInitialLoad}
        trailingIcon="/flower.svg"
        onClick={() => onToggleMenu(item.name)}
        onMouseEnter={() => {
          if (!hoverEnabled) return;
          onClearCloseTimer();
          onOpenMenu(item.name);
        }}
        onMouseLeave={() => {
          if (!hoverEnabled) return;
          onScheduleClose();
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onToggleMenu(item.name);
          }
        }}
        role="button"
        tabIndex={0}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        className="group"
      >
        {item.name}
      </NavButton>

      <WebMenu
        ref={menuRef}
        isOpen={isOpen}
        submenu={item.submenu || []}
        onMenuEnter={() => {
          if (!hoverEnabled) return;
          onClearCloseTimer();
          onOpenMenu(item.name);
        }}
        onMenuLeave={() => {
          if (!hoverEnabled) return;
          onScheduleClose();
        }}
      />
    </div>
  );
}
