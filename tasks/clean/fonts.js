// Clean fonts dist folder
module.exports = {
	fn: function (gulp, plugins, options) {
		return plugins.del([options.fonts.dest + '/**/*.*', '!' + options.fonts.dest + '/.gitignore']);
	}
};