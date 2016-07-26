// Browser-sync
module.exports = {
	fn: function (gulp, plugins, options, callback) {
		var projectPath = __dirname.toLowerCase().replace(options.paths.htdocs, "");
		// Serve files from the root of this project
		plugins.browserSync.init({
			open: "external",
			proxy: "localhost/" + projectPath.replace("\\", "/") + "/site"
		});
	}
};
