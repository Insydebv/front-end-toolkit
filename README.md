# Front-end Toolkit
A scalable modular Gulp based assets pipeline

## Usage
`npm install https://github.com/Insydebv/front-end-toolkit.git --save-dev`

```javascript
// Add to your gulpfile.js

// Require Gulp
var gulp = require('gulp');

// Import front-end toolkit tasks
require('front-end-toolkit')(gulp);

```

## Features
* Loads individual tasks from the front-end toolkit for use in your project.
* Easily integrates into your gulpfile.js without breaking your existing tasks.
* Each task is stored in it's own local node module to completely separate concerns.


## Available tasks
`gulp` The default task. Use this for front-end development. Builds your assets, starts a watcher en live reloads changes in the browser using Browser-Sync.

`gulp build` Use this when building your project. Mostly used by back-end developers and on Jenkins CI.

`gulp test` Use this to run both the styles and script linter.

run `gulp -T` for a list of all available tasks

## Options
Options are set by passing an options object to the require tasks command.
```javascript
// Set options
var options = {
	"styles": {
		"includePaths": ["bower_components/foundation-sites/scss"],
	}
};

// Import front-end toolkit tasks and pass options
require('front-end-toolkit')(gulp, options);

```

**Property**|**Default value**|**Description**
-----|-----|-----
**appRoot**|`"site/"`|Main dist folder followed by a forward slash
**htdocs** |`"d:\\php\\"`|Location of Apache htdocs
**bower**|`object`|
assetFileTypes|`"png,gif,svg,jpeg,jpg,woff,woff2,eot,ttf,otf"`|Comma separated list of filetypes
scriptFile    |`"bower.min.js"`|Filename for concatenated bower scripts
stylesFile    |`"_bower.scss"`|Filename for concatenated bower styles
src           |`"bower_components"`|Location of bower components
assetsDest    |`"site/dist"`|Where to copy bower assets for distribution
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
lintIgnore|`[]`|Glob with files to be ignored by sass-lint
includePaths   |`["bower_components"]`|Sass includepaths
outputStyle    |`"compressed"`|Sass outputstyle
**sprite**|`object`|
src|`"src/images/sprite"`|Sprite source folder
dest|`"site/images/sprite.png"`|Non retina sprite image location
retinaDest|`"site/images/sprite@2x.png"`|Retina sprite image location
scssDest|`"../src/styles/_sprite.scss"`|Sprite SCSS source destination (include in styles.scss)
imgPath|`"../images/sprite.png"`|Non retina sprite image path for CSS
retinaImgPath|`"../images/sprite@2x.png"`|Retina sprite image path for CSS
retinaSrcFilter|`"**/*@2x.png"`|Retina SRC filter
retinaSuffix |`"@2x"`|Retina files suffix

## Babel
By default scripts are parsed by `gulp-babel`. 
You can supply a configuration by creating a `.babelrc` file in the root of your project.
```json
{
  "presets": ["es2015-without-strict"],
  "compact": true
}
```