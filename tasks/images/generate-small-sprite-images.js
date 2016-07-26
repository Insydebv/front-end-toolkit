// Generate the x1 images from the big ones
var gulpIgnore 	= require('gulp-ignore');
var fs			= require('fs');
var imageResize = require('gulp-image-resize');
var rename 		= require('gulp-rename');

module.exports = {
	fn: function (gulp, plugins, options) {
		return gulp.src(options.sprite.src + "/*" + options.sprite.retinaSuffix + ".png")
			.pipe(plugins.flatmap(function (stream, file) {

				// Get path of small image
				var name = file.path;
				var smallImgPath = name.replace(options.sprite.retinaSuffix, "");

				// Only resize if the small image does not exist
				return stream
					.pipe(gulpIgnore.exclude(fs.existsSync(smallImgPath)))
					.pipe(imageResize({
						width: '50%',
						height: '50%'
					}))
					.pipe(rename(function (path) {
						// Remove retina suffix
						path.basename = path.basename.slice(0, -3);
					}))
					.pipe(gulp.dest(options.sprite.src))
			}))
			;
	}
};
