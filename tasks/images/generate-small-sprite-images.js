// Generate the x1 images from the big ones
var fs = require('fs');

module.exports = function (gulp, plugins, options, onError) {
	gulp.task('images:generate-small-sprite-images', function () {
		return gulp.src(options.sprite.srcFolder + "/*" + options.sprite.retinaSuffix + ".png")
			.pipe(plugins.plumber({
				errorHandler: onError
			}))
			.pipe(plugins.flatmap(function (stream, file) {

				// Get path of small image
				var name = file.path;
				var smallImgPath = name.replace(options.sprite.retinaSuffix, "");

				// Only resize if the small image does not exist
				return stream
					.pipe(plugins.ignore.exclude(fs.existsSync(smallImgPath)))
					.pipe(plugins.gm(function (gmfile, done) {
						gmfile.size(function (err, size) {
							done(null, gmfile.resize(
								size.width * 0.5,
								size.height * 0.5
							));
						});
					}))
					.pipe(plugins.rename(function (path) {
						// Remove retina suffix
						path.basename = path.basename.replace(options.sprite.retinaSuffix, "");
					}))
					.pipe(gulp.dest('src/images/sprite'))
			}))
			;
	});
};
