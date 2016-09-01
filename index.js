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
	var onError = function (err) {
		if (plugins.util.env.type != 'production') {
			plugins.notify({
				title: 'Task Failed [' + err.plugin + ']',
				message: 'See console',
				sound: 'Beep'
			}).write(err);
		}

		plugins.util.log(plugins.util.colors.bgRed('Error') + ' ' + plugins.util.colors.bgMagenta(err.plugin) + ': ' + err.message);

		if (plugins.util.env.type == 'production') {
			// If run with 'gulp build --type production' exit with status code 1
			process.exit(1);
		}
		else {
			// Else do soft error
			this.emit('end');
		}
	}

	// Assign options
	var fs = require('fs');
	var options = JSON.parse(fs.readFileSync(__dirname + '/config.json'));
	options = plugins.deepAssign(options, options);

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
	require('./tasks/clean/styles')(gulp, plugins, options);
	require('./tasks/clean/all')(gulp);

	// Fonts
	require('./tasks/fonts/build')(gulp, plugins, options, onError);

	// Images
	require('./tasks/images/generate-small-sprite-images')(gulp, plugins, options, onError);
	require('./tasks/images/imagemin')(gulp, plugins, options, onError);
	require('./tasks/images/sprite')(gulp, plugins, options, onError);

	// Lint
	require('./tasks/lint/scripts')(gulp, plugins, options, onError);
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