var fs = require('fs');

var source = fs.createReadStream('gulpfile.js');
var dest = fs.createWriteStream('../../gulpfile.js');

source.pipe(dest);
source.on('end', function() {
	console.log("Moved gulpfile.js to the project root dir.");
});
source.on('error', function(err) {
	console.log(err);
});
