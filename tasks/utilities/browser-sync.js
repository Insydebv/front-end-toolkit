// Browser-sync
'use strict';
const plugins = require('../../libs/plugins');

module.exports = function (gulp, options) {
	const projectPath = __dirname.toLowerCase().replace(options.utilities.browserSyncHtdocs, "")
		.replace("node_modules\\webdev-toolkit\\tasks\\utilities", "")
		.replace("\\", "/");

	return function(){
		// Serve files from the root of this project
		plugins.browserSync.init({
			open: options.utilities.browserSyncOpen,
			proxy: "localhost/" + projectPath + options.appRoot
		});
	};
};
