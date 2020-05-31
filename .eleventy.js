module.exports = function(eleventyConfig) {


    // Layout aliases
	eleventyConfig.addLayoutAlias('homepage', 'layouts/homepage.njk');
	eleventyConfig.addLayoutAlias('results', 'layouts/results.njk');
	eleventyConfig.addLayoutAlias('job-detail', 'layouts/job-detail.njk');
	eleventyConfig.addLayoutAlias('base', 'layouts/base.njk');
	eleventyConfig.addLayoutAlias('page', 'layouts/page.njk');
	eleventyConfig.addLayoutAlias('lists', 'layouts/lists.njk');


	eleventyConfig.addPassthroughCopy("site/assets");
	eleventyConfig.addPassthroughCopy('site/admin');
	eleventyConfig.addPassthroughCopy("site/content");

	eleventyConfig.addCollection("tagList", require("./_11ty/getTagList"));


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
