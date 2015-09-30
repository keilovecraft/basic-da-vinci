/**
 * @file
 * Custom Code of the javascript behaviour.
 */

(function ($) {
  Drupal.behaviors.da_vinciTheme = {
    attach: function (context) {
      // Checking mobile devices.
      var isMobile = {
        Android: function () {
          return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
          return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
          return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
          return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
          return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
          return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
      };
      // Mobile menu.
      if ($("button.js-menu-trigger").length < 1) {
        $('body').append('<button type="button" class="js-menu-trigger sliding-menu-button"><a href="#" class="ico-mobile-navigation">Menu</a></button>');
      }
      $('.js-menu-trigger', context).once('mainMenu', function () {
        $(this).click(function () {
          $('#navigation').toggleClass('is-visible');
        });
      });
      // Show back to top button.
      $(window).scroll(function() {
        if ($(window).scrollTop() < $(window).height() * 2) {
          $('.backtotop').removeClass('active');
        } else {
          $('.backtotop').addClass('active');
        }
      });
      // Back to top click event.
      $(".backtotop").click(function(e) {
        e.preventDefault();
        $('body, html').animate({
          scrollTop: $('body, html').offset().top
        }, 500);
        return false;
      });
    }
  }
})(jQuery);
