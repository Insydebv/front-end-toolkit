// Generate SASS components indexfile: index.sass
module.exports = function (gulp, plugins, options) {
	gulp.task('styles:sass-index', function () {
		return plugins.sassIndex({
			dir: options.styles.componentsSrc,
			extensions: ['.scss'],
			ignore: options.styles.componentsIgnore
		});
	});
};