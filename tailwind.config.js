/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "slide-fade-in": "slideFadeIn 0.5s ease-in-out forwards",
      },
      keyframes: {
        slideFadeIn: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        'contact-gradient': 'linear-gradient(to right, #31BF5A, #004A62)',
      },
      
    },
  },
  plugins: [],
}