// Build styles
module.exports = {
	fn: function (gulp, plugins, options, callback) {
		plugins.sequence(['styles:sass-index', 'styles:sass'])
	}
};