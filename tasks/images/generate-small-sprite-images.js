// Generate the x1 images from the big ones
module.exports = {
	fn: function (gulp, plugins, options) {
		return gulp.src(options.sprite.src + "/*" + options.sprite.retinaSuffix + ".png")
			.pipe(plugins.foreach(function (stream, file) {

				// Get path of small image
				var name = file.path;
				var smallImgPath = name.replace(options.sprite.retinaSuffix, "");

				// Only resize if the small image does not exist
				return stream
					.pipe(plugins.ignore.exclude(fs.existsSync(smallImgPath)))
					.pipe(plugins.imageResize({
						width: '50%',
						height: '50%'
					}))
					.pipe(plugins.rename(function (path) {
						// Remove retina suffix
						path.basename = path.basename.slice(0, -3);
					}))
					.pipe(gulp.dest(options.sprite.src))
			}))
			;
	}
};
