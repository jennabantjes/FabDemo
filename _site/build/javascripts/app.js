/*
    polyfill for getComputedStyle
*/

if (!window.getComputedStyle) {
    window.getComputedStyle = function(el, pseudo) {
        this.el = el;
        this.getPropertyValue = function(prop) {
            var re = /(\-([a-z]){1})/g;
            if (prop == 'float') prop = 'styleFloat';
            if (re.test(prop)) {
                prop = prop.replace(re, function () {
                    return arguments[2].toUpperCase();
                });
            }
        return el.currentStyle[prop] ? el.currentStyle[prop] : null;
        }
        return this;
    }
}

/* start JS */

(function(){

  // get the initial breakpoint
  var size = window.getComputedStyle(document.body,':before').getPropertyValue('content');

  $('#nav-flyout-toggle').on('click touchstart', function(e) {

    e.preventDefault();

    var self = $(this);
    var menu = $('#categories');
    var icon = self.find('.icon');

    if(menu.hasClass('is-open')) {

      menu.slideUp(125, function(){
        menu.removeClass('is-open');
        icon.removeClass('icon-right-arrow').addClass('icon-down-arrow');
        menu.removeAttr('style');
      });


    } else {
      menu.addClass('is-open');

      menu.hide().slideDown(125);

      icon.removeClass('icon-down-arrow').addClass('icon-right-arrow');
    }

  });


  $('#flyout a').on('click touchstart', function(e) {

    e.preventDefault();

    if($('body').hasClass('is-open')) {

      // close the menu

      $('#flyout').animate({
        'left':'0%'
      }, 200, function(){
        $('body').removeClass('is-open').removeAttr('style');
        $('.wrapper').removeAttr('style');
      });

    } else {

      // open the menu

      $('body').addClass('is-open');
      $('.wrap').height($(window).height());

      $('.banner, .content').animate({
        'left': '80%'
      }, 200);

    }

  });

  /*
    responsive JS
  */

  if( size.indexOf("narrow") !=-1 ) {
    console.log('welcome, mr. narrow screen');

  }

  // monitor the breakpoint
  window.addEventListener("resize", function () {

    size = window.getComputedStyle(document.body,':before').getPropertyValue('content');

    if( size.indexOf("narrow") !=-1 ) {
      console.log('narrow');
    }

    else {
      console.log('hmm');
      //$('body').removeClass('is-open').removeAttr('style');
      //$('.banner, .content').removeAttr('style');
    }

  }, false);

})();