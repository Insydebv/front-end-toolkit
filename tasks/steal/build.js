// Run StealJS
'use strict';
const plugins = require('../../libs/plugins');

module.exports = (gulp, options) => () => {
  if(!plugins.util.env.production) {
    return plugins.stealTools.bundle({}, options.stealTools.dev);
  }
  else {
    return plugins.stealTools.build({}, options.stealTools.production);
  }
};
