// Clean dist
'use strict';
const plugins = require('../../libs/plugins');

module.exports = (gulp, options) => () => {
	return plugins.del(options.styles.srcFolder + '/' + options.sprite.cssName);
};
