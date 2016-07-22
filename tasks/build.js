// Build everything
module.exports = {
	fn: function (gulp, plugins, options, callback) {
		plugins.sequence(['bower', 'styles'], 'fonts', 'scripts');
	}
};