/* ====================================
   Onload functions
   ==================================== */

    $(document).ready(function($) {

        BP.Foo.init({
            trigger: $('#foo'),
            element: $('#bar')
        });

        if(!Modernizr.svg) {
            $('img[src$=".svg"]').each(function() {
                $(this).attr('src', $(this).attr('src').replace('.svg', '.png'));
            });
        }

    });