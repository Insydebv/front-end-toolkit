module.exports = function() {
  return {
    "paths" : {
      "appRoot"				: "site",
      "bowerSrc"            : "bower_components",
      "bowerAssetsDest"     :  "/dist",
      "bowerStylesDest"     : "src/styles",
      "imgSrc"              : "src/images/**",
      "imgDest"             : "/images",
      "fontSrc"             : "src/fonts/**/*",
      "fontDest"            : "/fonts",
      "headScriptSrc"       : ["src/script/head/**/*.js"],
      "pageScriptSrc"       : ["src/script/page/**/*.js"],
	  "scriptSrc"           : ["src/script/**/*.js", "!headScriptSrc", "!pageScriptSrc"],
	  "scriptDest"          : "/script",
      "stylesSrc"           : "src/styles/styles.scss",
      "stylesComponentsSrc" : 'src/styles/components/',
      "stylesDest"          : "/css",
	  "scssLintConfig"      : __dirname + "/node_modules/scss-styleguide/.scss-lint.yml",
    },
    "sassIncludePaths": [],
	"bowerAssetFileTypes": "**/*.{png,gif,svg,jpeg,jpg,woff,woff2,eot,ttf,otf}",
	"bowerScriptFile" : "bower.min.js",
    "bowerStylesFile" : "_bower.scss",
	"headScriptFile"  : "headscripts.min.js",
	"scriptFile"      : "script.min.js",
  };
}
