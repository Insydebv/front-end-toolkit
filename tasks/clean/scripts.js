// Clean script dist folder
module.exports = function (gulp, plugins, options) {
	gulp.task('clean:scripts', function () {
		return plugins.del([options.scripts.dest + '/**/*.*', '!' + options.scripts.dest + '/.gitignore']);
	});
};

