import React from "react";

export function MobileOnly({ children }: { children: React.ReactNode }) {
  return <div className="md:hidden">{children}</div>;
}

export function DesktopOnly({ children }: { children: React.ReactNode }) {
  return <div className="hidden md:block">{children}</div>;
}
