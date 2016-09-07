// Generate sprite
var buffer = require('vinyl-buffer');

module.exports = function (gulp, plugins, options) {
	gulp.task('images:sprite', gulp.series('images:generate-small-sprite-images', function generateSprite() {

		var spriteData = gulp.src(options.sprite.src)
			.pipe(plugins.spritesmith({
				imgName: options.sprite.imgName,
				retinaImgName: options.sprite.retinaImgName,
				cssName: options.sprite.cssName,
				imgPath: options.sprite.imgPath,
				retinaImgPath: options.sprite.retinaImgPath,
				retinaSrcFilter: options.sprite.retinaSrcFilter
			}));

		// Pipe image stream through image optimizer and onto disk
		var imgStream = spriteData.img
			.pipe(buffer())
			.pipe(plugins.imagemin())
			.pipe(gulp.dest(options.images.dest));

		// Pipe CSS stream through CSS optimizer and onto disk
		var cssStream = spriteData.css
			.pipe(gulp.dest(options.styles.srcFolder));

		// Return a merged stream to handle both `end` events
		return plugins.mergeStream(imgStream, cssStream);
	}));
};