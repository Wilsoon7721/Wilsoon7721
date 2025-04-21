module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,html}'
  ],
  theme: {
    extend: {
      keyframes: {
        contentBriefText: {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        contentBriefImages: {
          '0%': { opacity: '0', transform: 'translateX(400px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        contentStackSlide: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(calc(-100% - 225px))' },
        },
        techCardFadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '0.85' },
        },
      },
      animation: {
        contentBriefText: 'contentBriefText 1s ease-in-out forwards',
        contentBriefImages: 'contentBriefImages 1s ease-in-out forwards',
        contentStackSlide: 'contentStackSlide 12s linear infinite',
        techCardFadeIn: 'techCardFadeIn 1s ease-in-out forwards',
      },
      colors: {
        'mint': '#c2fcb7',
      },
    },
  },
  plugins: [],
}
