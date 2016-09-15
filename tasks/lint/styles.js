// Lint styles
'use strict';
const plugins = require('../../libs/plugins');

module.exports = function (gulp, options) {
	return function(){
		return gulp.src([options.styles.srcFolder + "/**/*.scss", "!" + options.bower.stylesFile, "!" + options.sprite.cssName], {since: gulp.lastRun('lint:styles')})
			.pipe(plugins.sassLint({
				configFile: options.styles.lintConfig,
				files: {
					ignore: options.styles.lintIgnore
				}
			}))
			.pipe(plugins.sassLint.format());
	};
};
