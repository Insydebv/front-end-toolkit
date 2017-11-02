var fs = require('fs');
var path = require('path');

function copyFileSync(source, target) {
  var targetFile = target;
  if (!fs.existsSync(target)) {
    fs.writeFileSync(targetFile, fs.readFileSync(source));
    console.log('Copied ' + path.basename(source));
  }
}

copyFileSync('files/.webdevtoolkitrc', '../../.webdevtoolkitrc');
copyFileSync('files/gulpfile.js', '../../gulpfile.js');
copyFileSync('files/.eslintignore', '../../.eslintignore');
copyFileSync('files/.eslintrc', '../../.eslintrc');
copyFileSync('files/.stylelintignore', '../../.stylelintignore');
copyFileSync('files/stylelint.config.js', '../../stylelint.config.js');
