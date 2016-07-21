// Clean fonts dist folder
module.exports = {
	fn: function (gulp, plugins, options, callback) {
		return plugins.del([options.paths.fontDest + '/**/*.*', '!' + options.paths.fontDest + '/.gitignore'])
	}
};