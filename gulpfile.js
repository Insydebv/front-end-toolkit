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
		"rework-plugin-url",
		"sass-index",
	]
});

// Deep assign options
var options = plugins.deepAssign(require('./config.js')(), options);

// Load tasks
module.exports = function (gulp) {
	plugins.requireTasks({
		path: __dirname + '/tasks',
		arguments: [plugins, options],
	});
};