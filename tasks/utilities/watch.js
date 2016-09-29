// // Watch for changes
'use strict';
const plugins = require('../../libs/plugins');

// Reload  browser
function reloadBrowser(done) {
	plugins.browserSync.reload();
	done();
}

module.exports = (gulp, options) => (done) => {
	gulp.watch(options.scripts.bodyScriptSrc, gulp.series('scripts:bodyscripts', gulp.parallel('lint:scripts', reloadBrowser)));
	gulp.watch(options.scripts.headScriptSrc, gulp.series('scripts:headscripts', gulp.parallel('lint:scripts', reloadBrowser)));
	gulp.watch(options.scripts.pageScriptSrc, gulp.series('scripts:pagescripts', gulp.parallel('lint:scripts', reloadBrowser)));
	gulp.watch(options.styles.componentsSrc + '/**/*.scss', gulp.series('styles:sass-index'));
	gulp.watch([
		options.styles.srcFolder + '/**/*.{scss, sass}',
		'!**/' + options.sprite.cssName,
		"!**/" + options.bower.stylesFile
	], gulp.series('styles:sass', 'lint:styles'));
	gulp.watch(options.fonts.src, gulp.series('fonts:build', reloadBrowser));
	gulp.watch(options.bower.config, gulp.parallel('bower:assets', 'bower:scripts', gulp.series('bower:styles', 'styles:sass')));
	gulp.watch([
		options.images.src,
		'!' + options.sprite.srcFolder + '{,/**}'
	], gulp.series('images:imagemin'));
	gulp.watch(options.sprite.srcFolder + '/*' + options.sprite.retinaSuffix + '.png', gulp.series('images:sprite', 'styles:sass'));
	gulp.watch(options.utilities.watchSrc, gulp.series(reloadBrowser));
	done();
};
