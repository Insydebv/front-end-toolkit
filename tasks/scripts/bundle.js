// Concatenate and minify body scripts
'use strict';
const plugins = require('../../libs/plugins');
const onError = require('../../libs/onError');

// var gulp = require('gulp');
// var browserify = require('browserify');
// var gutil = require('gulp-util');
// var tap = require('gulp-tap');
// var buffer = require('gulp-buffer');
// var sourcemaps = require('gulp-sourcemaps');
// var uglify = require('gulp-uglify');

module.exports = (gulp, options) => () => {
  return gulp.src(options.scripts.bodyScriptSrc, {read: false}) // no need of reading file because browserify does.

  // transform file objects using gulp-tap plugin
    .pipe(plugins.tap(function (file) {

      plugins.util.log('bundling ' + file.path);

      // replace file contents with browserify's bundle stream
      file.contents = plugins.browserify(file.path, {debug: true}).bundle();

    }))

    // transform streaming contents into buffer contents (because gulp-sourcemaps does not support streaming contents)
    .pipe(plugins.buffer())

    // load and init sourcemaps
    .pipe(plugins.sourcemaps.init({loadMaps: true}))

    .pipe(plugins.babel())
    // .pipe(!plugins.util.env.production ? plugins.util.noop() : plugins.uglify())
    .pipe(plugins.uglify())

    // write sourcemaps
    .pipe(plugins.sourcemaps.write('maps'))

    .pipe(gulp.dest(options.scripts.dest));

};
