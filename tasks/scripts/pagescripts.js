// Minify pagescripts: scripts that don't need to be concatenated and are mostly used on a single occurence
'use strict';
const plugins = require('../../libs/plugins');
const onError = require('../../libs/onError');

module.exports = (gulp, options) => () => {
	return gulp.src(options.scripts.pageScriptSrc)
		.pipe(plugins.plumber({
			errorHandler: onError
		}))
		.pipe(plugins.filter('**/*.js'))
		.pipe(plugins.sourcemaps.init())
		.pipe(plugins.babel({
			presets: ['es2015']
		}))
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
