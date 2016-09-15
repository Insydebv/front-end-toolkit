// Clean images dist folder
'use strict';
const plugins = require('../../libs/plugins');

module.exports = (gulp, options) => () => {
	return plugins.del([options.images.dest + '/**/*', '!' + options.images.dest + '/.gitignore']);
};
