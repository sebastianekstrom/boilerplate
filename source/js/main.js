/*global Modernizr */
'use strict';

var $           = require('jQuery'),
    Modernizr   = require('modernizr');

window.jQuery = window.$ = $;

$(document).ready(function() {
    var FooBar              = require('./components/foobar'),
        MediaQueryListener  = require('./components/mediaquerylistener'),
        foobar,
        mediaquerylistener,
        replaceAllSvgsWithFallbackPngs;

    $('.element').each(function(i, elem) {
        foobar = new FooBar({element: elem});
    });

    mediaquerylistener = new MediaQueryListener();

    replaceAllSvgsWithFallbackPngs = function() {
        $('img[src$=".svg"][data-fallback]').each(function() {
            $(this).attr('src', $(this).data('fallback'));
        });
    };

    if(!Modernizr.svg) {
        replaceAllSvgsWithFallbackPngs();
    }
});
