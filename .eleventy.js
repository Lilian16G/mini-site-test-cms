// Fichier de configuration principal d'Eleventy

module.exports = function (eleventyConfig) {
  // Copie le dossier images tel quel dans _site
  eleventyConfig.addPassthroughCopy("images");

  return {
    dir: {
      input: ".",
      output: "_site"
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};