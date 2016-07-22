module.exports = function() {
  return {
    "paths" : {
      "app"				: "site",
      "bowerSrc"            : "bower_components",
      "bowerAssetsDest"     :  app + "/dist",
      "bowerStylesDest"     : "src/styles",
      "imgSrc"              : "src/images/**",
      "imgDest"             : "site/images",
      "fontSrc"             : "src/fonts/**/*",
      "fontDest"            : "site/fonts",
      "headScriptSrc"       : ["src/script/head/**/*.js"],
      "pageScriptSrc"       : ["src/script/page/**/*.js"],
	  "scriptSrc"           : ["src/script/**/*.js", "!headScriptSrc", "!pageScriptSrc"],
	  "scriptDest"          : "site/script",
      "stylesSrc"           : "src/styles/styles.scss",
      "stylesComponentsSrc" : 'src/styles/components/',
      "stylesDest"          : "site/css",
	  "scssLintConfig"      : __dirname__ + "/node_modules/scss-styleguide/.scss-lint.yml",
    },
    "sassIncludePaths": [],
	"bowerAssetFileTypes": "**/*.{png,gif,svg,jpeg,jpg,woff,woff2,eot,ttf,otf}",
	"bowerScriptFileName" : "bower.min.js",
    "bowerStylesFileName" : "_bower.scss",
	"headScriptFileName"  : "headscripts.min.js",
	"scriptFileName"      : "script.min.js",
  };
}
