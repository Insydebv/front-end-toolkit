// Lint script
'use strict';
const plugins = require('../../libs/plugins');
const onError = require('../../libs/onError');
const jsHintErrorReporter = require('../../libs/jsHintErrorReporter');
const through = require('through2');
const path = require('path');

module.exports = (gulp, options) => () => {
	return gulp.src(options.scripts.bodyScriptSrc.concat(options.scripts.headScriptSrc, path.join(options.scripts.pageScriptSrc, '/**/*.js')), {since: gulp.lastRun('lint:scripts')})
		.pipe(plugins.plumber({
			errorHandler: onError
		}))
		.pipe(plugins.jshint())
		.pipe(plugins.jshint.reporter(plugins.jshintStylish))
		.pipe(through.obj(jsHintErrorReporter));
};
