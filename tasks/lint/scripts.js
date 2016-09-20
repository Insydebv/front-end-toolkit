// Lint script
'use strict';
const plugins = require('../../libs/plugins');
const onError = require('../../libs/onError');
const eslint = require('gulp-eslint');
const through = require('through2');

module.exports = (gulp, options) => () => {
	return gulp.src(options.scripts.bodyScriptSrc.concat(options.scripts.headScriptSrc, options.scripts.pageScriptSrc), {since: gulp.lastRun('lint:scripts')})
		.pipe(eslint())
		.pipe(plugins.plumber({
			errorHandler: onError
		}))
		.pipe(eslint.format())
		.pipe(eslint.failAfterError())
		.on("error", notify.onError('You have JavaScript Errors, check the console!'));
};
