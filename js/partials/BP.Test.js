var BP = BP || {};

BP.Test = function($) {
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

    self.FooBar = function(parent) {
      console.log('Do stuff!');
    }

    return {
      init: self.init
    }

}(jQuery);