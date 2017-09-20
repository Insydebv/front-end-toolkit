// Generate SASS components indexfile: index.sass
'use strict';
const plugins = require('../../libs/plugins');

module.exports = (gulp, options) => () => {
  return plugins.sassIndex({
    dir: options.styles.componentsSrc,
    extensions: ['.scss'],
    ignore: options.styles.componentsIgnore
  });
};
