function sortByOrder(values) {
  let vals = [...values];     // this *seems* to prevent collection mutation...
  return vals.sort((a, b) => Math.sign(a.data.order - b.data.order));
}

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/static")

  eleventyConfig.addLayoutAlias("base", "layouts/base.njk")
  eleventyConfig.addLayoutAlias("books", "layouts/book.njk")
  eleventyConfig.addLayoutAlias("chars", "layouts/char.njk")
  eleventyConfig.addLayoutAlias("posts", "layouts/post.njk")

  eleventyConfig.setDataDeepMerge(true);

  eleventyConfig.addFilter("sortByOrder", sortByOrder);

  eleventyConfig.addCollection("archList", function(collection) {
    let archSet = new Set();
    collection.getAll().forEach(function(item) {
      if( "tags" in item.data ) {
        let archs = item.data.tags;

        archs = archs.filter(function(item) {
          switch(item) {
            // this list should match the `filter` list in arcos.njk
            case "all":
            case "livros":
            case "personagens":
              return false;
            case "posts":
                return false;
          }

          return true;
        });

        for (const arch of archs) {
          archSet.add(arch);
        }
      }
    });

    // returning an array in addCollection works in Eleventy 0.5.3
    return [...archSet];
  });
  
  return {
    passthroughFileCopy: true,
    markdownTemplateEngine: "njk",
    templateFormats: ["html", "njk", "md"],
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    }
  }
}