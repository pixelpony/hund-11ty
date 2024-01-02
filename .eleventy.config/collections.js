module.exports = function (config) {
  config.addCollection("posts", (collection) => {
    const posts = collection.getFilteredByGlob(
      "./src/collections/posts/items/*.md"
    );
    return posts.reverse();
  });
};
