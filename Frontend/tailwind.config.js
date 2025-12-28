/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./js/*.index.js"],
  // content: ["./*.html"],
  theme: {
    screens:{
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
      semilarge: "1280",
  },
    extend: {
      colors: {
        primary: '#ff6363',
        secondary: {
          100: '#E2E2D5',
          100: '#888883',
        },
        brightRed: "hsl(12, 88%, 59%)",
        brightRedLight: "hsl(12, 88%, 69%)",
        brightRedSupLight: "hsl(12, 88%, 69%)",
        darkBlue: "hsl(228, 39% 23%)",
        darkGrayishBlue: "hsl(227, 12% 61%)",
        veryPaleRed:"hsl(13, 39% 23%)",
        veryDarkBlue: "hsl(228, 39%, 2%)",
        verylightGray: "hsl(0, 0% 98%)",
      },

      fontFamily: {
        san: [
          'system-ui',
          '-apple-system',
          'BlinkMacsystemfont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          ':"Noto Sans"',
          'Sans-serif',
          '"Apple Color Emoji"',
          'Segoe UI Emoji',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        mono: ['Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'Monospace'],

        fontFamily: {
          body: ['nunito'],
        },
      },
      
    },
  },
  plugins: [],
}

