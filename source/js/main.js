/*global Modernizr */
'use strict';

var $           = require('jQuery'),
    Modernizr   = require('modernizr');

window.jQuery = window.$ = $;

$(document).ready(function() {
    var FooBar              = require('./components/foobar'),
        MediaQueryListener  = require('./components/mediaquerylistener'),
        foobar,
        mediaquerylistener;

    $('.element').each(function(i, elem) {
        foobar = new FooBar({element: elem});
    });

    mediaquerylistener = new MediaQueryListener();
});
