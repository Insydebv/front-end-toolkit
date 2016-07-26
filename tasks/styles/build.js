// Build styles
var gulpSequence = require('gulp-sequence');
module.exports = {
	nativeTask: function (gulp) {
		gulpSequence(['styles:sass-index', 'styles:sass'], gulp)
	}
};