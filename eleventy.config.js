module.exports = (config) => {
  config.addPlugin(require("./.eleventy.config/collections"));
  config.addPlugin(require("./.eleventy.config/webc"));
  config.addPlugin(require("./.eleventy.config/markdown"));
  config.addPlugin(require("./.eleventy.config/styles"));
  config.addPlugin(require("./.eleventy.config/images"));
  config.addPlugin(require("./.eleventy.config/rss"));

  return {
    dir: {
      input: "src",
      output: "dist",
      layouts: "layouts",
      data: "data",
    },
  };
};
