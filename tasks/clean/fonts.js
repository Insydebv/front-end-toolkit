// Clean fonts dist folder
module.exports = {
	fn: function (gulp, plugins, options, callback) {
		return plugins.del([options.paths.appRoot + options.paths.fontDest + '/**/*.*', '!' + options.paths.appRoot + options.paths.fontDest + '/.gitignore']);
	}
};