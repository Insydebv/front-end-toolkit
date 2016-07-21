// Clean images dist folder
module.exports = {
	fn: function (gulp, plugins, options, callback) {
		return plugins.del([options.paths.imgDest + '/**/*.*', '!' + options.paths.imgDest + '/.gitignore'])
	}
};