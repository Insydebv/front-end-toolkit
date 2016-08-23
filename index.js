module.exports = function (gulp, plugins, options, onError) {

	// Load plugins
	var plugins = require('gulp-load-plugins')({
		pattern: [
			"gulp-*",
			"gulp.*",
			"beepbeep",
			"browser-sync",
			"deep-assign",
			"del",
			"jshint-stylish",
			"main-bower-files",
			"merge-stream",
			"rework-plugin-url",
			"sass-index",
		]
	});

	// Handle errors
	var onError = function(err){
		if(err) {
			plugins.util.log(plugins.util.colors.bgRed('Error') + ' ' + plugins.util.colors.bgMagenta(err.plugin) + ': ' + err.message);
			if(plugins.util.env.type ==  'production') {
				// If run with 'gulp build --type production' exit with status code 1
				process.exit(1);
			}
			else {
				// Else do soft error
				plugins.beepbeep();
				this.emit('end');
			}
		}
	}

	// Assign options
	var options = plugins.deepAssign(require('./config.js')(), options);
	
	// Load tasks
	
	// Bower tasks
	require('./tasks/bower/assets')(gulp, plugins, options, onError);
	require('./tasks/bower/scripts')(gulp, plugins, options, onError);
	require('./tasks/bower/styles')(gulp, plugins, options, onError);
	require('./tasks/bower/build')(gulp, plugins, options, onError);
	
	// Clean
	// Fonts
	// Images
	// Lint
	// Scripts
	// Styles
	// Utilities
	
	// Build
	// Default
	// Test

};