// Generate Bower SCSS from source CSS with corrected asset paths
gulp.task('bower:styles', function () {
	var bowerDist = config.appRoot;
	return gulp.src(plugins.mainBowerFiles(), {base: options.paths.bowerSrc})
		.pipe(plugins.filter([
			'**/*.css'
		]))
		.pipe(plugins.foreach(function (stream, file) {
			var dirName = path.dirname(file.path);

			return stream
				.pipe(plugins.rework(reworkUrl(function (url) {
					var fullUrl = path.join(dirName, url);
					if (fullUrl.indexOf("?") > -1) {
						fullUrl = fullUrl.split("?");
						if (fs.existsSync(fullUrl[0])) {
							bowerCopyFiles.push(fullUrl[0]);
							return slash(path.relative('css', fullUrl[0]).replace(/bower_components/, 'dist') + '?' + fullUrl[1]);
						}
					}
					else {
						if (fs.existsSync(fullUrl)) {
							bowerCopyFiles.push(fullUrl);
							return slash(path.relative('css', fullUrl).replace(/bower_components/, 'dist'));
						}
					}
					return url;
				})));
		}))
		.pipe(plugins.concat(options.bowerStylesFileName))
		.pipe(gulp.dest(options.paths.bowerStylesDest));
});