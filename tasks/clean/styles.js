// Clean styles dist folder
'use strict';
const plugins = require('../../libs/plugins');

module.exports = (gulp, options) => () => {
	return plugins.del([options.styles.dest + '/**/*', '!' + options.styles.dest + '/.gitignore']);
};
