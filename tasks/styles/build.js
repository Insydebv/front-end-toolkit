// Build styles
var gulpSequence = require('gulp-sequence');
module.exports = {
	nativeTask: function (gulp) {
		gulpSequence(['lint:styles', 'styles:sass-index', 'styles:sass'], gulp)
	}
};