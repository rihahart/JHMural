import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ButtonProps {
  variant?: 'primary' | 'primary-inverse' | 'secondary' | 'tertiary' | 'tertiary-mono' | 'tertiary-inverse';
  size?: 'small' | 'large';
  href?: string;
  target?: string; // ✅ add this
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
    inline-flex items-center justify-center
    transition-all duration-100
    font-[var(--font-weight-semibold)]
    rounded-[var(--radius-s)]
    ${fullWidth ? 'w-full' : ''}
    ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}
    transition transform duration-100 ease-in-out
    active:scale-[0.95]
  `;


  // Size classes
  const sizeClasses = {
    small: `
      px-[var(--spacing-s)] py-[var(--spacing-xs)]
      text-[var(--font-size-text-s)]
      leading-[var(--line-height-text-s)]
      rounded-[var(--radius-s)]
    `,
    large: `
      px-[var(--spacing-lg)] py-[var(--spacing-m)]
      text-[var(--font-size-text-lg)]
      leading-[var(--line-height-text-lg)]
      rounded-[var(--radius-m)]
    `,
  };

  // Variant classes
  const variantClasses = {
    primary: `
      bg-[var(--color-background-brand)]
      text-white
      hover:bg-[var(--color-background-brand-hover)]
      active:bg-[var(--color-background-brand-pressed)]
    `,
    'primary-inverse': `
      bg-[var(--color-background-primary)]
      text-[var(--color-content-brand)]
      hover:bg-[var(--color-background-hover)]
      active:text-[var(--color-content-primary)]
    `,
    secondary: `
      bg-[var(--color-background-primary)]
      text-[var(--color-content-brand)]
      border border-[var(--color-border-brand)]
      hover:bg-[var(--color-background-hover)]
      active:text-[var(--color-content-primary)]
    `,
    tertiary: `
      bg-[var(--color-background-primary)]
      text-[var(--color-content-secondary)]
      hover:bg-[var(--color-background-hover)]
      active:text-[var(--color-content-primary)]
    `,
    'tertiary-mono': `
      bg-[var(--color-background-primary)]
      text-[var(--color-content-primary)]
      hover:bg-[var(--color-background-hover)]
      active:text-[var(--color-content-secondary)]
    `,
    'tertiary-inverse': `
      bg-transparent
      text-[var(--color-content-primary-inverse)]
      hover:bg-[var(--color-white-50)]
      active:bg-[var(--color-black-50)]
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
        mr-[var(--spacing-xs)]
        ${variant === 'primary' ? 'brightness-0 invert' : ''}
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
        ${size === 'small' ? 'w-4 h-4' : 'w-6 h-6'}
        ml-[var(--spacing-xs)]
        ${variant === 'primary' ? 'brightness-0 invert' : ''}
      `}
    />
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
          {LeadingIcon}
          {children}
          {TrailingIcon}
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
      {LeadingIcon}
      {children}
      {TrailingIcon}
    </button>
  );
} 