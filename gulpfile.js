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

	// Assign options
	var options = plugins.deepAssign(require('./config.js')(), options);

	// Load tasks
	plugins.requireTasks({
		path: __dirname + '/tasks',
		arguments: [plugins, options],
	});
};