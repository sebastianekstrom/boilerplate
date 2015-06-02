// /**
//  * An example file of the JS structure
//  * -----------------------------------------------------------------------------
//  */
'use strict';

var $ = require('jQuery'),
    FooBar;

FooBar = function(options) {
    this.$element = $(options.element);

    this.init();
};

FooBar.prototype.init = function() {
    if (this.$element.length === 0) {
        return;
    }

    this.foo();
};

FooBar.prototype.foo = function() {
    console.log('bar');
};

module.exports = FooBar;