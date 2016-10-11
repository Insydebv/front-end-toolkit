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
		.pipe(plugins.babel({
			presets: ['es2015']
		}))
		.pipe(plugins.concat(options.scripts.headScriptFile))
		.pipe(plugins.browserify({
			insertGlobals : true
		}))
		.pipe(!plugins.util.env.production ? plugins.util.noop() : plugins.babel({
			presets: ['babili']
		}))
		.pipe(plugins.sourcemaps.write('maps'))
		.pipe(gulp.dest(options.scripts.dest))
		;
};
