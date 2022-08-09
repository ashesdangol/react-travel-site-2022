/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}","./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        libre:["'Libre Baskerville'", "serif"],
        raleWay:["Raleway", "sans-serif"],
        moonBold: ["moon-bold"],
        moonRegular: ["moon-regular"],
        arvo: ['Arvo', "serif"],
        lato: ['Lato', 'sans-serif'],
      }
    },
    colors:{
      "primary": {
        "50": "#eef2ff",
        "100": "#e0e7ff",
        "200": "#c7d2fe",
        "300": "#a5b4fc",
        "400": "#818cf8",
        "500": "#6366f1",
        "600": "#4f46e5",
        "700": "#4338ca",
        "800": "#3730a3",
        "900": "#312e81"
      },
      "secondary": {
        "50": "#fff1f2",
        "100": "#ffe4e6",
        "200": "#fecdd3",
        "300": "#fda4af",
        "400": "#fb7185",
        "500": "#f43f5e",
        "600": "#e11d48",
        "700": "#be123c",
        "800": "#9f1239",
        "900": "#881337"
      }
      
    }
    
  },
  plugins: [require('flowbite/plugin')
  ],
}
