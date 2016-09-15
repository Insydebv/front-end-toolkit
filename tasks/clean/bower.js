// Clean dist
'use strict';
const plugins = require('../../libs/plugins');

module.exports = (gulp, options) => () => {
	return plugins.del([options.bower.assetsDest + '/**/*', options.styles.srcFolder + '/' + options.bower.stylesFile, '!' + options.bower.assetsDest + '/.gitignore']);
};