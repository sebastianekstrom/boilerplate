# [Z63 Boilerplate](http://zerosixthree.se)

Boilerplate for your projects made with [Grunt](http://gruntjs.com/), [Sass](http://sass-lang.com/), [jQuery](http://jquery.com//), [Modernizr](http://modernizr.com/) and [Jeet.gs](http://jeet.gs/).

## Features

* No styling at all, this is a completely bare boilerplate containing only the essential things you need
* A solid Sass and Javascript foundation
* Includes [Normalize.css](http://necolas.github.com/normalize.css/) to make browser rendering more consistent
* Includes [jQuery](https://jquery.com/) and [Modernizr](http://modernizr.com/)
* CSS helper classes
* A performance optimized print CSS
* Commonly used CSS components such as the [Media Object](http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code/) and the [Flag Object](http://goo.gl/YR3ffA)
* A Gruntfile with super fast Javascript and Sass compilation/concatenation
* Grid system from [Jeet.gs](http://jeet.gs/)
* Component based file and folder structure, to help create re-usable and maintainable CSS
* A Sass library of commonly used mixins and placeholder selectors

## Requirements

[NodeJS](http://nodejs.org/) and [Grunt](http://gruntjs.com/).

## Installing

Step 1. Install [NodeJS](http://nodejs.org/download/)

Step 2. Install [Grunt CLI](http://gruntjs.com/getting-started) with the following command:
```shell
npm install -g grunt-cli
```

Step 3. Install all the npm dependencies you need for Grunt.
```shell
cd path/to/project
npm install
```

Step 4. All done!

## Grunt tasks

There are two Grunt tasks; `grunt` and `grunt dist`.

`grunt` is the default task and will concatenate all Javascript files in to `dist/js/script__0.1.0.js` as well as running JSHint on them. The task will also concatenate all Sass files into `dist/css/style__0.1.0.css` and also run autoprefixer on the outputted CSS file to ensure all the correct vendor prefixes are included. `grunt` also uses the `grunt watch` task, so it automatically runs every time a JS/Sass file changes.

`grunt dist` is the production task and will do everything the default task does, as well as compressing the JS and CSS files.

## License

The code is available under the [MIT license](LICENSE.txt).