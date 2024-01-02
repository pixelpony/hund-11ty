module.exports = (config) => {
  config.addPlugin(require("./.eleventy.config/collections"));
  config.addPlugin(require("./.eleventy.config/webc"));
  config.addPlugin(require("./.eleventy.config/markdown"));
  config.addPlugin(require("./.eleventy.config/styles"));
  config.addPlugin(require("./.eleventy.config/images"));
  config.addPlugin(require("./.eleventy.config/rss"));

  // layouts: "layouts",
  return {
    dir: {
      input: "src",
      output: "dist",
      data: "data",
      includes: "",
      layouts: "",
    },
  };
};
