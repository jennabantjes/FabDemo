;(function($){


    swapNavs = function() {

        $(window).resize(function() {
            var $width = $( window ).width();
        });

            console.log($width);

            if ($width <= 750) {
                console.log('small');
                $('#open-menu').show();
                $('#open-menu-2').hide();

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

            else {
                $('#open-menu').hide();
                $('#open-menu-2').hide();

                $('ul.categories a').click(function(){
                    console.log('almost done');

                    //$('ul.categories').slideToggle();

                    $('.flyout').slideToggle();
                });
            }
        }

    swapNavs();

}(jQuery));