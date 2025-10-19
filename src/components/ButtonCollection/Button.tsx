import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ButtonProps {
  variant?: 'primary' | 'primary-inverse' | 'secondary' | 'tertiary';
  size?: 'small' | 'large';
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
}

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
    ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer hover:shadow-lg hover:-translate-y-0.5'}
    transform
    active:scale-[0.95] active:translate-y-0
  `;

  // Size classes: large uses text-3xl, small uses text-lg
  const sizeClasses = {
    small: `
      px-[var(--spacing-m)] py-[var(--spacing-m)]
      text-lg-semibold
      leading-[var(--line-height-text-lg)]
      rounded-sm
    `,
    large: `
      px-[var(--spacing-lg)] py-[var(--spacing-lg)]
      text-3xl-semibold
      leading-[var(--line-height-text-xl)]
      rounded-sm
    `,
  };

  // Variant classes
  const variantClasses = {
    primary: `
      bg-[var(--color-background-brand)]
      text-white
      hover:bg-[var(--color-background-brand-hover)]
      ${size === 'large' ? 'hover:shadow-[0_8px_25px_rgba(25,120,216,0.3)]' : 'hover:shadow-[0_4px_15px_rgba(25,120,216,0.2)]'}
      active:bg-[var(--color-background-brand-pressed)]
    `,
    'primary-inverse': `
      bg-[var(--color-background-inverse)]
      text-[var(--color-content-primary-inverse)]
      hover:bg-[var(--color-background-inverse-hover)]
      ${size === 'large' ? 'hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)]' : 'hover:shadow-[0_4px_15px_rgba(0,0,0,0.1)]'}
      active:bg-[var(--color-background-inverse-pressed)]
    `,
    secondary: `
      bg-[var(--color-background-primary)]
      text-[var(--color-content-primary)]
      border border-[var(--color-border-secondary)]
      hover:bg-[var(--color-background-hover)]
      ${size === 'large' ? 'hover:shadow-[0_8px_25px_rgba(25,120,216,0.2)]' : 'hover:shadow-[0_4px_15px_rgba(25,120,216,0.15)]'}
    `,
    tertiary: `
      bg-[var(--color-background-primary)]
      text-[var(--color-content-secondary)]
      hover:bg-[var(--color-background-hover)]
      ${size === 'large' ? 'hover:shadow-[0_4px_15px_rgba(0,0,0,0.12)]' : 'hover:shadow-[0_2px_10px_rgba(0,0,0,0.08)]'}
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
        ${variant === 'primary' || variant === 'primary-inverse' ? 'brightness-0 invert group-hover:scale-110' : variant === 'secondary' ? 'brightness-0 group-hover:scale-110' : 'group-hover:scale-110'}
        ${trailingIcon === '/flower.svg' || leadingIcon === '/flower.svg' ? 'group-hover:scale-110' : ''}
      `}
    />
  );

  const TrailingIcon = trailingIcon && showTrailingIcon && (
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
            translate-y-[1px]
          transition-all duration-200 ease-in-out
          group-hover:scale-110
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
            translate-y-[.5px]
          transition-all duration-200 ease-in-out
          ${variant === 'primary' || variant === 'primary-inverse' ? 'brightness-0 invert group-hover:scale-110' : 'group-hover:scale-110'}
          ${trailingIcon === '/flower.svg' || leadingIcon === '/flower.svg' ? 'group-hover:scale-110' : ''}
        `}
      />
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