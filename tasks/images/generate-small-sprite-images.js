/* TODO: fix
Generate the x1 images from the big ones
gulp.task('generate-small-sprite-images', function () {
	return gulp.src('./src/images/sprite/*@2x.png')
		.pipe(plugins.foreach(function(stream, file) {
			// Get path of small image
			var name = file.path;
			var smallImgPath = name.replace("@2x", "");
			// Only resize if the small image does not exist
			return stream
				.pipe(plugins.ignore.exclude(fs.existsSync(smallImgPath)))
				.pipe(plugins.imageResize({
					width: '50%',
					height: '50%'
				}))
				.pipe(plugins.rename(function(path) {
					path.basename = path.basename.slice(0, -3);  //remove @2x label
				}))
				.pipe(gulp.dest('./src/images/sprite/'))
		}))
		;
});
	*/