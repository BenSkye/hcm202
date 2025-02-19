import type { Config } from "tailwindcss";
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
   content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/contexts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/views/**/*.{js,ts,jsx,tsx,mdx}',
    './src/libs/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/antd/dist/antd.css',
  ],
  theme: {
    extend: {
      fontFamily: {
        'noto-sans': ['var(--font-noto-sans-kr)', ...defaultTheme.fontFamily.sans],
      },

      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',

        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        'secondary-dark': 'var(--secondary-dark: #cc9900 )', 
        'primary-dark': 'var(--primary-dark: #9a2424 )', 
        error: 'var(--error)',

        salmon: 'var(--salmon)',
        'sky-blue': 'var(--sky-blue)',
        'ocean-blue': 'var(--ocean-blue)',
        'electric-blue': 'var(--electric-blue)',
        'sub-gray': 'var(--sub-gray)',
        'aqua-blue': 'var(--aqua-blue)',

        gray: 'var(--gray)',
        silver: 'var(--silver)',
        pink: 'var(--pink)',

        'light-red': 'var(--light-red)',
        'dark-silver': 'var(--dark-silver)',
      },

      boxShadow: {
        section: 'var(--shadow-section)',
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
      },
    },
  },
} satisfies Config;
