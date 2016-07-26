// Clean images dist folder
module.exports = {
	fn: function (gulp, plugins, options) {
		return plugins.del([options.images.dest + '/**/*.*', '!' + options.images.dest + '/.gitignore']);
	}
};