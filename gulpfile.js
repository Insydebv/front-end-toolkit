// Load modules
var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({
	pattern: '*'
});

// Define options
var options = plugins.deepAssign(require('./config.js')(), {
	"sassIncludePaths": [
		'bower_components/foundation/scss',
	],
	"siteScripts": [
		/* Foundation features */
		/* Pick the components you need in your project */
		// 'bower_components/foundation/js/foundation/foundation.abide.js',
		// 'bower_components/foundation/js/foundation/foundation.accordion.js',
		// 'bower_components/foundation/js/foundation/foundation.alert.js',
		// 'bower_components/foundation/js/foundation/foundation.clearing.js',
		// 'bower_components/foundation/js/foundation/foundation.dropdown.js',
		// 'bower_components/foundation/js/foundation/foundation.equalizer.js',
		// 'bower_components/foundation/js/foundation/foundation.interchange.js',
		// 'bower_components/foundation/js/foundation/foundation.joyride.js',
		// 'bower_components/foundation/js/foundation/foundation.magellan.js',
		// 'bower_components/foundation/js/foundation/foundation.offcanvas.js',
		// 'bower_components/foundation/js/foundation/foundation.orbit.js',
		// 'bower_components/foundation/js/foundation/foundation.reveal.js',
		// 'bower_components/foundation/js/foundation/foundation.slider.js',
		// 'bower_components/foundation/js/foundation/foundation.tab.js',
		// 'bower_components/foundation/js/foundation/foundation.tooltip.js',
		'bower_components/foundation/js/foundation/foundation.topbar.js',
		/* Add custom scripts */
		'src/script/script.js',
	],
});

// Load tasks
plugins.requireTasks({
	path: __dirname + '/tasks',
	arguments: [plugins, options],
});