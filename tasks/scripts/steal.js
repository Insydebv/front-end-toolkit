// Run StealJS
'use strict';
const plugins = require('../../libs/plugins');
const onError = require('../../libs/onError');

module.exports = (gulp, options) => () => {
  return plugins.stealTools.build({}, options.stealTools);
};
