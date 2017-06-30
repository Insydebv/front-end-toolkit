// Lint styles
'use strict';
const plugins = require('../../libs/plugins');

module.exports = function (gulp, options) {
	return function(){
		return gulp.src([options.styles.srcFolder + "/**/*.scss", "!" + options.npm.stylesFile, "!" + options.sprite.cssName])
			.pipe(plugins.cached('lint:styles'))
			.pipe(plugins.sassLint({
				configFile: options.styles.lintConfig,
				files: {
					ignore: options.styles.lintIgnore
				}
			}))
			.pipe(plugins.sassLint.format());
	};
};
