// Build everything
var gulpSequence = require('gulp-sequence');
module.exports = {
	nativeTask: function (gulp) {
		gulpSequence(['clean:all', 'bower:build', 'styles:build'], 'fonts:build', 'imagemin', 'scripts:build', gulp)
	}
};