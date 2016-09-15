// Generate sprite
'use strict';
const buffer = require('vinyl-buffer');
const plugins = require('../../libs/plugins');

module.exports = (gulp, options) => () => {
	const spriteData = gulp.src(options.sprite.src)
		.pipe(plugins.spritesmith({
			imgName: options.sprite.imgName,
			retinaImgName: options.sprite.retinaImgName,
			cssName: options.sprite.cssName,
			imgPath: options.sprite.imgPath,
			retinaImgPath: options.sprite.retinaImgPath,
			retinaSrcFilter: options.sprite.retinaSrcFilter
		}));

	// Pipe image stream through image optimizer and onto disk
	const imgStream = spriteData.img
		.pipe(buffer())
		.pipe(plugins.imagemin())
		.pipe(gulp.dest(options.images.dest));

	// Pipe CSS stream through CSS optimizer and onto disk
	const cssStream = spriteData.css
		.pipe(gulp.dest(options.styles.srcFolder));

	// Return a merged stream to handle both `end` events
	return plugins.mergeStream(imgStream, cssStream);
};
