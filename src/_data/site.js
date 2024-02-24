module.exports = {
  url: process.env.SITE_URL || "http://localhost:8080",
  title: "Hund 11ty",
  description: "A starter for Eleventy & WebC",
  isProduction: Boolean(process.env.PRODUCTION),
  language: "en",
  color: {
    theme: "#000",
    background: "#fff",
  },
  og: {
    type: "website",
    image: {
      src: "",
      alt: "",
      width: "1200",
      height: "600",
    },
  },
};
