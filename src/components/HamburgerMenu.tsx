interface HamburgerMenuProps {
  onClick: () => void;
  isScrolled: boolean;
}

export default function HamburgerMenu({ onClick }: HamburgerMenuProps) {
  return (
    <button
      onClick={onClick}
      className="lg:hidden flex flex-col gap-[var(--spacing-xs)] p-[var(--spacing-s)]"
      aria-label="Toggle menu"
    >
      {[...Array(4)].map((_, index) => (
        <div
          key={index}
          className="w-[var(--spacing-xl)] h-[3px] bg-[var(--color-neutral-800)] rounded-sm transition-all duration-300"
        />
      ))}
    </button>
  );
} 