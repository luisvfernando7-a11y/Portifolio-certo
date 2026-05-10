import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        navy:    '#0E1117',
        surface: '#161B27',
        border:  '#1E2A3A',
        borderHover: '#2A3A4A',
        primary: '#F5F5F5',
        muted:   '#A0A8B8',
        faint:   '#4A5568',
        accent:  '#64FFDA',
      },
      fontFamily: {
        sans:  ['Inter', 'system-ui', 'sans-serif'],
        mono:  ['JetBrains Mono', 'monospace'],
        space: ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
