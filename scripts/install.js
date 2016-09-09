var fs = require('fs');
var path = require('path');

function copyFileSync( source, target ) {
	var targetFile = target;
	if ( ! fs.existsSync( target ) ) {
		fs.writeFileSync(targetFile, fs.readFileSync(source));
		console.log('Copied ' + path.basename( source ));
	}
}

copyFileSync('files/.babelrc', '../../.babelrc');
copyFileSync('files/.jshintignore', '../../.jshintignore');
copyFileSync('files/gulpconfig.json', '../../gulpconfig.json');
copyFileSync('files/gulpfile.js', '../../gulpfile.js');