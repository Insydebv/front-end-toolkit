// Generate CSS
module.exports = {
	dep: ['styles:sass-index'],
	fn: function (gulp, plugins, options, onError) {
		return gulp.src(options.styles.src, {base: options.styles.srcFolder})
			.pipe(plugins.plumber({
				errorHandler: onError
			}))
			.pipe(plugins.sourcemaps.init())
			.pipe(plugins.sass({
				includePaths: options.styles.includePaths,
				outputStyle: options.styles.outputStyle,
			}))
			.pipe(plugins.autoprefixer({browsers: ['last 3 versions']}))
			.pipe(plugins.sourcemaps.write('./map'))
			.pipe(gulp.dest(options.styles.dest))
			.pipe(plugins.browserSync.stream({match: '**/*.css'}))
			;
	}
};