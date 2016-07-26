# Front-end Toolkit
A scalable modular Gulp based assets pipeline

## Usage
`npm install https://github.com/Insydebv/front-end-toolkit.git --save-dev`

```javascript
// add to gulpfile.js
var gulp = require('gulp');
// pass along gulp reference to have tasks imported
require('front-end-toolkit')(gulp);
```

run `gulp -T` for a list of available commands

## Features
* Loads individual tasks from the front-end toolkit for use in your project.
* Easily integrates into your gulpfile.js without breaking your existing tasks.
* Each task is stored in it's own local node module to completely separate concerns.
* Gulp
* Feature 2
* Feature 3
* etc...

## Options
Put these in a config object.

| Property     | Default Value     | Description
| ------------ | ----------------- | --------------------------------------------------------
| path         | `./tasks/`        | Path to directory from which to load your tasks
| separator    | `:`               | Task name separator, your tasks would be named, e.g. `foo:bar:baz` for `./tasks/foo/bar/baz.js`
| arguments    | `[]`              | Additional arguments to pass to your task function
| passGulp     | `true`            | Whether to pass Gulp instance as a first argument to your task function
| passCallback | `true`            | Whether to pass task callback function as a last argument to your task function
| gulp         | `require('gulp')` | You could pass your existing Gulp instance if you have one


## Babel
By default scripts are parsed by `gulp-babel`. 
You can supply a configuration by creating a `.babelrc` file in the root of your project.
```json
{
  "presets": ["es2015-without-strict"],
  "compact": true
}
```