$(document).ready(function($) {

    /* ====================================
        On load functions
    ==================================== */

    if(!Modernizr.svg) {
        $('img[src$=".svg"]').each(function() {
            $(this).attr('src', $(this).attr('src').replace('.svg', '.png'));
        });
    }

});
