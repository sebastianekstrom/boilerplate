var BP = BP || {};

BP.Foo = function($) {
    'use strict';

    var self = {},
        trigger,
        element;

    self.init = function(opts) {
        trigger = opts.trigger;
        element = opts.element;

        trigger.click(function(){
            self.FooBar();
        });
    }

    self.FooBar = function() {
        console.log('Foo!');
    }

    return {
        init: self.init
    }

}(jQuery);