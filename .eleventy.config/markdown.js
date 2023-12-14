const markdownIt = require("markdown-it");
const markdownItAttrs = require("markdown-it-attrs");
const markdownItEleventyImg = require("markdown-it-eleventy-img");

module.exports = function (config) {
  config.setLibrary(
    "md",
    markdownIt({
      html: true,
      breaks: true,
      linkify: true,
    })
      .use(markdownItAttrs)
      .use(markdownItEleventyImg, {
        imgOptions: {
          widths: [600, 450, 300],
          urlPath: "/img/",
          outputDir: "dist/img",
          formats: ["avif", "webp", "jpeg"],
        },
        globalAttributes: {
          class: "image markdown-image",
          decoding: "async",
          sizes: "(max-width: 48rem) 300px, (max-width: 62rem) 450px, 600px",
        },
      })
  );
};
