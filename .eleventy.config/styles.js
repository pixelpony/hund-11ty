module.exports = function (config) {
  config.addPassthroughCopy({ "src/styles": "css" });
  config.addWatchTarget("src/styles/*.css");
};
