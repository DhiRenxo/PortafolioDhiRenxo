/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00ff88", // Verde Neón
        secondary: "#ffffff", // Blanco
        background: "#0a0a0a", // Negro
        card: "#111111", // Fondo de tarjetas
        text: "#dddddd", // Gris claro
        hover: "#00cc77", // Verde Hover
      },
    },
  },
  plugins: [],
}

