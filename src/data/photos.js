const fastglob = require("fast-glob");
const path = require("node:path");
const _ = require("lodash/core");

const photoGlobs = ["./src/collections/photos/items/*.*"];

module.exports = function () {
  const photos = fastglob.sync(photoGlobs).map((photoPath) => {
    const parsed = path.parse(photoPath);
    return {
      path_raw: photoPath,
      file_dir: parsed.dir,
      file_name: parsed.base,
      file_type: parsed.ext,
      page_url: "/photos/" + parsed.base + "/",
    };
  });

  console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++");
  console.log(photos);
  console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++");
  return photos;
};
