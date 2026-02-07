import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Backgrounds
        'bg-primary': '#FAFAFA',
        'bg-secondary': '#F5F5F5',
        'bg-card': '#FFFFFF',

        // Text
        'text-primary': '#0A0A0A',
        'text-secondary': '#737373',
        'text-muted': '#A3A3A3',

        // Accents
        'accent-primary': '#171717',
        'accent-hover': '#404040',
        'accent-light': '#E5E5E5',
      },
      fontFamily: {
        mono: ['var(--font-geist-mono)', 'JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'pixel': '0 -2px 0 0 #171717, 2px 0 0 0 #171717, 0 2px 0 0 #171717, -2px 0 0 0 #171717',
        'pixel-sm': '0 -1px 0 0 #171717, 1px 0 0 0 #171717, 0 1px 0 0 #171717, -1px 0 0 0 #171717',
        'pixel-hover': '0 -2px 0 0 #404040, 2px 0 0 0 #404040, 0 2px 0 0 #404040, -2px 0 0 0 #404040',
        'pixel-glow': '0 -2px 0 0 #171717, 2px 0 0 0 #171717, 0 2px 0 0 #171717, -2px 0 0 0 #171717, 0 0 20px rgba(0,0,0,0.1)',
      },
      animation: {
        'pixel-blink': 'blink 1s step-end infinite',
        'float': 'float 3s ease-in-out infinite',
        'slide-down': 'slideDown 0.5s ease-out',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
