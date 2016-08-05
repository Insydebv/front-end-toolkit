// Generate SASS components indexfile: index.sass
module.exports = function (gulp, plugins, options, callback) {
	plugins.sassIndex({
		extensions: ['.scss'],
		dir: options.styles.componentsSrc
	});
	callback(); // Don't forget this, otherwise task will never finish!
};