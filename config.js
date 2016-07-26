module.exports = function () {
	return {
		// Global
		"appRoot"            	: "site/",
		"htdocs"             	: "d:\\php\\",
		"bower": {
			"assetFileTypes"	: "png,gif,svg,jpeg,jpg,woff,woff2,eot,ttf,otf",
			"scriptFile"    	: "bower.min.js",
			"stylesFile"    	: "_bower.scss",
			"src"           	: "bower_components",
			"assetsDest"    	: "site/dist",
		},
		"fonts": {
			"src"            	: "src/fonts/**/*",
			"dest"           	: "site/fonts",
		},
		"images": {
			"src"             	: "src/images/**",
			"dest"            	: "site/images",
		},
		"scripts": {
			"bodyScriptSrc"     : ["src/script/*.js"],
			"headScriptSrc"     : ["src/script/head/**/*.js"],
			"pageScriptSrc"     : ["src/script/page/**/*.js"],
			"dest"	         	: "site/script",
			"headScriptFile"    : "headscripts.min.js",
			"bodyScriptFile"    : "script.min.js",
		},
		"styles": {
			"src"          		: "src/styles/styles.scss",
			"srcFolder"        	: "src/styles",
			"componentsSrc"		: 'src/styles/components/',
			"dest"         		: "site/css",
			"lintConfig"     	: "node_modules/scss-styleguide/.scss-lint.yml",
			"includePaths"   	: [],
			"outputStyle"    	: "compressed",
		},
		"sprite": {
			"src"			 	: "src/images/sprite",
			"dest"		 		: "site/images/sprite.png",
			"imgName"		 	: "sprite.png",
			"retinaImgName"		: "sprite@2x.png",
			"cssName"		 	: "_sprite.scss",
			"imgPath"		 	: "../images/sprite.png",
			"retinaImgPath"		: "../images/sprite@2x.png",
			"retinaSrcFilter"	: "**/*@2x.png",
			"retinaSuffix" 		: "@2x",
		},
	};
}

