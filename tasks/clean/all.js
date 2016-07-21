// Clean all dist folders
module.exports = {
	dep: ['clean:dist', 'clean:fonts', 'clean:images', 'clean:script', 'clean:styles'],
	fn: function (gulp, plugins, options, callback) {
		return;
	}
};