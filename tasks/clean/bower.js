// Clean dist
module.exports = function (gulp, plugins, options, onError) {
	gulp.task('clean:bower', function () {
		return plugins.del([options.bower.assetsDest + '/**/*.*', '!' + options.bower.assetsDest + '/.gitignore']);
	});
});