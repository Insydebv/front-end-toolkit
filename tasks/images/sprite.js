// Generate sprite
module.exports = {
	dep: ['images:generate-small-sprite-images'],
	fn: function (gulp, plugins, options) {
		var spriteData = gulp.src(options.sprite.src)
			.pipe(plugins.newer(options.sprite.dest))
			.pipe(plugins.spritesmith({
				imgName: options.sprite.imgName,
				retinaImgName: options.sprite.retinaImgName,
				cssName: options.sprite.cssName,
				imgPath: options.sprite.imgPath,
				retinaImgPath: options.sprite.retinaImgPath,
				retinaSrcFilter: options.sprite.retinaSrcFilter
			}));

		// Pipe image stream through image optimizer and onto disk
		var imgStream = spriteData.img.pipe(plugins.imagemin()).pipe(gulp.dest(options.images.dest));

		// Pipe CSS stream through CSS optimizer and onto disk
		var cssStream = spriteData.css.pipe(gulp.dest(options.styles.srcFolder));

		// Return a merged stream to handle both `end` events
		return plugins.mergeStream(imgStream, cssStream);
	}
};