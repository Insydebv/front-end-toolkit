// Run StealJS
'use strict';
const plugins = require('../../libs/plugins');

module.exports = (gulp, options) => () => {
  return plugins.stealTools.build({}, Object.assign({
    minify: !!plugins.util.env.production,
    sourceMaps: true,
  }, options.stealTools));
};
