// Concatenate and minify headscripts: scripts that need to be loaded in the <head> section of a page
'use strict';
const plugins = require('../../libs/plugins');
const onError = require('../../libs/onError');

module.exports = (gulp, options) => () => {
	return gulp.src(options.scripts.headScriptSrc)
		.pipe(plugins.plumber({
			errorHandler: onError
		}))
		.pipe(plugins.filter('**/*.js'))
		.pipe(plugins.sourcemaps.init())
		// Translate code to ES5 (especially useful when ES6 is used)
		.pipe(plugins.babel())
		.pipe(plugins.concat(options.scripts.headScriptFile))
		// Handle the imports used in the code
		.pipe(plugins.browserify({
			insertGlobals : true
		}))
		// Minify the code
		.pipe(!plugins.util.env.production ? plugins.util.noop() : plugins.uglify())
		.pipe(plugins.sourcemaps.write('maps'))
		.pipe(gulp.dest(options.scripts.dest))
		;
};
