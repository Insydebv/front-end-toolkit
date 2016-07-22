// TODO: fix
//  // Generate sprite
//  gulp.task('sprite', ['generate-small-sprite-images'], function () {
//  var spriteData = gulp.src('./src/images/sprite/**/*.png')
// 	.pipe(plugins.newer('./site/images/sprite.png'))
// 	.pipe(plugins.spritesmith({
// 		imgName: 'sprite.png',
// 		retinaImgName: 'sprite@2x.png',
// 		cssName: 'sprite.scss',
// 		imgPath: '../images/sprite.png',
// 		retinaImgPath : '../images/sprite@2x.png',
// 		retinaSrcFilter: '**/*@2x.png'
// 	}));
// // Pipe image stream through image optimizer and onto disk
// var imgStream = spriteData.img
// 	.pipe(plugins.imagemin())
// 	.pipe(gulp.dest(imgDest));
//
// // Pipe CSS stream through CSS optimizer and onto disk
// var cssStream = spriteData.css
// 	.pipe(gulp.dest('./src/styles/'));
//
// // Return a merged stream to handle both `end` events
// return mergeStream(imgStream, cssStream);
// });