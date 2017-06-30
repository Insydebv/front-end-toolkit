// Concat and minify main NPM scripts
'use strict';
const plugins = require('../../libs/plugins');
const onError = require('../../libs/onError');

module.exports = (gulp, options) => () => {
	return gulp.src(plugins.mainBowerFiles('**/*.js'), {base: options.npm.src})
		.pipe(plugins.plumber({
			errorHandler: onError
		}))
		.pipe(plugins.sourcemaps.init())
		.pipe(plugins.babel())
		.pipe(plugins.concat(options.npm.scriptFile))
		.pipe(!plugins.util.env.production ? plugins.util.noop() : plugins.uglify())
		.pipe(plugins.sourcemaps.write('maps'))
		.pipe(gulp.dest(options.scripts.dest))
		;
};