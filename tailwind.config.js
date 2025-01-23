module.exports = {
    content: [
      "./*.html", // Indique où chercher les classes Tailwind dans ton HTML
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ["Inter", "sans-serif"],
        },
        colors: {
          primary: "rgb(100 21 255)", // Ta couleur personnalisée
          customPurple: "#290573",
          customBlue: "#5011cc",
          customGrey: "#243e63",
          customGray: "#7c8ba1",
        },
      },
    },
    plugins: [],
  };