/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0f0f10',
          soft: '#1a1a1c',
          muted: '#52525b',
        },
        paper: {
          DEFAULT: '#fafaf7',
          soft: '#f3f1ec',
        },
        accent: {
          DEFAULT: '#a8825a',
          soft: '#c9a983',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      fontSize: {
        'fluid-sm': 'clamp(0.875rem, 0.8rem + 0.3vw, 1rem)',
        'fluid-base': 'clamp(1rem, 0.9rem + 0.4vw, 1.125rem)',
        'fluid-lg': 'clamp(1.125rem, 1rem + 0.6vw, 1.375rem)',
        'fluid-xl': 'clamp(1.5rem, 1.2rem + 1vw, 2rem)',
        'fluid-2xl': 'clamp(2rem, 1.6rem + 1.6vw, 3rem)',
        'fluid-3xl': 'clamp(2.5rem, 2rem + 2.4vw, 4.5rem)',
      },
      maxWidth: {
        prose: '60ch',
      },
    },
  },
  plugins: [],
};
