module.exports = function (config) {
  config.addCollection("posts", (collection) => {
    const posts = collection.getFilteredByGlob("./src/cms/posts/*.md");
    return posts.reverse();
  });
};
