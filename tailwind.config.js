/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#0f172a',
        'secondary-dark': '#1e293b',
        'accent-green': '#14b8a6',
        'gray-300': '#e5e7eb',
        'gray-500': '#6b7280',
        'red-500': '#ff605c',
        'yellow-500': '#ffbd44',
        'green-500': '#00ca4e',
      },
      borderWidth: {
        '1' : '1px'
      },
      backdropBlur: {
        sm: '4px',
      },
      transform: ['hover', 'focus'],
    },
  },
  plugins: [],
};
