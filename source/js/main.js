/*global Modernizr */
'use strict';

var $                           = require('jQuery'),
    Modernizr                   = require('modernizr');

window.jQuery = window.$ = $;

$(document).ready(function() {
    var Example             = require('./components/example'),
        MediaQueryListener  = require('./components/mediaquerylistener'),
        example,
        mediaquerylistener;

    $('.element').each(function(i, elem) {
        example = new Example({element: elem});
    });

    mediaquerylistener = new MediaQueryListener();
});
