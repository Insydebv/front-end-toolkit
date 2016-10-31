// Generate the x1 images from the big ones
'use strict';
const fs = require('fs');
const plugins = require('../../libs/plugins');
const onError = require('../../libs/onError');

module.exports = (gulp, options) => () => {
	return gulp.src(options.sprite.srcFolder + "/*" + options.sprite.retinaSuffix + ".png")
		.pipe(plugins.plumber({
			errorHandler: onError
		}))
		.pipe(plugins.flatmap(function (stream, file) {

			// Get path of small image
			let name = file.path;
			let smallImgPath = name.replace(options.sprite.retinaSuffix, "");

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
				.pipe(gulp.dest(options.sprite.srcFolder))
		}))
		;
};
