module.exports = function (gulp, options) {

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
	var jsHintErrorReporter = function (file, enc, callback) {
		if (file.jshint.success) {
			// Don't show something if success
			callback();
		}

		// Count errors
		var errorCount = 0;
		var codes = { W: 0, E: 0 };
		(file.jshint.results||[]).forEach(function(result) {
			codes[result.error.code[0]]++;
		});

		if (!codes['E'] && codes['W']) {
			// Only warnings, so don't show a notification
			callback();
		}
		else if (codes['E'] > 0) {
			// There is a true error, so notify!
			var err = new plugins.util.PluginError('gulp-jshint', {
				message: 'See console',
			});
			this.emit("error", err);
			callback();
		}
	};

	var onError = function (err) {
		plugins.notify({
			title: 'Task Failed [' + err.plugin + ']',
			message: 'See console',
			sound: 'Beep'
		}).write(err);

		plugins.util.log(plugins.util.colors.bgRed('Error') + ' ' + plugins.util.colors.bgMagenta(err.plugin) + ': ' + err.message);

		if (!plugins.util.env.production) {
			// Do soft error to keep streams going
			this.emit('end');
		}
		else {
			// If run with 'gulp build --production' exit with status code 1 so the build fails
			process.exit(1);
		}
	};

	// Assign options
	var defaultOptions = require(__dirname + '/config.json');
	options = plugins.deepAssign(defaultOptions, options);

	// Load tasks

	// Bower tasks
	require('./tasks/bower/assets')(gulp, plugins, options);
	require('./tasks/bower/scripts')(gulp, plugins, options, onError);
	require('./tasks/bower/styles')(gulp, plugins, options, onError);
	require('./tasks/bower/build')(gulp);

	// Clean
	require('./tasks/clean/bower')(gulp, plugins, options);
	require('./tasks/clean/fonts')(gulp, plugins, options);
	require('./tasks/clean/images')(gulp, plugins, options);
	require('./tasks/clean/scripts')(gulp, plugins, options);
	require('./tasks/clean/sprite')(gulp, plugins, options);
	require('./tasks/clean/styles')(gulp, plugins, options);
	require('./tasks/clean/all')(gulp);

	// Fonts
	require('./tasks/fonts/build')(gulp, plugins, options, onError);

	// Images
	require('./tasks/images/generate-small-sprite-images')(gulp, plugins, options, onError);
	require('./tasks/images/imagemin')(gulp, plugins, options, onError);
	require('./tasks/images/sprite')(gulp, plugins, options, onError);

	// Lint
	require('./tasks/lint/scripts')(gulp, plugins, options, onError, jsHintErrorReporter);
	require('./tasks/lint/styles')(gulp, plugins, options, onError);

	// Scripts
	require('./tasks/scripts/headscripts')(gulp, plugins, options, onError);
	require('./tasks/scripts/pagescripts')(gulp, plugins, options, onError);
	require('./tasks/scripts/bodyscripts')(gulp, plugins, options, onError);
	require('./tasks/scripts/build')(gulp, plugins, options, onError);

	// Styles
	require('./tasks/styles/sass-index')(gulp, plugins, options, onError);
	require('./tasks/styles/sass')(gulp, plugins, options, onError);
	require('./tasks/styles/build')(gulp, plugins, options, onError);

	// Utilities
	require('./tasks/utilities/browser-sync')(gulp, plugins, options, onError);
	require('./tasks/utilities/watch')(gulp, plugins, options, onError);

	// Combined tasks:
	// Build
	require('./tasks/build')(gulp, plugins, options, onError);

	// Default
	require('./tasks/default')(gulp, plugins, options, onError);

	// Test
	require('./tasks/test')(gulp, plugins, options, onError);

};