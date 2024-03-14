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
        0.25: '1px'
      },
      colors: {
        'primary-btn-bg': '#73E5CF',
        'primary-btn-text': '#1F1F24',
        'primary-btn-bg-hover': '#52CCB5',
        'primary-btn-bg-active': '#36B29B',
        'secondary-btn-bg': 'rgba(255, 255, 255, 0.04)',
        'secondary-btn-text': '#fff',
        'secondary-btn-bg-hover': 'rgba(255, 255, 255, 0.07)',
        'secondary-border-color': 'rgba(255, 255, 255, 0.04)',
        'critical-bg': '#F04438',
        'critical-bg-active': '#BD352C',
        'critical-bg-hover': '#D63D32',
        'avatar-green': '#A8F1E3',
        'avatar-lightPurple': '#BE9DF1',
        'avatar-yellow': '#F29C37',
        'avatar-blue': '#3782F2',
        'avatar-purple': '#8937F2',
        'avatar-pink': '#F94FB5',
        'text-white': '#ffffff',
        'transperant-white': 'rgba(255, 255, 255, 0.04)',
        'black-text': '#1F1F24',
        'text-success': '#17B26A',
        'bg-succes': 'rgba(23, 178, 106, 0.14)',
        'text-caution': '#F79009',
        'bg-caution': 'rgba(247, 144, 9, 0.14)',
        'text-critical': '#F04438',
        'bg-critical': 'rgba(239, 68, 68, 0.15)',
        'bg-accent': '#73E5CF'
      },
      borderWidth: {
        3: '3px'
      },
      transitionDuration: {
        DEFAULT: '300ms'
      },
      borderRadius: {
        'circle': '50%'
      },
      width: {
        18: '4.5rem',
        55: '13.5rem',
        67: '16.75rem',
        73: '18.5rem'
      },
      height: {
        18: '4.5rem'
      },
      boxShadow: {
        'input': '0px 0px 1px 2px rgba(255,255,255,0.14);'
      }
    },
  },
  plugins: [],
}

