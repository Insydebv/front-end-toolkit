// Compile sass into CSS & auto-inject into browsers
gulp.task('browser-sync', function() {
	var projectPath = __dirname.replace("D:\\php\\", "");
	// Serve files from the root of this project
	browserSync.init({
		open: "external",
		proxy: "localhost/" + projectPath.replace("\\", "/") + "/site"
	});

	// add plugins.browserSync.reload to the tasks array to make
	// all browsers reload after tasks are complete.
	gulp.watch("./src/script/**/*.js", ['scripts-watch']);
});