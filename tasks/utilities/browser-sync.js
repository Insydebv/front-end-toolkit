// Browser-sync
module.exports = {
	fn: function (gulp, plugins, options) {
		var projectPath = __dirname.toLowerCase().replace(options.htdocs, "");
		projectPath = projectPath.replace("node_modules\\front-end-toolkit\\tasks\\utilities", "");
		projectPath = projectPath.replace("\\", "/");
		console.log(projectPath);
		// Serve files from the root of this project
		plugins.browserSync.init({
			open: "external",
			proxy: "localhost/" + projectPath + "/site"
		});
	}
};
