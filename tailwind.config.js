/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "purple-color": {
          55: "#4A2CED",
          60: "#5E43EF",
          70: "#8672F3",
          80: "#AEA1F7  ",
          90: "#D6D0FB",
          95: "#EAE7FD",
          97: "#F3F1FE",
          99: "#FBFAFF",
        },
        "dark-color": {
          3: "#070708",
          6: "#0E0E10",
          8: "#131316",
          12: "#1C1C21  ",
          15: "#232329",
          20: "#2F2F37",
          25: "#3B3B45",
          30: "#474752",
        },
        "grey-color": {
          40: "#62646C",
          50: "#797C86",
          70: "#AFB0B6",
          80: "#CACACE  ",
          90: "#E4E4E6",
          95: "#F2F2F3",
          97: "#F7F7F8",
          99: "#FCFCFD",
        },
        "star-color": "#FFCE22"
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [],
}