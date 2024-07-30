/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
				'primary': '#0543ba',
				'secondary': '#fffff',
				'border': '#b4b3af',
				'bg': '#010101',
			},
      fontFamily: {
				'orbitron': ['Orbitron', 'sans-serif'],
			},
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

