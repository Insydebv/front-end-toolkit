// Run StealJS
'use strict';
const plugins = require('../../libs/plugins');

module.exports = (gulp, options) => () => {
  return plugins.stealTools.build({}, options.stealTools);
};
