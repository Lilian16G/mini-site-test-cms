module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");

  // Regroupe tous les fichiers du dossier "services" dans une collection
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