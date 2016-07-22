// Clean dist
module.exports = {
	fn: function (gulp, plugins, options, callback) {
		return plugins.del([options.paths.appRoot + options.paths.bowerAssetsDest + '/**/*.*', '!' + options.paths.appRoot + options.paths.bowerAssetsDest + '/.gitignore']);
	}
};