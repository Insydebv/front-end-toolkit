// Clean dist
'use strict';
const plugins = require('../../libs/plugins');

module.exports = (gulp, options) => () => {
	return plugins.del([options.npm.assetsDest + '/**/*', options.styles.srcFolder + '/' + options.npm.stylesFile, '!' + options.npm.assetsDest + '/.gitignore']);
};