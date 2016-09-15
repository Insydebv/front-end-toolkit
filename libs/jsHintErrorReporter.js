// Handle jshint errors
var plugins = require('./plugins');

module.exports = function (file, enc, callback) {
	if (file.jshint) {
		if (file.jshint.success) {
			// Don't show something if success
			callback(null, file);
		}

		// Count errors
		var errorCount = 0;
		var codes = {W: 0, E: 0};
		(file.jshint.results || []).forEach(function (result) {
			codes[result.error.code[0]]++;
		});

		if (!codes['E'] && codes['W']) {
			// Only warnings, so don't show a notification
			callback(null, file);
		}
		else if (codes['E'] > 0) {
			// There is a true error, so notify!
			var err = new plugins.util.PluginError('gulp-jshint', {
				message: 'See console',
			});
			this.emit("error", err);
			callback(null, file);
		}
	}
	else {
		callback(null, file);
	}
};