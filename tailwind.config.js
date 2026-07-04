/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#07080a',
        'bg-elevated': '#0c0d12',
        'bg-hover': '#111318',
        accent: {
          DEFAULT: '#00ff88',
          dim: 'rgba(0,255,136,0.4)',
          glow: 'rgba(0,255,136,0.15)',
        },
        'accent-blue': '#00b8ff',
        'accent-purple': '#8b5cf6',
        primary: '#e8e8f0',
        secondary: '#9494a8',
        muted: '#5a5a70',
        danger: '#ff4466',
      },
      fontFamily: {
        heading: ['Syne', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
      },
      boxShadow: {
        sm: '0 1px 2px rgba(0,0,0,0.3)',
        md: '0 4px 16px rgba(0,0,0,0.4)',
        lg: '0 8px 32px rgba(0,0,0,0.5)',
        glow: '0 0 20px rgba(0,255,136,0.15)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        breathe: {
          '0%, 100%': { transform: 'translate(-50%, -50%) scale(1)', opacity: '0.6' },
          '50%': { transform: 'translate(-50%, -50%) scale(1.1)', opacity: '0.8' },
        },
        scanLine: {
          '0%': { transform: 'translateX(-100%) translateY(-50%)' },
          '50%': { transform: 'translateX(100%) translateY(-50%)' },
          '100%': { transform: 'translateX(-100%) translateY(-50%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        pulse: 'pulse 2s ease-in-out infinite',
        breathe: 'breathe 6s ease-in-out infinite',
        scanLine: 'scanLine 4s linear infinite',
        shimmer: 'shimmer 3s linear infinite',
      },
    },
  },
  plugins: [],
}
