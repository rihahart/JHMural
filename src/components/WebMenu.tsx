"use client";
import React, { forwardRef, useEffect, useRef, useState } from "react";
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
  const [showButtons, setShowButtons] = useState(false);

  // forward the ref
  useEffect(() => {
    if (!ref) return;
    if (typeof ref === "function") ref(localRef.current);
    else (ref as React.MutableRefObject<HTMLDivElement | null>).current =
      localRef.current;
  }, [ref, isOpen]);

  // fade-in for items
  useEffect(() => {
    if (isOpen) setTimeout(() => setShowButtons(true), 150);
    else setShowButtons(false);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      ref={localRef}
      role="menu"
      aria-label="Section menu"
      className={`
        fixed left-0 right-0 top-[80px] w-screen z-40
        bg-[#f9fbfc] shadow-lg
        transition-all duration-300 ease-out
      `}
      onMouseEnter={onMenuEnter}
      onMouseLeave={onMenuLeave}
    >
       <div className="w-full mx-auto px-6 lg:px-[var(--spacing-8xl)] max-w-[1600px]">
        {/* Row with fixed 350px height and vertical padding */}
        <div className="flex gap-[32px] h-[350px] py-[var(--spacing-4xl)]">
           {/* LEFT: 360px wide, height hugs its content */}
           <div className="w-[360px] border-t-4 border-t-gray-800 flex flex-col gap-y-4">
             {submenu.map((s) => (
               <NavButton
                 key={s.name}
                 href={s.href}
                 variant="secondary"
                 className="w-full"
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

