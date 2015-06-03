// /**
//  * An example file of the JS structure
//  * -----------------------------------------------------------------------------
//  */
'use strict';

var $ = require('jQuery'),
	Example;

Example = function(options) {
	this.$element = $(options.element);

	this.init();
};

Example.prototype.init = function() {
	if (this.$element.length === 0) {
		return;
	}

	this.foo();
};

Example.prototype.foo = function() {
	console.log('bar');
};

module.exports = Example;