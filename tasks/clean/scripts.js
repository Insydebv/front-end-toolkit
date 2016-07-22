// Clean script dist folder
module.exports = {
	fn: function (gulp, plugins, options, callback) {
		return plugins.del([options.paths.scriptDest + '/**/*.*', '!' + options.paths.scriptDest + '/.gitignore']);
	}
};