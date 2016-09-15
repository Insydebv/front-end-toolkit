// Generate Bower SCSS from source CSS with corrected asset paths
'use strict';
const plugins = require('../../libs/plugins');
const path = require('path');
const slash = require('slash');
const fs = require('fs');
const bowerCopyFiles = [];

module.exports = function (gulp, options) {
	var bowerAssetsDest = options.bower.assetsDest;
	if (bowerAssetsDest.substring(0, 1) == '/') {
		bowerAssetsDest = bowerAssetsDest.substring(1);
	}
	// Substract appRoot to get the correct path for the stylesheet
	bowerAssetsDest = bowerAssetsDest.replace(options.appRoot, "");

	return function(){
		return gulp.src(plugins.mainBowerFiles(), {base: options.bower.src})
			.pipe(plugins.filter([
				'**/*.css'
			]))
			.pipe(plugins.flatmap(function (stream, file) {
				var dirName = path.dirname(file.path);

				return stream
					.pipe(plugins.rework(plugins.reworkPluginUrl(function (url) {
						var fullUrl = path.join(dirName, url);
						if (fullUrl.indexOf("?") > -1) {
							// Handle paths with ?
							fullUrl = fullUrl.split("?");
							if (fs.existsSync(fullUrl[0])) {
								bowerCopyFiles.push(fullUrl[0]);
								return slash(path.relative('css', fullUrl[0]).replace(/bower_components/, bowerAssetsDest) + '?' + fullUrl[1]);
							}
						}
						else if (fullUrl.indexOf("#") > -1) {
							// Handle paths with #
							fullUrl = fullUrl.split("#");
							if (fs.existsSync(fullUrl[0])) {
								bowerCopyFiles.push(fullUrl[0]);
								return slash(path.relative('css', fullUrl[0]).replace(/bower_components/, bowerAssetsDest) + '?' + fullUrl[1]);
							}
						}
						else {
							// Handle clean paths
							if (fs.existsSync(fullUrl)) {
								bowerCopyFiles.push(fullUrl);
								return slash(path.relative('css', fullUrl).replace(/bower_components/, bowerAssetsDest));
							}
						}
						return url;
					})));
			}))
			.pipe(plugins.concat(options.bower.stylesFile))
			.pipe(gulp.dest(options.styles.srcFolder));
	};
};