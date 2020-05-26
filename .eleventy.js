module.exports = function(eleventyConfig) {


    // Layout aliases
	eleventyConfig.addLayoutAlias('homepage', 'layouts/homepage.njk');
	eleventyConfig.addLayoutAlias('results', 'layouts/results.njk');
	eleventyConfig.addLayoutAlias('job-detail', 'layouts/job-detail.njk');
	eleventyConfig.addLayoutAlias('base', 'layouts/base.njk');


	eleventyConfig.addPassthroughCopy("site/assets");

    return {
		pathPrefix: "/",
		dir: {
			includes: "_includes",
			data: "_data",
			input: "site",
			output: "dist"
		},
		passthroughFileCopy: true,
    templateFormats: [ "md", "njk"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
	};

};
