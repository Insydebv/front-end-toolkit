// Clean script dist folder
module.exports = {
	fn: function (gulp, plugins, options) {
		return plugins.del([options.scripts.dest + '/**/*.*', '!' + options.scripts.dest + '/.gitignore']);
	}
};