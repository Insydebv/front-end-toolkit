// Clean script dist folder
module.exports = {
	fn: function (gulp, plugins, options, callback) {
		return plugins.del([options.paths.appRoot + options.paths.scriptDest + '/**/*.*', '!' + options.paths.appRoot + options.paths.scriptDest + '/.gitignore']);
	}
};