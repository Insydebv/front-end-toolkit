// Minify pagescripts: scripts that don't need to be concatenated and are mostly used on a single occurence
'use strict';
const plugins = require('../../libs/plugins');
const onError = require('../../libs/onError');
const fs = require('fs');
const path = require('path');

module.exports = (gulp, options) => () => {
	function getFolders(dir) {
		return fs.readdirSync(dir)
			.filter(function(file) {
				return fs.statSync(path.join(dir, file)).isDirectory();
			});
	}

	let folders = getFolders(options.scripts.pageScriptSrc);

	// Parse subfolders
	let folderStream = folders.map(function(folder) {
		return gulp.src(path.join(options.scripts.pageScriptSrc, folder, '/**/*.js'))
			.pipe(plugins.plumber({
				errorHandler: onError
			}))
			.pipe(plugins.sourcemaps.init())
			.pipe(plugins.babel())
			.pipe(plugins.concat(folder + '.min.js'))
			.pipe(!plugins.util.env.production ? plugins.util.noop() : plugins.uglify())
			.pipe(plugins.sourcemaps.write('maps'))
			.pipe(gulp.dest(options.scripts.dest))
	});

	// Parse root dir
	let rootStream = gulp.src(path.join(options.scripts.pageScriptSrc, '/*.js'))
			.pipe(plugins.plumber({
				errorHandler: onError
			}))
			.pipe(plugins.sourcemaps.init())
			.pipe(plugins.babel())
			.pipe(!plugins.util.env.production ? plugins.util.noop() : plugins.uglify())
			.pipe(plugins.sourcemaps.write('maps'))
			.pipe(plugins.rename({ suffix: '.min' }))
			.pipe(gulp.dest(options.scripts.dest))
		;

	// Return a merged stream to handle both `end` events
	return plugins.mergeStream(folderStream, rootStream);
};
