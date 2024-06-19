// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // adjust according to your file structure
  ],
  theme: {
    extend: {
      boxShadow: {
        'neon': '0 0 10px rgba(0, 0, 255, 0.8), 0 0 20px rgba(0, 0, 255, 0.6), 0 0 30px rgba(0, 0, 255, 0.4), 0 0 40px rgba(0, 0, 255, 0.2)',
      },
      keyframes: {
        neon: {
          '0%, 100%': { boxShadow: '0 0 10px rgba(0, 0, 255, 0.8)' },
          '50%': { boxShadow: '0 0 20px rgba(0, 0, 255, 0.6)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        'neon-glow': 'neon 1.5s infinite alternate',
        'fadeIn': 'fadeIn 2s ease-in-out',
      },
    },
  },
  plugins: [],
};
