module.exports = {
  layout: "default",
  permalink(data) {
    return `/posts/${data.page.fileSlug}/`;
  },
};
