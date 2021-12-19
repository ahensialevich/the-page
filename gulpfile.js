const postcss = require("gulp-postcss");
const { src, dest } = require("gulp");

exports.default = function () {
  const config = () => ({
    plugins: [
      require("postcss-import")({ root: "./src *" }),
      require("cssnano")({ preset: "advanced" }),
    ],
  });

  return src("./src/index.css").pipe(postcss(config)).pipe(dest("./src/css"));
};
