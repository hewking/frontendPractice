const fs = require("fs");

const saveImage = (imgData, path) => {
  fs.writeFile(path, imgData, "binary", function (err) {
    console.log("保存图片成功" + path);
  });
};

module.exports = {
  saveImage,
};
