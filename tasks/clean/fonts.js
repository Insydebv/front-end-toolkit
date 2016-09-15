// Clean fonts dist folder
'use strict';
const plugins = require('../../libs/plugins');

module.exports = (gulp, options) => () => {
	return plugins.del([options.fonts.dest + '/**/*', '!' + options.fonts.dest + '/.gitignore']);
};
