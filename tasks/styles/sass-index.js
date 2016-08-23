// Generate SASS components indexfile: index.sass
module.exports = function (gulp, plugins, options) {
	gulp.task('styles:sass-index', function () {
		return plugins.sassIndex({
			extensions: ['.scss'],
			dir: options.styles.componentsSrc
		});
	});
};