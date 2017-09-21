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
* `.eslintignore`
* `.eslintrc`
* `.jshintignore`
* `.stylelintignore`
* `.stylelintrc`
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
This toolkit provides your total assets pipeline. From gathering files from NPM dependencies, bundling Javascript, minifying images and scripts to generating CSS from Sass and injecting it into your browser with Browser Sync. 
This leaves you with time to focus on the things that really matter!
* Loads individual tasks from the webdev-toolkit for use in your project.
* Easily integrates into your gulpfile.js without breaking your existing tasks.
* Each task is stored in it's own local node module to completely separate concerns.

## Project structure
We suggest using the following default folder layout. You can change it to suit your own structure by setting the correct paths in configuration.
* node_modules
* site `appRoot`
  - css `styles.dest`
  - dist `npm.assetsDest`
    - package-name
      - file.png
      - file.woff
      - etc. `npm.assetFileTypes`
  - images `images.dest`
    - file.jpg
    - file.png
    - etc.
* src
  - images `images.src`
  - script `scripts.src`
    - app.js `put this in the 'main' property of your 'package.json' for StealJS.`
    - folder
      - file_a.js
      - file_b.js
      - etc. 
  - styles `styles.srcFolder`
    - components `styles.componentsSrc`
    - _bundle.scss `npm.stylesFile`
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
**npm**|`object`|
assetFileTypes|`"png,gif,svg,jpeg,jpg,woff,woff2,eot,ttf,otf"`|Comma separated list of filetypes
stylesFile    |`"_dist.scss"`|Filename for concatenated bower styles
src           |`"node_modules"`|Location of bower components
assetsDest    |`"site/dist"`|Where to copy bower assets for distribution
config    |`"package.json"`|Where your Bower config is located
**fonts**|`object`|
src           |`"src/fonts/**/*"`|Fonts source dir
dest|`"site/fonts"`|Distribution fonts dir
**images**|`object`|
src           |`"src/images/**"`|Images source dir
dest|`"site/images"`|Distribution images dir
**scripts**|`object`|
src|`["src/script/*.js"]`|Script sources
**styles**|`object`|
src|`["src/styles/styles.scss"]`|Stylesheets that are parsed
srcFolder        |`"src/styles"`|Stylesheets source folder
componentsSrc|`"src/styles/components"`|Location of styles components
componentsIgnore|`[]`|Indexable components to ignore, handy if you dont have any components at all.
dest         |`"site/css"`|Distribution css dir
lintConfig     |`"node_modules/scss-styleguide/.sass-lint.yml"`|Sass-lint config
lintIgnore|`["src/styles/_bower.scss", "src/styles/_sprite.scss"]`|Glob with files to be ignored by sass-lint
includePaths   |`["bower_components"]`|Sass includepaths
**utilities**|`object`|
browserSyncHtdocs |`"d:\\php\\"`|Location of Apache htdocs for Browser Sync
browserSyncOpen |`"external"`| Decide which URL to open automatically when Browsersync starts.
watchSrc |`"templates/**/*.html"`|Glob with additional folders to watch, for example your template files or php views.
**stealTools**|`object`|Options for [Steal-Tools Build](https://stealjs.com/docs/steal-tools.build.html)

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
### Front-end dependencies
Front-end dependencies are loaded via NPM, so install them into your project by running:
``$ npm install name-of-package --save``
#### Module loading with StealJS
StealJS is a module loader and builder that will help you create the next great app. It's designed to simplify dependency management while being extremely powerful and flexible.
StealJS is composed of two parts.
##### Steal - [the module loader](https://stealjs.com/docs/steal.html)
You can configure Steal by setting a steal property in `package.json`.
```json
{
  "steal": {
    "bundle": "src/script/*.js",
    "paths": {
      "yii2/*": "vendor/yiisoft/yii2/assets/*.js"
    }
  }
}
```
##### Steal-tools - [the builder](https://stealjs.com/docs/steal-tools.html)
Steal-tools is configured by setting the Stealtools property in `gulpconfig.json`.
```json
{
  "stealTools": {
    "bundleAssets": true,
    "dest": "site/dist",
    "bundleSteal": false,
    "sourceMaps": true,
    "minify": true,
    "debug": true,
    "quiet": false,
    "maxBundleRequests": 3,
    "maxMainRequests": 3
  }
}
```

#### Static assets
You can overwrite the main property of a package in your package.json, to get for example some fonts or images into your `npm.dist` folder. 
When a stylesheet is included, the relative paths to background-images and font-path etc. will be rewritten to point to the `npm.dist` folder. Styles will be bundled in `npm.stylesFile`.  
```json
{
  "dependencies": {
    "slick-carousel": "git://github.com/kenwheeler/slick.git#3ab76ec"
  },
  "overrides": {
    "slick-carousel": {
      "main": [
        "slick/css/theme.css",
        "slick/fonts/**/*",
        "slick/ajax-loader.gif"
      ]
    }
  }
}
```

### ESlint
Scripts are linted with ESlint. The pluggable linting utility for JavaScript and JSX. Configuration is done via * `.eslintrc` and ignores can be added in * `.eslintignore`.

### stylelint
Styles are linted by stylelint. A mighty, modern CSS linter and fixer that helps you avoid errors and enforce consistent conventions in your stylesheets.
Finding and loading of your configuration object is done with cosmiconfig. Starting from the current working directory, it will look for the following possible sources, in this order:

* `stylelint property in package.json`
* `.stylelintrc file`
* `stylelint.config.js file exporting a JS object`
