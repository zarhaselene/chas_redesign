module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#011132",
        secondary: "#014CE5",
        button: "#011746",
      },
      keyframes: {
        slideInOut: {
          "0%, 100%": { transform: "translateX(100%)", opacity: "0" },
          "10%, 30%": { transform: "translateX(0)", opacity: "1" },
          "50%": { transform: "translateX(-100%)", opacity: "0" },
        },
      },
      animation: {
        "slide-in-out": "slideInOut 15s ease infinite",
      },
      fontFamily: {
        sans: ["Mona Sans", "sans-serif"],
      },
      boxShadow: {
        "blue-light": " 0px 0px 25px -10px rgba(10,64,173,1)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".nav-item": {
          "@apply hover:text-secondary transition-all duration-300": {},
        },
      });
    },
  ],
};
