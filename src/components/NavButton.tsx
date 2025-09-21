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
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onKeyDown?: (e: React.KeyboardEvent) => void;
  type?: 'button' | 'submit' | 'reset';
  isActive?: boolean;
  isInitialLoad?: boolean;
  role?: string;
  tabIndex?: number;
  'aria-haspopup'?: boolean | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog';
  'aria-expanded'?: boolean;
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
  onMouseEnter,
  onMouseLeave,
  onKeyDown,
  type = 'button',
  isActive = false,
  isInitialLoad = false,
  role,
  tabIndex,
  'aria-haspopup': ariaHaspopup,
  'aria-expanded': ariaExpanded,
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
      py-[var(--spacing-lg)] px-[var(--spacing-m)]
      hover:bg-[var(--color-background-hover)]
      active:bg-[var(--color-background-hover)]

    `,
    secondary: `
      text-[var(--color-content-primary)]
      font-[var(--font-weight-semibold)]
      text-2xl
      flex
      w-[360px]
      py-[var(--spacing-m)] px-[var(--spacing-s)]
      hover:text-[var(--color-content-brand)]
      active:text-[var(--color-content-brand)]
    `,
    tertiary: `
      text-[var(--color-content-primary)]
      font-[var(--font-weight-semibold)]
      text-2xl
      inline-flex
      px-[var(--spacing-m)]
      flex-col
      justify-center
      items-center
      hover:text-[var(--color-content-brand)]
    `,
  };

  // Active state classes for navigation
  const activeClasses = isActive ? (variant === 'secondary' ? `
    active:text-[var(--color-content-brand)]
  ` : variant === 'primary' ? `
    text-[var(--color-content-brand)]
    bg-[var(--color-background-hover)]
  ` : `
    text-[var(--color-content-brand)]
  `) : '';

  // Initial load classes (for homepage hero state) - for primary and tertiary variants
  const initialLoadClasses = isInitialLoad && (variant === 'primary' || variant === 'tertiary') ? `
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
    variant === 'tertiary' ? (
      <Image
        src={trailingIcon}
        alt=""
        width={12}
        height={8.68}
        className={`
          w-3 h-[0.5425rem]
          flex-shrink-0
          mt-[var(--spacing-xs)]
          transition-all duration-300 ease-in-out
          ${isActive ? 'opacity-100' : 'opacity-0'}
        `}
        style={{ 
          filter: 'brightness(0) saturate(100%) invert(20%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%)'
        }}
      />
    ) : (
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
    )
  );

  // Render as link if href is provided
  if (href) {
    return (
      <Link
        href={href}
        className={buttonClasses}
        target={target}
        rel={rel}
        onClick={!disabled ? onClick : undefined}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onKeyDown={onKeyDown}
        role={role}
        tabIndex={tabIndex}
        aria-haspopup={ariaHaspopup}
        aria-expanded={ariaExpanded}
      >
        {variant === 'tertiary' ? (
          <div className="flex flex-col items-center">
            <div className="text-center">
              {children}
            </div>
            {TrailingIcon}
          </div>
        ) : (
          <div className="flex items-center w-full">
            {LeadingIcon}
            <div className="flex-1 text-left">
              {children}
            </div>
            {TrailingIcon}
          </div>
        )}
      </Link>
    );
  }

  // Render as button
  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={!disabled ? onClick : undefined}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onKeyDown={onKeyDown}
      disabled={disabled}
      role={role}
      tabIndex={tabIndex}
      aria-haspopup={ariaHaspopup}
      aria-expanded={ariaExpanded}
    >
      {variant === 'tertiary' ? (
        <div className="flex flex-col items-center">
          <div className="text-center">
            {children}
          </div>
          {TrailingIcon}
        </div>
      ) : (
        <div className="flex items-center w-full">
          {LeadingIcon}
          <div className="flex-1 text-left">
            {children}
          </div>
          {TrailingIcon}
        </div>
      )}
    </button>
  );
}
