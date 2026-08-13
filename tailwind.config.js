module.exports = {
  content: ["./src/**/*.{astro,html,js,ts}"],
  darkMode: "class",
  theme: {
    screens: {
      xs: "320px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1023px",
      xxl: "1440px",
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        black: "#3A4245",
        pri_color: "#E9828D",
        sec_color: "#649D8D",
        thi_color: "#92C5B6",
        dark_pri: "#E36370",
        hover_btn: "#F29882",
        dark_white: "#C5BDBB",
      },
      boxShadow: {
        "3xl": "0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)",
      },
    },
  },
  plugins: [],
};
