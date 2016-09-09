// Require Gulp
var gulp = require('gulp');

// Load optional configuration
var options = require('./gulpconfig.json');

// Import front-end toolkit tasks and pass options
require('webdev-toolkit')(gulp,options);
