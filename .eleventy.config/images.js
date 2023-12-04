const { eleventyImagePlugin } = require("@11ty/eleventy-img");

module.exports = function (config) {
  config.addPlugin(eleventyImagePlugin, {
    formats: ["webp", "jpeg"],
    urlPath: "/img/",

    defaultAttributes: {
      loading: "lazy",
      decoding: "async",
    },
  });
};
