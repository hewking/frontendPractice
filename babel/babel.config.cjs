const path = require("path");

module.exports = {
  plugins: [path.resolve("./src/plugin/reverse_name.js")],
};
