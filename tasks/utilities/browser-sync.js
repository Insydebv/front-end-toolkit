// Browser-sync
module.exports = function (gulp, plugins, options) {
	gulp.task('utilities:browser-sync', function () {
		var projectPath = __dirname.toLowerCase().replace(options.utilities.browserSyncHtdocs, "");
		projectPath = projectPath.replace("node_modules\\front-end-toolkit\\tasks\\utilities", "");
		projectPath = projectPath.replace("\\", "/");
		// Serve files from the root of this project
		plugins.browserSync.init({
			open: options.utilities.browserSyncOpen,
			proxy: "localhost/" + projectPath + options.appRoot
		});
	});
};
