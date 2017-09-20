// Lint styles
'use strict';
const plugins = require('../../libs/plugins');
const stylelintFormatter = require('stylelint-formatter-pretty');

module.exports = function (gulp, options) {
	return function(){
		return gulp.src([options.styles.srcFolder + "/**/*.scss", "!" + options.npm.stylesFile])
			.pipe(plugins.cached('lint:styles'))
			.pipe(plugins.stylelint({
        failAfterError: !!plugins.util.env.production,
        reporters: [
          {
            formatter: stylelintFormatter,
            console: true
          }
        ]
			}));
	};
};
