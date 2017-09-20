// Copy NPM assets to the dist folder
'use strict';
const plugins = require('../../libs/plugins');

module.exports = (gulp, options) => () => {
  return gulp.src(plugins.npmfiles({
    nodeModulesPath: '../../../../' + options.npm.src,
    packageJsonPath: options.npm.config,
  }), {base: options.npm.src})
    .pipe(plugins.filter("**/*.{" + options.npm.assetFileTypes + "}"))
    .pipe(gulp.dest(options.npm.assetsDest));
};
