import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          darker: '#001F3F',
          dark: '#0B2D60',
          mid: '#003366',
          panel: '#1A3A6B',
          studios: '#0A192F',
          arch: '#004aad',
          'arch-hover': '#003380',
          accent: '#007BFF',
          'accent-hover': '#0056b3',
          light: '#4FC3F7',
        },
        green: {
          cta: '#28a745',
          'cta-hover': '#218838',
        },
        neutral: {
          light: '#f4f4f4',
          footer: '#001F3F',
        },
        white: '#FFFFFF',
        text: {
          dark: '#1a1f2e',
          mid: '#444444',
          medium: '#5c6478',
          light: '#e0e0e0',
        },
      },
      fontFamily: {
        sans: ['var(--font-brand)', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      borderRadius: {
        brand: '6px',
      },
      maxWidth: {
        brand: '1200px',
      },
    },
  },
  plugins: [],
}
export default config
