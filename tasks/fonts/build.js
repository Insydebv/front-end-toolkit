// Copy fonts to dist
'use strict';
const plugins = require('../../libs/plugins');

module.exports = (gulp, options) => () => {
	return gulp.src(options.fonts.src)
		.pipe(plugins.newer(options.fonts.dest))
		.pipe(gulp.dest(options.fonts.dest));
};
