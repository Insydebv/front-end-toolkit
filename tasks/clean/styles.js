// Clean styles dist folder
module.exports = function (gulp, plugins, options) {
	gulp.task('clean:styles', function () {
		return plugins.del([options.styles.dest + '/**/*.*', '!' + options.styles.dest + '/.gitignore']);
	});
}

