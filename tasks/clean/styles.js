// Clean styles dist folder
module.exports = {
	fn: function (gulp, plugins, options, callback) {
		return plugins.del([options.paths.appRoot + options.paths.stylesDest + '/**/*.*', '!' + options.paths.appRoot + options.paths.stylesDest + '/.gitignore']);
	}
};