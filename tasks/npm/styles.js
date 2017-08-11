// Generate NPM SCSS from source CSS with corrected asset paths
'use strict';
const plugins = require('../../libs/plugins');
const path = require('path');
const slash = require('slash');
const fs = require('fs');
const npmCopyFiles = [];

module.exports = function (gulp, options) {
	var npmAssetsDest = options.npm.assetsDest;
	if (npmAssetsDest.substring(0, 1) == '/') {
		npmAssetsDest = npmAssetsDest.substring(1);
	}
	// Substract appRoot to get the correct path for the stylesheet
	npmAssetsDest = npmAssetsDest.replace(options.appRoot, "");

	return function(){
		return gulp.src(plugins.npmfiles({
      nodeModulesPath: options.npm.src,
      packageJsonPath: options.npm.config,
    }))
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
								npmCopyFiles.push(fullUrl[0]);
								return slash(path.relative('css', fullUrl[0]).replace(/node_modules/, npmAssetsDest) + '?' + fullUrl[1]);
							}
						}
						else if (fullUrl.indexOf("#") > -1) {
							// Handle paths with #
							fullUrl = fullUrl.split("#");
							if (fs.existsSync(fullUrl[0])) {
								npmCopyFiles.push(fullUrl[0]);
								return slash(path.relative('css', fullUrl[0]).replace(/node_modules/, npmAssetsDest) + '?' + fullUrl[1]);
							}
						}
						else {
							// Handle clean paths
							if (fs.existsSync(fullUrl)) {
								npmCopyFiles.push(fullUrl);
								return slash(path.relative('css', fullUrl).replace(/node_modules/, npmAssetsDest));
							}
						}
						return url;
					})));
			}))
			.pipe(plugins.concat(options.npm.stylesFile))
			.pipe(gulp.dest(options.styles.srcFolder));
	};
};