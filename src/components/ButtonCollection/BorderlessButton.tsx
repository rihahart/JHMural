import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ButtonProps {
  variant?: 'primary' |'secondary';
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

export default function BorderlessButton({
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
    rounded-none
    gap-[var(--spacing-xs)]
    ${fullWidth ? 'w-full' : ''}
    ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer hover:-translate-y-0.5'}
    transform
    active:scale-[0.95] active:translate-y-0
  `;

  // Size classes: large uses text-3xl, small uses text-lg
  const sizeClasses = {
    small: "mobile-text-xl-black",
    large: "web-text-2xl-black"
  };

  // Variant classes
  const variantClasses = {
    primary: `
      bg-none
      text-[var(--color-content-primary)]
    `,
    secondary: `
      bg-none
      text-[var(--color-content-brand)]
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
        ${variant === 'primary' ? 'brightness-0' : variant === 'secondary' ? 'brightness-0 saturate-100 hue-rotate-[200deg]' : ''}
      `}
      style={{ transform: 'translateY(0.5px)' }}
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
          transition-all duration-200 ease-in-out
        `}
        style={{ transform: 'translateY(2px)' }}
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
          transition-all duration-200 ease-in-out
          ${variant === 'primary' ? 'brightness-0' : variant === 'secondary' ? 'brightness-0 saturate-100 hue-rotate-[200deg]' : ''}
        `}
        style={{ transform: 'translateY(2px)' }}
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
          <span className="relative overflow-hidden">
            {children}
            <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[var(--color-content-${variant === 'primary' ? 'primary' : 'brand'})] transition-all duration-300 ease-in-out transform -translate-x-full group-hover:translate-x-0 group-active:translate-x-0`}></span>
          </span>
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
        <span className="relative overflow-hidden">
          {children}
          <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[var(--color-content-${variant === 'primary' ? 'primary' : 'brand'})] transition-all duration-300 ease-in-out transform -translate-x-full group-hover:translate-x-0 group-active:translate-x-0`}></span>
        </span>
        {TrailingIcon}
      </div>
    </button>
  );
}