/**
 * Detect media queries and add a custom event listener for when the breakpoint changes
 * -----------------------------------------------------------------------------
 * More info here: http://zerosixthree.se/detecting-media-queries-with-javascript/
 *
 * Example usage:
 *
 *    $(window).on('breakpoint-change', function(e, breakpoint) {
 *
 *        if(breakpoint === 'bp-small') {
 *            document.body.innerHTML = 'CSS Breakpoint <span>screen-small</span>';
 *        }
 *
 *        if(breakpoint === 'bp-large') {
 *            document.body.innerHTML = 'CSS Breakpoint <span>screen-large</span>';
 *        }
 *
 *    });
 *
 */

'use strict';
var BP = (function (parent, $) {

    var MediaQueryListener = function() {
        this.afterElement = window.getComputedStyle ? window.getComputedStyle(document.body, ':after') : false;
        this.currentBreakpoint = '';
        this.lastBreakpoint = '';
        this.init();
    };

    MediaQueryListener.prototype = {

        init: function () {
            var self = this;
            
            if(!self.afterElement) {
                return;
            }

            self._resizeListener();

        },
        _resizeListener: function () {
            var self = this;

            $(window).on('resize orientationchange load', function() {
                // Regexp for removing quotes added by various browsers
                self.currentBreakpoint = self.afterElement.getPropertyValue('content').replace(/^["']|["']$/g, '');
                
                if (self.currentBreakpoint !== self.lastBreakpoint) {
                    $(window).trigger('breakpoint-change', self.currentBreakpoint);
                    self.lastBreakpoint = self.currentBreakpoint;
                }
            });
        }

    };

    parent.mediaqueryListener = parent.mediaqueryListener || new MediaQueryListener();

    return parent;

}(BP || {}, jQuery));