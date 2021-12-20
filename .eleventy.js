const htmlmin = require("html-minifier");

module.exports = (eleventyConfig) => {
  eleventyConfig.setUseGitIgnore(false);

  eleventyConfig.addTransform("htmlmin", (content, outputPath) => {
    if (outputPath && outputPath.endsWith(".html")) {
      const minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }

    return content;
  });

  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/css");

  return {
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
