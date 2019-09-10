// // Watch for changes
'use strict';
const plugins = require('../../libs/plugins');
const path = require('path');
// Reload  browser
function reloadBrowser(done) {
	plugins.browserSync.reload();
	done();
}
module.exports = (gulp, options) => (done) => {
	gulp.watch(options.scripts.src, gulp.series('lint:scripts'));
	gulp.watch(options.stealTools.devBundleWatch, gulp.series('steal:build', reloadBrowser));
	gulp.watch(options.styles.componentsSrc + '/**/*.scss'), gulp.series('styles:sass-index');
	gulp.watch(["!" + options.styles.srcFolder + options.npm.stylesFile, options.styles.srcFolder + '/**/*.{scss,sass}'],
		gulp.series('styles:sass', gulp.parallel('lint:styles', reloadBrowser))
	);
	gulp.watch(options.fonts.src, gulp.series('fonts:build', reloadBrowser));
	gulp.watch(options.npm.config, gulp.series('npm:assets', 'npm:styles', 'styles:sass', reloadBrowser));
	gulp.watch(options.images.src, gulp.series('images:imagemin', reloadBrowser));
	gulp.watch(options.utilities.watchSrc).on('change', gulp.series(reloadBrowser));
};
