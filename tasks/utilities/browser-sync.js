// Browser-sync
module.exports = function (gulp, plugins, options) {
	gulp.task('utilities:browser-sync', function () {
		var projectPath = __dirname.toLowerCase().replace(options.htdocs, "");
		projectPath = projectPath.replace("node_modules\\front-end-toolkit\\tasks\\utilities", "");
		projectPath = projectPath.replace("\\", "/");
		// Serve files from the root of this project
		plugins.browserSync.init({
			open: "external",
			proxy: "localhost/" + projectPath + "site"
		});
	});
};
