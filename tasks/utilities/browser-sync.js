// Browser-sync
module.exports = {
	fn: function (gulp, plugins, options) {
		var projectPath = __dirname.toLowerCase().replace(options.htdocs, "");
		// Serve files from the root of this project
		plugins.browserSync.init({
			open: "external",
			proxy: "localhost/" + projectPath.replace("\\", "/") + "/site"
		});
	}
};
