;(function($){


    swapNavs = function() {

        $(window).resize(function() {
            var $width = $( window ).width();

            if ($width <= 750) {
                console.log('small');
                $('#open-menu').show();
                $('#open-menu-2').hide();
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
                $('ul.categories').hide('slide', {direction: 'right'}, slow);
                $('.flyout').show('slide', {direction: 'left'}, slow);
            });

            $('.arrow-right-nav').click(function(){
                $('#open-menu').show();
                $('#open-menu-2').hide();
                $('ul.categories').show('slide', {direction: 'right', slow});
                $('.flyout').hide('slide', {direction: 'left'}, slow);
            });
        }

    swapNavs();

}(jQuery));