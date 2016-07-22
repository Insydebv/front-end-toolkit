// Clean images dist folder
module.exports = {
	fn: function (gulp, plugins, options, callback) {
		return plugins.del([options.paths.appRoot + options.paths.imgDest + '/**/*.*', '!' + options.paths.appRoot + options.paths.imgDest + '/.gitignore']);
	}
};