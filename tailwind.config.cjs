/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            colors: {
                primary: "#007aff", // Apple Blue
                dark: "#1d1d1f", // Apple Dark Gray
                light: "#f5f5f7", // Apple Light Gray
                'dark-surface': '#121212',
            }
        },
    },
    plugins: [],
}
