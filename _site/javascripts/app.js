;(function($){
    'use strict';

    $(window).on('resize', function(){

        var size = window.getComputedStyle(document.body,':before').getPropertyValue('content');

        console.log(size);

        /*if(size && size.indexOf("smallscreen") !=-1) {

            if($('.accordion').length > 0) {

                $('.accordion').each(Roberts.createAccordion);
            } else {
                $('.accordion').each(Roberts.destroyAccordion);
            }
        } // if accordionCount

        }*/
    });


}(jQuery));

/*;(function($){

    var preventDefault = function(){
        $('a').click(function(e){
            e.preventDefault();
        });
    }


    var swapNavs = function() {
        "use strict";

        $(window).resize(function() {
            var $width = $( window ).width();

            if ($width <= 750) {
                console.log('small');
                $('#open-menu').show();
                $('#open-menu-2').hide();
                $('.icon-menu').hide();
            }

            else {
                $('#open-menu').hide();
                $('#open-menu-2').hide();
            }
        });

            $('ul.categories a').click(function(){
                $('.flyout').slideToggle();
            });

            $('#open-menu').click(function(){
                $('#open-menu div').toggleClass('flip-vertical');
                $('ul.categories').slideToggle();
            });

            $('ul.categories a').click(function(){
                console.log('come on');
                $('#open-menu').hide();
                $('#open-menu-2').show();
                $('.arrow-right-nav').show();
                $('ul.categories').hide();
                $('.flyout').show();
            });

            $('.arrow-right-nav').click(function(){
                $('#open-menu').show();
                $('#open-menu-2').hide();
                $('ul.categories').show();
                $('.flyout').hide();
            });
        }

    preventDefault();
    swapNavs();

}(jQuery));*/







