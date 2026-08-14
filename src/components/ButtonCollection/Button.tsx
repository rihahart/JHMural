import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ButtonProps {
  variant?: 'primary' | 'primary-inverse' | 'primary-on-brand' | 'secondary' | 'tertiary';
  size?: 'small' | 'large';
  href?: string;
  target?: string;
  rel?: string;
  disabled?: boolean;
  className?: string;
  leadingIcon?: string;
  trailingIcon?: string | React.ReactNode;
  showLeadingIcon?: boolean;
  showTrailingIcon?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
}

// Size classes: large uses text-3xl, small uses text-lg
const sizeClasses = {
  small: `
    px-[var(--spacing-m)] py-[var(--spacing-m)]
    mobile-text-lg-semibold
   
  `,
  large: `
    px-[var(--spacing-lg)] py-[var(--spacing-m)]
    web-text-lg-semibold
  `,
};

export default function Button({
  variant = 'primary',
  size = 'large',
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
}: ButtonProps) {
  // Base classes
  const baseClasses = `
    group inline-flex items-center justify-center
    transition-all duration-200 ease-in-out
    font-[var(--font-weight-semibold)]
    rounded-none
    gap-[var(--spacing-xs)]
    ${fullWidth ? 'w-full' : ''}
    ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}
    transform
    active:translate-y-0
  `;

  // Variant classes
  const variantClasses = {
    primary: `
      bg-[var(--color-background-brand)]
      text-white
      hover:bg-[var(--color-background-brand-hover)]
      active:bg-[var(--color-background-brand-hover)]
    `,
    'primary-inverse': `
      bg-[var(--color-background-inverse)]
      text-[var(--color-content-primary-inverse)]
      hover:bg-[var(--color-background-inverse-hover)]
      active:bg-[var(--color-background-inverse-hover)]
    `,
    'primary-on-brand': `
      bg-white
      text-[var(--color-content-primary)]
      hover:bg-[var(--color-content-primary)]
      hover:text-[var(--color-content-primary-inverse)]
      active:bg-[var(--color-content-primary)]
      active:text-[var(--color-content-primary-inverse)]
    `,
    secondary: `
      bg-[var(--color-background-primary)]
      text-[var(--color-content-primary)]
      border border-[var(--color-content-primary)]
      !font-[var(--font-weight-bold)]
      hover:bg-[var(--color-background-inverse-hover)]
       hover:text-[var(--color-content-primary-inverse)]
      active:bg-[var(--color-background-inverse-hover)]
      active:text-[var(--color-content-primary-inverse)]
    `,
    tertiary: `
      bg-[var(--color-background-primary)]
      text-[var(--color-content-secondary)]
      hover:bg-[var(--color-background-hover)]
      active:bg-[var(--color-background-hover)]
    `,
  };

  // Combine all classes
  const buttonClasses = `
    ${baseClasses}
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${className}
  `.trim();

  // Icon elements
  const LeadingIcon = leadingIcon && showLeadingIcon && (
    <Image
      src={leadingIcon}
      alt=""
      width={24}
      height={24}
      className={`
        ${size === 'small' ? 'w-4 h-4' : 'w-6 h-6'}
        mr-[var(--spacing-s)]
        transition-all duration-200 ease-in-out
        align-middle
        ${size === 'large' ? 'translate-y-[1px]' : ''}
        ${variant === 'primary' || variant === 'primary-inverse' ? 'brightness-0 invert' : variant === 'primary-on-brand' ? 'brightness-0 group-hover:invert group-active:invert' : variant === 'secondary' ? 'brightness-0' : ''}
      `}
    />
  );

  const TrailingIcon = trailingIcon && showTrailingIcon && (
    typeof trailingIcon === 'string' ? (
      variant === 'secondary' ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className={`
            ${size === 'small' ? 'w-4 h-4' : 'w-6 h-6'}
            ml-[var(--spacing-xs)]
              ${size === 'large' ? 'translate-y-[2px]' : 'translate-y-[1px]'}
            transition-all duration-200 ease-in-out
          `}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
          />
        </svg>
      ) : (
        <Image
          src={trailingIcon}
          alt=""
          width={24}
          height={24}
          className={`
            ${size === 'small' ? 'w-4 h-4' : 'w-4 h-4'}
            ml-[var(--spacing-xs)]
              ${size === 'large' ? 'translate-y-[1.5px]' : 'translate-y-[.5px]'}
            transition-all duration-200 ease-in-out
            ${variant === 'primary' || variant === 'primary-inverse' ? 'brightness-0 invert' : variant === 'primary-on-brand' ? 'brightness-0 group-hover:invert group-active:invert' : ''}
          `}
        />
      )
    ) : (
      <span className={`ml-[var(--spacing-xs)] ${size === 'large' ? 'translate-y-[1.5px]' : 'translate-y-[.5px]'}`}>
        {trailingIcon}
      </span>
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
      >
        <div className="flex justify-center items-center gap-[var(--spacing-xs)]">
          {LeadingIcon}
          {children}
          {TrailingIcon}
        </div>
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
      <div className="flex justify-center items-center gap-[var(--spacing-xs)]">
        {LeadingIcon}
        {children}
        {TrailingIcon}
      </div>
    </button>
  );
}