// Copy bower assets to the dist folder
module.exports = {
	fn: function (gulp, plugins, options, callback) {
		return gulp.src(plugins.mainBowerFiles(), {base: options.paths.bowerSrc})
			.pipe(plugins.filter(options.bowerAssetFileTypes))
			.pipe(gulp.dest(options.paths.bowerAssetsDest));
	}
};