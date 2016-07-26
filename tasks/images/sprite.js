// Generate sprite
var spritesmith = require('gulp.spritesmith');
var mergeStream = require('merge-stream');

module.exports = {
	dep: ['images:generate-small-sprite-images'],
	fn: function (gulp, plugins, options) {
		var spriteData = gulp.src(options.sprite.src + "**/*.png")
			.pipe(plugins.newer(options.sprite.dest))
			.pipe(spritesmith({
				imgName: options.sprite.dest,
				retinaImgName: options.sprite.retinaDest,
				cssName: options.sprite.scssDest,
				imgPath: options.sprite.imgPath,
				retinaImgPath: options.sprite.retinaImgPath,
				retinaSrcFilter: options.sprite.retinaSrcFilter
			}));

		return spriteData.pipe(gulp.dest('site'));
		/*
		// Pipe image stream through image optimizer and onto disk
		var imgStream = spriteData.img.pipe(plugins.imagemin()).pipe(gulp.dest(options.images.dest));

		// Pipe CSS stream through CSS optimizer and onto disk
		var cssStream = spriteData.css.pipe(gulp.dest(options.styles.srcFolder));

		// Return a merged stream to handle both `end` events
		return mergeStream(imgStream, cssStream);*/
	}
};