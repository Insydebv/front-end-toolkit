// Lint script
module.exports = {
  fn: function (gulp, plugins, options) {
    return gulp.src([options.scripts.bodyScriptSrc, options.scripts.headScriptSrc, options.scripts.pageScriptSrc])
      .pipe(plugins.jshint())
      .pipe(plugins.jshint.reporter(plugins.jshintStylish))
      ;
  }
};