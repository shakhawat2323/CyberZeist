// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        ripple: {
          "0%": {
            transform: "scale(1)",
            boxShadow: "0px 10px 10px -0px rgba(0,0,0,0.3)",
          },
          "50%": {
            transform: "scale(1.3)",
            boxShadow: "0px 30px 20px -0px rgba(0,0,0,0.3)",
          },
          "100%": {
            transform: "scale(1)",
            boxShadow: "0px 10px 10px -0px rgba(0,0,0,0.3)",
          },
        },
        "logo-color": {
          "0%, 100%": { fill: "gray" },
          "50%": { fill: "white" },
        },
      },
      animation: {
        ripple: "ripple 2s infinite ease-in-out",
        "logo-color": "logo-color 2s infinite ease-in-out",
      },
    },
  },
  plugins: [],
};
