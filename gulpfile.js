const postcss = require("gulp-postcss");
const { src, dest, parallel, watch } = require("gulp");

const path = "./src/index.css";

const css = () => {
  const config = () => ({
    plugins: [
      require("postcss-import")({ root: "./src *" }),
      require("postcss-custom-media")(),
      require("postcss-nested")(),
      require("cssnano")({
        preset: [
          "advanced",
          {
            autoprefixer: {
              add: true,
            },
          },
        ],
      }),
    ],
  });

  return src(path).pipe(postcss(config)).pipe(dest("./src/css"));
};

const watcher = () => {
  watch(path, { ignoreInitial: true }, css);
};

exports.default = parallel(css);

exports.watch = watcher;
