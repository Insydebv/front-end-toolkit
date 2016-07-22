// Generate Bower SCSS from source CSS with corrected asset paths
var path = require('path');
var slash = require('slash');
var fs = require('fs');

module.exports = {
	fn: function (gulp, plugins, options, callback) {

		var bowerCopyFiles = [];
		var bowerAssetsDest = options.paths.bowerAssetsDest;

		if (bowerAssetsDest.substring(0, 1) == '/') {
			bowerAssetsDest = bowerAssetsDest.substring(1);
		}

		return gulp.src(plugins.mainBowerFiles(), {base: options.paths.bowerSrc})
			.pipe(plugins.filter([
				'**/*.css'
			]))
			.pipe(plugins.flatmap(function (stream, file) {
				var dirName = path.dirname(file.path);

				return stream
					.pipe(plugins.rework(plugins.reworkPluginUrl(function (url) {
						var fullUrl = path.join(dirName, url);
						if (fullUrl.indexOf("?") > -1) {
							fullUrl = fullUrl.split("?");
							if (fs.existsSync(fullUrl[0])) {
								bowerCopyFiles.push(fullUrl[0]);
								return slash(path.relative('css', fullUrl[0]).replace(/bower_components/, bowerAssetsDest) + '?' + fullUrl[1]);
							}
						}
						else {
							if (fs.existsSync(fullUrl)) {
								bowerCopyFiles.push(fullUrl);
								return slash(path.relative('css', fullUrl).replace(/bower_components/, bowerAssetsDest));
							}
						}
						return url;
					})));
			}))
			.pipe(plugins.concat(options.bowerStylesFile))
			.pipe(gulp.dest(options.paths.bowerStylesDest));
	}
};