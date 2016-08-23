// Clean images dist folder
module.exports = function (gulp, plugins, options) {
	gulp.task('clean:images', function () {
		return plugins.del([options.images.dest + '/**/*.*', '!' + options.images.dest + '/.gitignore']);
	});
};

