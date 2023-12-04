module.exports = {
  layout: "default",
  permalink(data) {
    return `/posts/${data.page.fileSlug}/`;
  },
  // eleventyComputed: {
  //   eleventyExcludeFromCollections(data) {
  //     return meta.isProduction && data.published === false ? true : false;
  //   }
  // },
  // og_type: "article",
  // og_author: meta.canonical("/about/"),
  // author: meta.author.name,
  // author_image: meta.author.image.src,
  // author_image_alt: meta.author.image.alt
};
