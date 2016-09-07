# Webdev Toolkit
A scalable modular Gulp based assets pipeline brought to you by the people at Insyde.

## Usage
`npm install webdev-toolkit --save-dev`

```javascript
// Add to your gulpfile.js

// Optional json file with configuration
var options = require('./gulpconfig.json');

// Require Gulp
var gulp = require('gulp');

// Import front-end toolkit tasks
require('webdev-toolkit')(gulp, options);

```

## Features
This toolkit provides your total assets pipeline. From gathering files from Bower dependencies, generating sprite images, minifying images and scripts to generating CSS from Sass and injecting it into your browser with Browser Sync. 
This leaves you with time to focus on the things that really matter!
* Loads individual tasks from the webdev-toolkit for use in your project.
* Easily integrates into your gulpfile.js without breaking your existing tasks.
* Each task is stored in it's own local node module to completely separate concerns.


## Available tasks
`gulp` The default task. Use this for front-end development. Builds your assets, starts a watcher en live reloads changes in the browser using Browser-Sync.

`gulp build` Use this when building your project. Mostly used by back-end developers and on Jenkins CI.

`gulp test` Use this to run both the styles and script linter.

run `gulp -T` for a list of all available tasks

Run tasks with the `--production` handle on your build system. This ensures that hard errors are thrown (so builds fail on erros) and stuff gets minified.
For example: `gulp build --production`

## Options
You can configure the tool by providing a .json configuration file. Make sure you load the config as seen in the example above.
```json
// Set options
{
  "appRoot"            	: "site/",
    "bower": {
      "assetFileTypes"	: "png,gif,svg,jpeg,jpg,woff,woff2,eot,ttf,otf",
      "scriptFile"    	: "bower.min.js",
      "stylesFile"    	: "_bower.scss",
      "src"           	: "bower_components",
      "assetsDest"    	: "site/dist",
      "config"          : "bower.json"
  }
}
```

**Property**|**Default value**|**Description**
-----|-----|-----
**appRoot**|`"site/"`|Main dist folder followed by a forward slash
**bower**|`object`|
assetFileTypes|`"png,gif,svg,jpeg,jpg,woff,woff2,eot,ttf,otf"`|Comma separated list of filetypes
scriptFile    |`"bower.min.js"`|Filename for concatenated bower scripts
stylesFile    |`"_bower.scss"`|Filename for concatenated bower styles
src           |`"bower_components"`|Location of bower components
assetsDest    |`"site/dist"`|Where to copy bower assets for distribution
config    |`"bower.json"`|Where your Bower config is located
**fonts**|`object`|
src           |`"src/fonts/**/*"`|Fonts source dir
dest|`"site/fonts"`|Distribution fonts dir
**images**|`object`|
src           |`"src/images/**"`|Images source dir
dest|`"site/images"`|Distribution images dir
**scripts**|`object`|
bodyScriptSrc|`["src/script/*.js"]`|Bodyscript source
headScriptSrc|`["src/script/head/**/*.js"]`|Headscript source
pageScriptSrc|`["src/script/page/**/*.js"]`|Pagescript source
dest|`"site/script"`|Distribution script dir
headScriptFile|`"headscripts.min.js"`|Headscripts are concatenated into this file
bodyScriptFile|`"script.min.js"`|Bodyscripts are concatenated into this file
**styles**|`object`|
src|`["src/styles/styles.scss"]`|Stylesheets that are parsed
srcFolder        |`"src/styles"`|Stylesheets source folder
componentsSrc|`"src/styles/components"`|Location of styles components
dest         |`"site/css"`|Distribution css dir
lintConfig     |`"node_modules/scss-styleguide/.sass-lint.yml"`|Sass-lint config
lintIgnore|`["src/styles/_bower.scss", "src/styles/_sprite.scss"]`|Glob with files to be ignored by sass-lint
includePaths   |`["bower_components"]`|Sass includepaths
**sprite**|`object`|
src|`"src/images/sprite/*.png"`|Sprite source files
srcFolder"|`"src/images/sprite"`|Sprite source folder
imgName|`"sprite.png"`|Non retina sprite image name
retinaImgName|`"sprite@2x.png"`|Retina sprite image name
cssName|`"../src/styles/_sprite.scss"`|Sprite SCSS source destination (include in styles.scss)
imgPath|`"../images/sprite.png"`|Non retina sprite image path for CSS
retinaImgPath|`"../images/sprite@2x.png"`|Retina sprite image path for CSS
retinaSrcFilter|`"src/images/sprite/*@2x.png"`|Retina SRC filter
retinaSuffix |`"@2x"`|Retina files suffix
**utilities**|`object`|
browserSyncHtdocs |`"d:\\php\\"`|Location of Apache htdocs for Browser Sync
browserSyncOpen |`"external"`| Decide which URL to open automatically when Browsersync starts.
watchSrc |`"templates/**/*.html"`|Glob with additional folders to watch, for example your template files or php views.

### Bower
Configuring bower can be done via `bower.json` and `.bowerrc` files in the root of your project.
### Babel
By default scripts are parsed by `gulp-babel`. 
You can supply a configuration by creating a `.babelrc` file in the root of your project.
```json
{
  "presets": ["es2015-without-strict"],
  "compact": true,
  "ignore": [],
  "only": []
}
```
### Jshint
Scripts are run through Jshint. You can configure ignores by providing a `.jshintignore` file in the root of your project.

### Sass Lint
Styles are linted by Sass-lint based on the default rules from https://github.com/Insydebv/scss-styleguide.
You can provide your own configuration by setting the path to your `.sass-lint.yml` in `styles.lintConfig` in your json configuration file.
```json
{
  "styles": {
    "lintConfig" : "node_modules/scss-styleguide/.sass-lint.yml"
  }
}
```