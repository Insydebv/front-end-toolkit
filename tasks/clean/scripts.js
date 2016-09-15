// Clean script dist folder
'use strict';
const plugins = require('../../libs/plugins');

module.exports = (gulp, options) => () => {
	return plugins.del([options.scripts.dest + '/**/*', '!' + options.scripts.dest + '/.gitignore']);
};
