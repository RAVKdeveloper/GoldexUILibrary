/** @type {import('tailwindcss').Config} */

// import * as path from 'path'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
    // path.join(path.dirname(path.resolve('goldex-ui-library')), '**/*.{js,ts,jsx,tsx}'),
  ],
  darkMode: 'class',
  theme: {
    extend: {
      spacing: {
        4.5: '1.125rem',
      },
      colors: {
        'primary-btn-bg': '#73E5CF',
        'primary-btn-text': '#1F1F24',
        'primary-btn-bg-hover': '#52CCB5',
        'primary-btn-bg-active': '#36B29B',
        'secondary-btn-bg': 'rgba(255, 255, 255, 0.04)',
        'secondary-btn-text': '#fff',
        'secondary-btn-bg-hover': 'rgba(255, 255, 255, 0.07)',
        'secondary-border-color': 'rgba(255, 255, 255, 0.04)'
      },
      borderWidth: {
        3: '3px'
      },
      transitionDuration: {
        DEFAULT: '300ms'
      }
    },
  },
  plugins: [],
}

