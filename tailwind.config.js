/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: '#f5f4ed',
        ivory: '#faf9f5',
        white: '#ffffff',
        'warm-sand': '#e8e6dc',
        'border-cream': '#f0eee6',
        'border-warm': '#e8e6dc',
        'dark-surface': '#30302e',
        'near-black': '#141413',
        'charcoal-warm': '#4d4c48',
        'olive-gray': '#5e5d59',
        'stone-gray': '#87867f',
        'warm-silver': '#b0aea5',
        terracotta: '#c96442',
        coral: '#d97757',
        'ring-warm': '#d1cfc5',
      },
      fontFamily: {
        serif: ['Lora', 'Georgia', 'serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
