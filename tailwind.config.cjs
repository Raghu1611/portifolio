/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Outfit', 'sans-serif'],
            },
            colors: {
                primary: "#007aff", // Electric Blue (Stripe/Vercel feel)
                accent: "#8b5cf6",  // Violet/Purple
                dark: "#0a0a0c",    // Sleek Dark background
                light: "#f8fafc",   // Crisp Light background
                'dark-surface': '#121215',
                'light-surface': '#ffffff',
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
            },
            boxShadow: {
                'glow': '0 0 20px rgba(0, 122, 255, 0.15)',
                'glow-purple': '0 0 20px rgba(139, 92, 246, 0.15)',
            }
        },
    },
    plugins: [],
}
