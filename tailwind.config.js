module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  themes: [
    {
      mytheme: {
        primary: "#F0542D",

        secondary: "#313131",

        accent: "#313131",
      },
    },
  ],
  plugins: [require("daisyui")],
};
