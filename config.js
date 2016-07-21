module.exports = function() {
  return {
    "paths" : {
      "imgSrc"          : "src/images/**",
      "imgDest"         : "site/images",
      "fontSrc"         : "src/fonts/**/*",
      "fontDest"        : "site/fonts",
      "headScriptSrc"   : ["src/script/head/**/*.js", "bower_components/modernizr/modernizr.js"],
      "pageScriptSrc"   : "src/script/page/**/*.js",
      "bodyScriptSrc"   : ["src/script/**/*.js", "!pageScriptSrc", "!headScriptSrc", "!src/script/script.js"],
      "scriptDest"      : "site/script",
      "scriptSrc"       : "src/script/**/*.js",
      "stylesSrc"       : "src/styles/styles.scss",
      "stylesDest"      : "site/css",
    },
    "sassIncludePaths": [],
  };
}
