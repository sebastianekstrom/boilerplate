Z63 Boilerplate
===========
Boilerplate for your projects made with [Grunt](http://gruntjs.com/), [Sass](http://sass-lang.com/), [jQuery](http://jquery.com//), [Modernizr](http://modernizr.com/) and [Jeet.gs](http://jeet.gs/). Created by [zerosixthree](http://zerosixthree.se/).

Requirements
-------------
[NodeJS](http://nodejs.org/) and [Grunt](http://gruntjs.com/).

Installing
-------------
Step 1. Install [NodeJS](http://nodejs.org/download/)

Step 2. Install [Grunt CLI](http://gruntjs.com/getting-started)
```shell
npm install -g grunt-cli
```

Step 3. Install all the npm dependencies you need for Grunt.
```shell
cd path/to/project
npm install
```

Step 4. All done!

Grunt tasks
-------------
There are two Grunt tasks; `grunt` and `grunt dist`.

`grunt` is the default task and will concatenate all Javascript files in to `dist/js/script__0.1.0.js` as well as running JSHint on them. The task will also concatenate all Sass files into `dist/css/style__0.1.0.css` and also run autoprefixer on the outputted CSS file to ensure all the correct vendor prefixes are included. `grunt` also uses the `grunt watch` task, so it automatically runs every time a JS/Sass file changes.

`grunt dist` is the production task and will do everything the default task does, as well as compressing the JS and CSS files.


Folder structure
-------------

The development will be done in `source/js/` and `source/sass/` which then will be compiled/concatinated/minified into `dist/js` and `dist/css`.