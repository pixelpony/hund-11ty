const fastglob = require("fast-glob");
const path = require("node:path");

const photoGlobs = ["./src/cms/photos/*.*"];

module.exports = function () {
  const photos = fastglob.sync(photoGlobs).map((photoPath) => {
    console.log("photoPath: " + photoPath);
    const pathParsed = path.parse(photoPath);
    return {
      path_raw: photoPath,
      file_dir: pathParsed.dir,
      file_name: pathParsed.base,
      file_type: pathParsed.ext,
      page_url: "/photos/" + pathParsed.base + "/",
    };
  });

  console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++");
  console.log(photos);
  console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++");

  return photos;
};
