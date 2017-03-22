# Webdev Toolkit
A scalable modular Gulp based assets pipeline.

## Getting Started

#### 1. Update your Node JS installation
https://nodejs.org/en/

#### 2. Install gulp globally:
__If you have previously installed a version of gulp globally, please run `npm rm -g gulp`
to make sure your old version doesn't collide with gulp-cli.__
```sh
$ npm install -g gulp-cli
```

#### 3. Initialize in your project directory:
```sh
$ npm init
```

#### 4. Install the Webdev Toolkit in your project devDependencies:
```sh
$ npm install webdev-toolkit --save-dev
```
If you don't have some of the required files, the toolkit will create them for you:
* `.babelrc`
* `.jshintignore`
* `gulpconfig.json`
* `gulpfile.js`

#### 5. Load the toolkit in your Gulpfile
```js
// Add to your gulpfile.js

// Require Gulp
var gulp = require('gulp');

// Optional json file with configuration
var options = require('./gulpconfig.json');

// Import front-end toolkit tasks
require('webdev-toolkit')(gulp, options);
```

## Features
This toolkit provides your total assets pipeline. From gathering files from Bower dependencies, generating sprite images, minifying images and scripts to generating CSS from Sass and injecting it into your browser with Browser Sync. 
This leaves you with time to focus on the things that really matter!
* Loads individual tasks from the webdev-toolkit for use in your project.
* Easily integrates into your gulpfile.js without breaking your existing tasks.
* Each task is stored in it's own local node module to completely separate concerns.

## Project structure
We suggest using the following default folder layout. You can change it to suit your own structure by setting the correct paths in configuration.
* bower_components `bower.src`
* node_modules
* site `appRoot`
  - css `styles.dest`
  - dist `bower.assetsDest`
    - package-name
      - file.png
      - file.woff
      - etc. `bower.assetFileTypes`
  - images `images.dest`
    - file.jpg
    - sprite.png `sprite.imgName`
    - sprite@2x.png `sprite.retinaImgName`
  - script `scripts.dest`
* src
  - images `images.scr`
    - sprite `sprite.srcFolder`
      - image@2x.png
  - script
    - body `scripts.bodyScriptSrc`
      - file.js
      - these get concatenated into script.min.js `scripts.bodyScriptFile`
    - head `scripts.headScriptSrc`
      - file.js
      - these get concatenated into headscripts.min.js `scripts.bodyScriptFile`
    - page `scripts.pageScriptSrc`
      - file.js
      - files in the root of this folder are not concatenated, just parsed to .min.js
      - folder
        - file_a.js
        - file_b.js
        - these get concatenated into folder.min.js
    - etc. 
  - styles `styles.srcFolder`
    - components `styles.componentsSrc`
    - _sprite.scss `sprite.cssName`
    - _bower.scss `bower.stylesFile`
    - styles.scss `styles.src`
* templates `utilities.watchSrc`
  - file.html 

## Available tasks
`gulp` The default task. Use this for front-end development. Builds your assets, starts a watcher and live reloads changes in the browser using Browser-Sync.

`gulp build` Use this when building your project. Mostly used by back-end developers and on Jenkins CI.

`gulp test` Use this to run both the styles and script linter.

run `gulp -T` for a list of all available tasks

Run tasks with the `--production` handle on your build system. This ensures that hard errors are thrown (so builds fail on errors) and stuff gets minified.
For example: `gulp build --production`

## Options
You can configure the toolkit by setting options in `gulpconfig.json`
```json
// gulpconfig.json

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
### Available options
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
pageScriptSrc|`["src/script/page/**/*.js"]`|Pagescript sources
dest|`"site/script"`|Distribution script dir
headScriptFile|`"headscripts.min.js"`|Headscripts are concatenated into this file
bodyScriptFile|`"script.min.js"`|Bodyscripts are concatenated into this file
**styles**|`object`|
src|`["src/styles/styles.scss"]`|Stylesheets that are parsed
srcFolder        |`"src/styles"`|Stylesheets source folder
componentsSrc|`"src/styles/components"`|Location of styles components
componentsIgnore|`[]`|Indexable components to ignore, handy if you dont have any components at all.
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

### Autoprefixer
Autoprefixer uses Browserslist, so you can specify the browsers you want to target in your project by queries like last 2 versions or > 5%.
You can configure autoprefixer by setting the `browserslist` key in your `package.json` or `browserlist` config.
```json
{
  "browserslist": [
    "> 1%",
    "last 2 versions"
  ]
}
```
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