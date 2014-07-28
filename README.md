Z63 Boilerplate
===========
Startup boilerplate for your projects with [Grunt](http://gruntjs.com/) and [SASS](http://sass-lang.com/), made by [zerosixthree](http://zerosixthree.se/).

Requirements
-------------
[NodeJS](http://nodejs.org/) and [Grunt](http://gruntjs.com/).

Installing
-------------
Step 1. Install NodeJS by downloading it [here](http://nodejs.org/download/)

Step 2. Install Grunt CLI
```shell
npm install -g grunt-cli
```

Step 3. Install all the npm dependencies you need for Grunt.
```shell
cd to/root/folder
npm install
```

Step 4. All done! You can now run either `grunt` or `grunt dist` depending on your needs, and Grunt will do the rest for you. 

Folder structure
-------------

The development will be done in `source/js/` and `source/sass/` which then will be compiled/concatinated/minified into `build/js` and `build/css`.