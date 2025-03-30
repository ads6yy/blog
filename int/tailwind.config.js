const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  presets: [require("tailwindcss/defaultConfig")],
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx}", "./src/pages/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
		extend: {
			fontFamily: {
				sans: ["RobotoMono", "sans-serif", defaultTheme.fontFamily.sans],
			},
			colors: {
				"adsy-dark-blue": "#0D2444",
				"adsy-tottenham-blue": "#132257",
				"adsy-blue": "#9BCBFF",
				"adsy-light-blue": "#CDE5FF",
				"white": "#FFFFFF",
			},
			container: {
				center: true,
				padding: {
					DEFAULT: "4rem",
					sm: "3rem",
					md: "4rem",
					lg: "5rem",
					xl: "6rem",
					"2xl": "2rem",
				},
				maxWidth: {
					sm: "640px",
					md: "768px",
					lg: "1024px",
					xl: "1280px",
					"2xl": "1440px",
				},
				screens: {
					sm: "640px",
					md: "768px",
					lg: "1024px",
					xl: "1280px",
					"2xl": "1440px",
				},
			},
			aspectRatio: {
				'16/9': '16/9',
			},
		},
  },
  corePlugins: {
    preflight: true,
    aspectRatio: true,
  },
	plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio"), require("@tailwindcss/container-queries")],
}
