$(document).ready(function($) {

    /* ====================================
    Initiations
   ==================================== */

    BP.Foo.init({
        trigger: $('#foo'),
        element: $('#bar')
    });

    /* ====================================
    On load functions
   ==================================== */

    if(!Modernizr.svg) {
        $('img[src$=".svg"]').each(function() {
            $(this).attr('src', $(this).attr('src').replace('.svg', '.png'));
        });
    }

});