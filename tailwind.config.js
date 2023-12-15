/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        smallTablet: { 'max': '600px' },
        // => @media (max-width: 600px) { ... }

        phone: { 'max': '768px' },
        phoneTab: { 'min': '768px', "max": "1280px" },
        // => @media (max-width: 350px) { ... }
      },
    },
  },
  plugins: [],
}
