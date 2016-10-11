'use strict';
const plugins = require('./libs/plugins');
// let jsHintErrorReporter = require('./libs/jsHintErrorReporter');
// let onError = require('./libs/onError');
//

module.exports = (gulp, options) => {
// });
// module.exports = function (gulp, options) {

	// Assign options
	const defaultOptions = require(__dirname + '/config.json');
	options = plugins.deepAssign(defaultOptions, options);

	 // Load tasks

	 // Bower tasks
	 const bowerAssets = require('./tasks/bower/assets')(gulp, options);
	 gulp.task("bower:assets", bowerAssets)
	 const bowerScripts = require('./tasks/bower/scripts')(gulp, options);
	 gulp.task("bower:scripts", bowerScripts)
	 const bowerStyles = require('./tasks/bower/styles')(gulp, options);
	 gulp.task("bower:styles", bowerStyles)
	 gulp.task('bower:build', gulp.parallel('bower:assets', 'bower:scripts', 'bower:styles'));

	 // Clean
	 const cleanBower = require('./tasks/clean/bower')(gulp, options);
	 gulp.task('clean:bower', cleanBower);
	 const cleanFonts = require('./tasks/clean/fonts')(gulp, options);
	 gulp.task('clean:fonts', cleanFonts);
	 const cleanImages = require('./tasks/clean/images')(gulp, options);
	 gulp.task('clean:images', cleanImages);
	 const cleanScripts = require('./tasks/clean/scripts')(gulp, options);
	 gulp.task('clean:scripts', cleanScripts);
	 const cleanSprite = require('./tasks/clean/sprite')(gulp, options);
	 gulp.task('clean:sprite', cleanSprite);
	 const cleanStyles = require('./tasks/clean/styles')(gulp, options);
	 gulp.task('clean:styles', cleanStyles);
	 gulp.task('clean:all', gulp.parallel('clean:bower', 'clean:fonts', 'clean:images', 'clean:scripts', 'clean:styles', 'clean:sprite'));

	 // Fonts
	 const fontsBuild = require('./tasks/fonts/build')(gulp, options);
	 gulp.task('fonts:build', fontsBuild);

	 // Images
	 const imagesGenerateSmallSpriteImages = require('./tasks/images/generate-small-sprite-images')(gulp, options);
	 gulp.task('images:generate-small-sprite-images', imagesGenerateSmallSpriteImages);
	 const imagesImagemin = require('./tasks/images/imagemin')(gulp, options);
	 gulp.task('images:imagemin', imagesImagemin);
	 const imagesSprite = require('./tasks/images/sprite')(gulp, options);
	 gulp.task('images:sprite', imagesSprite);

	 // Lint
	 const lintScripts = require('./tasks/lint/scripts')(gulp, options);
	 gulp.task('lint:scripts', lintScripts);
	 const lintStyles = require('./tasks/lint/styles')(gulp, options);
	 gulp.task('lint:styles', lintStyles);

	 // Scripts
	 const scriptsBodyScripts = require('./tasks/scripts/bodyscripts')(gulp, options);
	 gulp.task('scripts:bodyscripts', scriptsBodyScripts);
	 const scriptsHeadScripts = require('./tasks/scripts/headscripts')(gulp, options);
	 gulp.task('scripts:headscripts', scriptsHeadScripts);
	 const scriptsPageScripts = require('./tasks/scripts/pagescripts')(gulp, options);
	 gulp.task('scripts:pagescripts', scriptsPageScripts);
	 const scriptsTestScripts = require('./tasks/scripts/testscripts')(gulp, options);
	 gulp.task('scripts:testscripts', scriptsTestScripts);
	 gulp.task('scripts:build', gulp.parallel('scripts:bodyscripts', 'scripts:headscripts', 'scripts:pagescripts', 'lint:scripts'));

	 // Styles
	 const stylesSassIndex = require('./tasks/styles/sass-index')(gulp, options);
	 gulp.task('styles:sass-index', stylesSassIndex);
	 const stylesSass = require('./tasks/styles/sass')(gulp, options);
	 gulp.task('styles:sass', stylesSass);
	 gulp.task('styles:build', gulp.series('styles:sass-index', 'styles:sass', 'lint:styles'));

	 // require('./tasks/styles/build')(gulp, options);

	 // Utilities
	 const utilitiesBrowserSync = require('./tasks/utilities/browser-sync')(gulp, options);
	 gulp.task('utilities:browser-sync', utilitiesBrowserSync);
	 const utilitiesWatch = require('./tasks/utilities/watch')(gulp, options);
	 gulp.task('utilities:watch', utilitiesWatch);

	 // Combined tasks:
	 // Build
	 gulp.task('build', gulp.series('clean:all', gulp.parallel(gulp.series('bower:build', 'images:sprite', 'styles:build'), 'fonts:build', 'images:imagemin', 'scripts:build')));

	 // Default
	 gulp.task('default', gulp.series('build', 'utilities:watch', 'utilities:browser-sync'));

	 // Test
	 gulp.task('test', gulp.parallel('lint:scripts', 'lint:styles'));


	return options;
};