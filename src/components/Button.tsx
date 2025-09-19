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
      text-lg
      leading-[var(--line-height-text-lg)]
      rounded-none
    `,
    large: `
      px-[var(--spacing-lg)] py-[var(--spacing-lg)]
      text-xl
      leading-[var(--line-height-text-xl)]
      rounded-none
    `,
  };

  // Variant classes
  const variantClasses = {
    primary: `
      bg-[var(--color-background-brand)]
      text-white
      hover:bg-[var(--color-background-brand-hover)]
      hover:shadow-[0_8px_25px_rgba(25,120,216,0.3)]
      active:bg-[var(--color-background-brand-pressed)]
    `,
    'primary-inverse': `
      bg-[var(--color-background-primary)]
      text-[var(--color-content-brand)]
      hover:bg-[var(--color-background-hover)]
      hover:shadow-[0_4px_15px_rgba(0,0,0,0.1)]
      active:text-[var(--color-content-primary)]
    `,
    secondary: `
      bg-[var(--color-background-primary)]
      text-[var(--color-content-brand)]
      border border-[var(--color-border-brand)]
      hover:bg-[var(--color-background-hover)]
      hover:border-[var(--color-border-focus)]
      hover:shadow-[0_4px_15px_rgba(25,120,216,0.15)]
    `,
    tertiary: `
      bg-[var(--color-background-primary)]
      text-[var(--color-content-secondary)]
      hover:bg-[var(--color-background-hover)]
      hover:shadow-[0_2px_10px_rgba(0,0,0,0.08)]
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
        ${variant === 'primary' && trailingIcon !== '/flower.svg' && leadingIcon !== '/flower.svg' ? 'brightness-0 invert group-hover:scale-110' : 'group-hover:scale-110'}
        ${trailingIcon === '/flower.svg' || leadingIcon === '/flower.svg' ? 'group-hover:brightness-[1.2] group-hover:saturate-150' : ''}
      `}
    />
  );

  const TrailingIcon = trailingIcon && showTrailingIcon && (
    <Image
      src={trailingIcon}
      alt=""
      width={24}
      height={24}
      className={`
        ${size === 'small' ? 'w-4 h-4' : 'w-4 h-4'}
        ml-[var(--spacing-xs)]
        transition-all duration-200 ease-in-out
        ${variant === 'primary' && trailingIcon !== '/flower.svg' && leadingIcon !== '/flower.svg' ? 'brightness-0 invert group-hover:scale-110' : 'group-hover:scale-110'}
        ${trailingIcon === '/flower.svg' || leadingIcon === '/flower.svg' ? 'group-hover:brightness-[1.2] group-hover:saturate-150' : ''}
      `}
    />
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