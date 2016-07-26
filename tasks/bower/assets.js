// Copy bower assets to the dist folder
module.exports = {
	fn: function (gulp, plugins, options) {
		return gulp.src(plugins.mainBowerFiles(), {base: options.bower.src})
			.pipe(plugins.filter("**/*.{" + options.bower.assetFileTypes + "}"))
			.pipe(gulp.dest(options.bower.assetsDest));
	}
};