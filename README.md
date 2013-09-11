Boilerplate
===========
Startup boilerplate with [Grunt](http://gruntjs.com/), [SASS](http://sass-lang.com/) and [kittens](https://www.google.se/search?q=kittens&source=lnms&tbm=isch&sa=X&ei=_zswUsX1Dqir4ASstoHgCQ&ved=0CAkQ_AUoAQ&biw=1280&bih=1293).

Requirements
-------------
[NodeJS](http://nodejs.org/) and [Grunt](http://gruntjs.com/).

Installing
-------------
Step 1. Install all the npm dependencies you need for Grunt.
```shell
npm install
```
Step 2. Every directory in the `Gruntfile.js` is based on variables, so the `directories` in the `package.json` should be modified to fit your structure.

Step 3. Have fun!

Modification
-------------


Structure
-------------
```js


-img          //Uncompressed images
-js           //Your development JS-files
--plugins     //modernizr, jquery etc.
-node_modules //npm modules
-sass
--base
--partials
--structure
--style.sass

watch: {
  scripts: {
    files: ['**/*.js'],
    tasks: ['jshint'],
    options: {
      spawn: false,
    },
  },
},
```