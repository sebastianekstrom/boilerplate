'use strict';
var BP = (function (parent, $) {

    var Foo = function(options) {
        this._init();
    };

    Foo.prototype = {

        _init: function (options) {
            var self = this;
            self._bindEvents();
        },

        _bindEvents: function () {
            var self = this;
            $(document).on('click', options.trigger, function (e) {
                e.preventDefault();
                self._bar();
            });
        },

        _bar: function() {
            console.log('Foobar!');
        }

    };

    var options = {
        trigger: '.triggerElement'
    };

    parent.foo = parent.foo || new Foo(options);

    return parent;
}(BP || {}, jQuery));
