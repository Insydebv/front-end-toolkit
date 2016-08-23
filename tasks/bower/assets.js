// Copy bower assets to the dist folder
module.exports = function (gulp, plugins, options) {
	gulp.task('bower:assets', function () {
		return gulp.src(plugins.mainBowerFiles(), {base: options.bower.src})
			.pipe(plugins.filter("**/*.{" + options.bower.assetFileTypes + "}"))
			.pipe(gulp.dest(options.bower.assetsDest));
	});
};