// Copy bower assets to the dist folder
'use strict';
const plugins = require('../../libs/plugins');

module.exports = (gulp, options) => () => {
	return gulp.src(plugins.mainBowerFiles(), {base: options.bower.src})
		.pipe(plugins.filter("**/*.{" + options.bower.assetFileTypes + "}"))
		.pipe(gulp.dest(options.bower.assetsDest));
};