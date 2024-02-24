module.exports = (config) => {
  config.addPlugin(require("./.eleventy.plugins/webc"));
  config.addPlugin(require("./.eleventy.plugins/collections"));
  config.addPlugin(require("./.eleventy.plugins/markdown"));
  config.addPlugin(require("./.eleventy.plugins/images"));
  config.addPlugin(require("./.eleventy.plugins/rss"));

  config.addPassthroughCopy({ "src/styles": "css" });
  config.addWatchTarget("src/styles/*.css");

  return {
    dir: {
      output: "dist",
      input: "src",
      data: "_data",
      layouts: "_layouts",
      includes: "",
    },
  };
};
