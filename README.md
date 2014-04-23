Boilerplate
===========
Startup boilerplate with [Grunt](http://gruntjs.com/), [SASS](http://sass-lang.com/) and [kittens](https://www.google.se/search?q=kittens&source=lnms&tbm=isch&sa=X&ei=_zswUsX1Dqir4ASstoHgCQ&ved=0CAkQ_AUoAQ&biw=1280&bih=1293).

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

The coding will be done in `js/` and `sass/` which then will be compiled/concatinated/minified into `static/js` and `static/css`.

The folder structure is as follows::

        js/                     Uncompressed Javascript, everything in here will be concatinated/compressed into static/js
            partials/           Your own Javascript files
            vendor/             Plugins like jQuery, Modernizr or equal
        
        sass/                   All _foobar.sass files are imported into style.sass and later compiled into static/css/style_xx_.css
            base/               Colors, grid, typography, variables
            helpers/            Mixins, reset, global classes
            objects/            Buttons, forms, lists etc.
            structure/          Header, footer, navigation, sidebars
        
        static/                 Where everything is compiled and eventually minifed
            css/                Styling and reset combined
            img/                All images
            js/                 A single .js file with your scripts, jQuery and Modernizr
        
        .gitignore              Sass-files, DS_Store etc.
        Gruntfile.js            The Grunt setup
        index.html              HTML yeeeeah!
        package.json            Packages for Grunt