// Clean dist
module.exports = function (gulp, plugins, options) {
	gulp.task('clean:bower', function () {
		return plugins.del([options.bower.assetsDest + '/**/*.*', options.styles.srcFolder + '/' + options.bower.stylesFile, '!' + options.bower.assetsDest + '/.gitignore']);
	});
};