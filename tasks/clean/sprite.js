// Clean dist
module.exports = function (gulp, plugins, options) {
	gulp.task('clean:sprite', function () {
		return plugins.del(options.styles.srcFolder + '/' + options.sprite.cssName);
	});
};