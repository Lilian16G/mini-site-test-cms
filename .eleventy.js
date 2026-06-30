module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("admin"); // copie admin/config.yml tel quel

  eleventyConfig.addCollection("services", function (collectionApi) {
    return collectionApi.getFilteredByGlob("services/*.md");
  });

  return {
    dir: {
      input: ".",
      output: "_site"
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};