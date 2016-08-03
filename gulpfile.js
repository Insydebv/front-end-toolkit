// Load modules
var gulp = require('gulp');
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

module.exports = function (gulp, options) {
	// Handle errors
	var onError = function(err){
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

	// Assign options
	var options = plugins.deepAssign(require('./config.js')(), options);

	// Load tasks
	plugins.requireTasks({
		path: __dirname + '/tasks',
		arguments: [plugins, options, onError],
	});
};