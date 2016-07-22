// Build everything
var gulpSequence = require('gulp-sequence');
module.exports = {
	nativeTask: function (gulp) {
		gulpSequence(['bower', 'styles'], 'fonts', 'scripts', gulp)
	}
};