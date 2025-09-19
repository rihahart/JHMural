import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface NavButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary';
  href?: string;
  target?: string;
  rel?: string;
  disabled?: boolean;
  className?: string;
  leadingIcon?: string;
  trailingIcon?: string;
  showLeadingIcon?: boolean;
  showTrailingIcon?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
  isActive?: boolean;
  isInitialLoad?: boolean;
}

export default function NavButton({
  variant = 'primary',
  href,
  target,
  rel,
  disabled = false,
  className = '',
  leadingIcon,
  trailingIcon,
  showLeadingIcon = true,
  showTrailingIcon = true,
  children,
  onClick,
  type = 'button',
  fullWidth = false,
  isActive = false,
  isInitialLoad = false,
}: NavButtonProps) {
  // Base classes - using exact same pattern as Button component
  const baseClasses = `
   
    rounded-none
   
   
  `;

  // Fixed size classes - using large size from Button component
  const sizeClasses = `
    rounded-none
  `;

  // Variant classes - using exact same pattern as Button component
  const variantClasses = {
    primary: `
      text-[var(--color-content-primary)]
      font-[var(--font-weight-semibold)]
      text-3xl
      flex
      w-[360px]
      py-[var(--spacing-m)] px-[var(--spacing-s)]
      hover:bg-[var(--color-background-hover)]
      active:bg-[var(--color-background-hover)]
    `,
    secondary: `
      text-[var(--color-content-primary)]
      font-[var(--font-weight-regular)]
      text-2xl
      flex
      w-[360px]
      py-[var(--spacing-m)] px-[var(--spacing-s)]
      hover:text-[var(--color-content-brand)]
      active:text-[var(--color-content-brand-pressed)]
    `,
    tertiary: `
      bg-[var(--color-background-primary)]
      text-[var(--color-content-secondary)]
      hover:bg-[var(--color-background-hover)]
      hover:shadow-[0_2px_10px_rgba(0,0,0,0.08)]
    `,
  };

  // Active state classes for navigation
  const activeClasses = isActive ? `
    text-[var(--color-brand-600)]
    ${variant === 'tertiary' ? 'bg-[var(--color-background-hover)]' : ''}
  ` : '';

  // Initial load classes (for homepage hero state)
  const initialLoadClasses = isInitialLoad ? `
    text-white
    hover:text-white
  ` : '';

  // Combine all classes
  const buttonClasses = `
    ${baseClasses}
    ${sizeClasses}
    ${variantClasses[variant]}
    ${activeClasses}
    ${initialLoadClasses}
    ${className}
  `.trim();

  // Icon elements - using exact same pattern as Button component
  const LeadingIcon = leadingIcon && showLeadingIcon && (
    <Image
      src={leadingIcon}
      alt=""
      width={24}
      height={24}
      className={`
        w-6 h-6
        mr-[var(--spacing-s)]
        transition-all duration-200 ease-in-out
        align-middle
        ${variant === 'primary' && trailingIcon !== '/flower.svg' && leadingIcon !== '/flower.svg' ? 'brightness-0 invert group-hover:scale-110' : 'group-hover:scale-110'}
        ${trailingIcon === '/flower.svg' || leadingIcon === '/flower.svg' ? 'group-hover:brightness-[1.2] group-hover:saturate-150' : ''}
      `}
    />
  );

  const TrailingIcon = trailingIcon && showTrailingIcon && (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={`
        w-6 h-6
        ml-[var(--spacing-xs)]
        transition-all duration-300 ease-in-out
        group-hover:scale-110
        ${isActive ? 'rotate-90' : 'rotate-0'}
      `}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
        className="transition-all duration-300 ease-in-out"
      />
    </svg>
  );

  // Render as link if href is provided
  if (href) {
    return (
      <Link href={href} passHref legacyBehavior>
        <a
          className={buttonClasses}
          target={target}
          rel={rel}
          onClick={!disabled ? onClick : undefined}
        >
          <div className="flex items-center w-full">
            {LeadingIcon}
            <div className="flex-1 text-left">
              {children}
            </div>
            {TrailingIcon}
          </div>
        </a>
      </Link>
    );
  }

  // Render as button
  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
    >
      <div className="flex items-center w-full">
        {LeadingIcon}
        <div className="flex-1 text-left">
          {children}
        </div>
        {TrailingIcon}
      </div>
    </button>
  );
}
