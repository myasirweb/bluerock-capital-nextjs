/** @type {import('tailwindcss').Config} */


// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // aapke custom colors
        'navy-deep': '#0B132B',
        'navy-medium': '#1C2541',
        'blue-primary': '#0062a4',
        'blue-bright': '#00a6e3',
        'blue-glow': '#5bc0be',
        'surface-primary': '#1F2937',
        'surface-secondary': '#374151',
        'surface-elevated': '#4B5563',
        'text-primary': '#F9FAFB',
        'text-secondary': '#9CA3AF',
        'text-accent': '#5bc0be',
        'text-muted': '#6B7280',
      },
      boxShadow: {
        'elegant': '0 4px 6px rgba(0,0,0,0.1)',
        'glow': '0 0 15px rgba(0,166,227,0.5)',
      },
      animation: {
        glow: 'pulse 3s infinite',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: 0.7 },
          '50%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}
