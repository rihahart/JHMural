"use client";
import React, { forwardRef, useEffect, useRef } from "react";
import NavButton from "./NavButton";

interface WebMenuProps {
  isOpen: boolean;
  submenu: Array<{ name: string; href: string }>;
  onMenuEnter?: () => void;
  onMenuLeave?: () => void;
}

const WebMenu = forwardRef<HTMLDivElement, WebMenuProps>(function WebMenu(
  { isOpen, submenu, onMenuEnter, onMenuLeave },
  ref
) {
  const localRef = useRef<HTMLDivElement | null>(null);

  // forward the ref
  useEffect(() => {
    if (!ref) return;
    if (typeof ref === "function") ref(localRef.current);
    else (ref as React.RefObject<HTMLDivElement | null>).current =
      localRef.current;
  }, [ref, isOpen]);

  if (!isOpen) return null;

  return (
    <div
      ref={localRef}
      role="menu"
      aria-label="Section menu"
      className={`
        fixed left-0 right-0 w-screen z-50
        bg-[var(--color-background-hover)] shadow-lg
        ${isOpen ? 'animate-down-in' : 'animate-down-out'}
      `}
      style={{
        top: 'calc(81px + var(--spacing-m) * 2 - 1px)',
        transform: isOpen ? 'translateY(0)' : 'translateY(-100vh)'
      }}
      onMouseEnter={onMenuEnter}
      onMouseLeave={onMenuLeave}
    >
       <div className="w-full mx-auto px-[var(--spacing-xl)] lg:px-[var(--spacing-4xl)]" style={{ maxWidth: 'clamp(1000px, calc(1250px + (100vw - 1440px) * 0.7), 1600px)' }}>
        {/* Row with fixed 350px height and vertical padding */}
        <div className="flex gap-[32px] h-[350px] py-[var(--spacing-4xl)]">
           {/* LEFT: 360px wide, height hugs its content */}
           <div className="w-[360px] border-t-4 border-t-[var(--color-content-secondary)] flex flex-col gap-y-4">
             {submenu.map((s) => (
               <NavButton
                 key={s.name}
                 href={s.href}
                 variant="secondary"
                 trailingIcon="/flower.svg"
               >
                 {s.name}
               </NavButton>
             ))}
           </div>

           {/* RIGHT: flexible area */}
           <div className="flex-1 self-stretch">
             {/* Add your right-side content here */}
           </div>
        </div>
      </div>
    </div>
  );
});

export default WebMenu;

