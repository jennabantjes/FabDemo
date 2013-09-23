;(function($){

    swapNavs = function() {

            var $width = $( window ).width();

            console.log($width);

            if ($width <= 750) {
                console.log('small');
                $('#open-menu').click(function(){
                    $('ul.categories').slideToggle();
                    $('.arrow-right-nav').hide();
                });

                $('ul.categories a').click(function(){
                    console.log('come on');
                    $('.icon-down-open').hide();
                    $('.arrow-right-nav').show();
                });

                $('.arrow-right-nav').click(function(){
                    $('ul.categories').hide();
                    $('.flyout').hide();
                    $('.arrow-right-nav').hide();
                    $('.icon-down-open').show();
                });
            }

            else {
                $('#open-menu').hide();
            }
        }

    subNavs = function() {

        $('ul.categories a').click(function(){
            console.log('almost done');

            $('ul.categories').slideToggle();

            $('.flyout').show();
        });
    }

    swapNavs();
    subNavs();

}(jQuery));