// Generate SASS components indexfile: index.sass
module.exports = {
	fn: function (gulp, plugins, options, callback) {
		return plugins.sassIndex({
			extensions: ['.scss'],
			dir: options.paths.stylesComponentsSrc
		});
	}
};