module.exports = function (config) {
  config.addCollection("posts", (collection) => {
    const posts = collection.getFilteredByGlob("./src/pages/posts/*.md");
    return posts.reverse();
  });
};
