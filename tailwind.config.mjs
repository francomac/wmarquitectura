/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#111111',
          soft: '#1c1c1d',
          muted: '#6b6b6f',
          faint: '#a1a1a4',
        },
        paper: {
          DEFAULT: '#f7f5f0',
          soft: '#ede9e0',
          warm: '#e6dfd1',
        },
        accent: {
          DEFAULT: '#8a6b48',
          soft: '#b89576',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      fontSize: {
        'fluid-xs': 'clamp(0.7rem, 0.65rem + 0.2vw, 0.78rem)',
        'fluid-sm': 'clamp(0.875rem, 0.8rem + 0.3vw, 1rem)',
        'fluid-base': 'clamp(1rem, 0.92rem + 0.4vw, 1.18rem)',
        'fluid-lg': 'clamp(1.2rem, 1.05rem + 0.7vw, 1.55rem)',
        'fluid-xl': 'clamp(1.6rem, 1.3rem + 1.1vw, 2.2rem)',
        'fluid-2xl': 'clamp(2.1rem, 1.65rem + 1.8vw, 3.4rem)',
        'fluid-3xl': 'clamp(2.8rem, 2.1rem + 3.2vw, 5.6rem)',
      },
      letterSpacing: {
        tightest: '-0.045em',
        eyebrow: '0.28em',
      },
      maxWidth: {
        prose: '60ch',
      },
    },
  },
  plugins: [],
};
