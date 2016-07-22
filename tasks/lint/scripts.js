// Lint script
module.exports = {
	fn: function (gulp, plugins, options, callback) {
		return gulp.src(options.pathscriptSrc)
        	.pipe(plugins.jshint())
        	.pipe(plugins.jshint.reporter('jshint-stylish'))
        ;
	}
};