// Generate SASS components indexfile: index.sass
module.exports = {
	fn: function (gulp, plugins, options) {
		return plugins.sassIndex({
			extensions: ['.scss'],
			dir: options.styles.componentsSrc
		});
	}
};