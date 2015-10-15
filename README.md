# [Z63 Boilerplate](http://zerosixthree.se)

[![Build Status](https://api.travis-ci.org/sebastianekstrom/boilerplate.svg)](https://travis-ci.org/sebastianekstrom/boilerplate)
[![devDependency Status](https://david-dm.org/sebastianekstrom/boilerplate/dev-status.svg)](https://david-dm.org/sebastianekstrom/boilerplate#info=devDependencies)

Boilerplate for your projects made with [Gulp](http://gulpjs.com/), [Sass](http://sass-lang.com/), [Jeet.gs](http://jeet.gs/) and [Browserify](http://browserify.org/).

## Features

* No styling at all, this is a completely bare boilerplate containing only the essential things you need
* A solid Sass and Javascript structure and starting point
* CSS helper classes
* Commonly used CSS components such as the [Media Object](http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code/) and the [Flag Object](http://goo.gl/YR3ffA)
* A Gulpfile with all your basic needs (Sass/Browserify, local server, minification)
* Component based file and folder structure to help create maintainable CSS
* A Sass library of commonly used mixins
* Included libraries:
    * [Browserify](http://browserify.org/) to handle Javascript dependencies
    * [Normalize.css](http://necolas.github.com/normalize.css/) to make browser rendering more consistent
    * [jQuery](https://jquery.com/)
    * [Modernizr](http://modernizr.com/)
    * [Jeet.gs](http://jeet.gs/) grid system
    * [.editorconfig](http://editorconfig.org/) to help maintain consistent coding styles
    * Print CSS from [HTML5BP](https://github.com/h5bp/html5-boilerplate)

## Download

- [Download the latest release](https://github.com/sebastianekstrom/boilerplate/archive/v1.8.zip)
- Clone the repo: `git clone https://github.com/sebastianekstrom/boilerplate.git`
- Install with [Bower](http://bower.io): `bower install Z63-Boilerplate`

## Getting started

Step 1. Install [NodeJS](http://nodejs.org/download/)

Step 2. Install [Gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)
```shell
npm install --global gulp
```

Step 3. Install the npm dependencies
```shell
cd path/to/project
npm install
```

Step 4. Run Gulp's default task
```shell
gulp
```

## Gulp tasks

There are two Gulp tasks; `gulp` and `gulp --production`.

`gulp` is the default task which will concatenate all Javascript files in to `dist/js/script.js`. The task will also concatenate the Sass files into `dist/css/style.css`, as well as running autoprefixer on the outputted CSS. It will also start a local server, as well as watching all the Sass/JS files and autoreload the browser upon change.

`gulp --production` is the production task and will do everything the default task does, as well as compressing the JS and CSS files.

## License

The code is available under the [MIT license](LICENSE.txt).
