interface HamburgerMenuProps {
  onClick: () => void;
  isScrolled: boolean;
}

export default function HamburgerMenu({ onClick, isScrolled }: HamburgerMenuProps) {
  return (
    <button
      onClick={onClick}
      className="lg:hidden flex flex-col gap-[var(--spacing-xs)] p-[var(--spacing-s)]"
      aria-label="Toggle menu"
    >
      {[...Array(4)].map((_, index) => (
        <div
          key={index}
          className={`w-[var(--spacing-xl)] h-[2px] transition-colors duration-300 ${
            isScrolled
              ? "bg-[var(--color-content-primary)]"
              : "bg-[var(--color-content-primary-inverse)]"
          }`}
        />
      ))}
    </button>
  );
} 