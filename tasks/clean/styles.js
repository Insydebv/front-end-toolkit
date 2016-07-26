// Clean styles dist folder
module.exports = {
	fn: function (gulp, plugins, options) {
		return plugins.del([options.styles.dest + '/**/*.*', '!' + options.styles.dest + '/.gitignore']);
	}
};