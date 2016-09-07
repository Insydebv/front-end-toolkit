// Clean fonts dist folder
module.exports = function (gulp, plugins, options) {
	gulp.task('clean:fonts', function () {
		return plugins.del([options.fonts.dest + '/**/*.*', '!' + options.fonts.dest + '/.gitignore']);
	});
};

