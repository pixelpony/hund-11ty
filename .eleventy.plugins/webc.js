const WebcPlugin = require("@11ty/eleventy-plugin-webc");

module.exports = function (config) {
  config.addPlugin(WebcPlugin, {
    components: ["src/components/**/*.webc", "npm:@11ty/eleventy-img/*.webc"],
  });
};
