// Minify pagescripts and concat pagescripts
'use strict';
const plugins = require('../../libs/plugins');
const onError = require('../../libs/onError');
const fs = require('fs');
const path = require('path');
const allChildrenWildcard = new RegExp(/\/\*\*\/\*\.[jJ][sS]$/);
const subdirWildcard = new RegExp(/\/\*\.[jJ][sS]$/);
const jsFile = new RegExp(/\.[jJ][sS]$/);

module.exports = (gulp, options) => () => {

	let paths = [];
	let srcFolders = [];
	let srcFiles = [];

	if(!options.scripts.pageScriptSrc) {
		return;
	}

	if (Array.isArray(options.scripts.pageScriptSrc)) {
		// check if array is supplied
		paths = options.scripts.pageScriptSrc;
	}
	else {
		// else create array
		paths = [options.scripts.pageScriptSrc];
	}

	function parseScriptSource(item, index) {
		// replace wildcard selectors
		item = item.replace(allChildrenWildcard, "");
		item = item.replace(subdirWildcard, "");

		if (jsFile.test(item)) {
			// js file
			srcFiles.push(item);
		}
		else {
			// directory
			srcFolders.push(item);
		}
	}

	function getFolders(dir) {
		return fs.readdirSync(dir)
			.filter(function(file) {
				return fs.statSync(path.join(dir, file)).isDirectory();
			}).map(i => path.join(dir, i));
	}

	// parse all input paths
	paths.forEach(parseScriptSource);

	// get all directories and subdirectories
	let folders = srcFolders.reduce((prev, cur) => prev.concat(getFolders(cur)), []);

	// Parse subfolders
	let folderStream = folders.map(folder => gulp.src(path.join(folder, '/**/*.js'))
		.pipe(plugins.plumber({
			errorHandler: onError
		}))
		.pipe(plugins.sourcemaps.init())
		.pipe(plugins.babel())
		.pipe(plugins.concat(folder + '.js'))
		.pipe(plugins.rename({ suffix: '.min', dirname: '' }))
		.pipe(!plugins.util.env.production ? plugins.util.noop() : plugins.uglify())
		.pipe(plugins.sourcemaps.write('maps'))
		.pipe(gulp.dest(options.scripts.dest))
	);

	// Parse root dir children and extra files
	srcFolders.forEach(folder => srcFiles.push(path.join(folder, '/*.js')));
	let rootStream = gulp.src(srcFiles)
			.pipe(plugins.plumber({
				errorHandler: onError
			}))
			.pipe(plugins.sourcemaps.init())
			.pipe(plugins.babel())
			.pipe(!plugins.util.env.production ? plugins.util.noop() : plugins.uglify())
			.pipe(plugins.rename({ suffix: '.min' }))
			.pipe(plugins.sourcemaps.write('maps'))
			.pipe(gulp.dest(options.scripts.dest))
		;

	// Return a merged stream to handle both `end` events
	return plugins.mergeStream(folderStream, rootStream);
};
