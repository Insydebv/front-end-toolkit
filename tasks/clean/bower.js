// Clean dist
module.exports = {
	fn: function (gulp, plugins, options) {
		return plugins.del([options.bower.assetsDest + '/**/*.*', '!' + options.bower.assetsDest + '/.gitignore']);
	}
};