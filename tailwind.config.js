/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'menu-in': {
          '0%': { opacity: '0', transform: 'translateY(8px) scale(0.98)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        'menu-out': {
          '0%': { opacity: '1', transform: 'translateY(0) scale(1)' },
          '100%': { opacity: '0', transform: 'translateY(8px) scale(0.98)' },
        },
        'down-in': {
          '0%': { opacity: '0', transform: 'translateY(-12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'down-out': {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(-12px)' },
        },
      },
      animation: {
        'menu-in': 'menu-in 200ms cubic-bezier(.22,.61,.36,1) forwards',
        'menu-out': 'menu-out 160ms cubic-bezier(.4,0,.2,1) forwards',
        'down-in': 'down-in 220ms cubic-bezier(.22,.61,.36,1) forwards',
        'down-out': 'down-out 160ms cubic-bezier(.4,0,.2,1) forwards',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true, // Enable Tailwind's base styles
  }
}; 