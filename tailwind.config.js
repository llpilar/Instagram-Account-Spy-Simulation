export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      animation: {
        float: 'float 3s ease-in-out infinite',
        shimmer: 'shimmer 3s infinite',
      },
      boxShadow: {
        'glow': '0 0 15px rgba(122, 251, 156, 0.15)',
        'glow-lg': '0 0 30px rgba(122, 251, 156, 0.2)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      transitionTimingFunction: {
        'bounce-soft': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  plugins: [],
}