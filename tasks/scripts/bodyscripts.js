// Concatenate and minify body scripts
'use strict';
const plugins = require('../../libs/plugins');
const onError = require('../../libs/onError');

module.exports = (gulp, options) => () => {
	return gulp.src(options.scripts.bodyScriptSrc)
		.pipe(plugins.plumber({
			errorHandler: onError
		}))
		.pipe(plugins.filter('**/*.js'))
		.pipe(plugins.sourcemaps.init())
		.pipe(plugins.babel({
			presets: ['es2015']
		}))
		.pipe(plugins.concat(options.scripts.bodyScriptFile))
		// Handle imports used in the code
		.pipe(plugins.browserify({
			insertGlobals : true
		}))
		// Minify the code
		.pipe(!plugins.util.env.production ? plugins.util.noop() : plugins.uglify())
		.pipe(plugins.sourcemaps.write('maps'))
		.pipe(gulp.dest(options.scripts.dest))
		;
};
