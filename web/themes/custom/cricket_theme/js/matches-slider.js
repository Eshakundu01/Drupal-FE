/**
 * @file
 * World Cup cricket slider behaviours.
 */

(function ($, Drupal) {
  Drupal.behaviors.sliderBehavior = {
    attach: function (context, settings) {
      once('slick', '.matches', context).forEach(function (element) {
        $(element).find('.view-content').slick({
          dots: true,
          infinite: 0,
          prevArrow: '<i class="bi bi-chevron-left"></i>',
          nextArrow: '<i class="bi bi-chevron-right"></i>',
          autoplay: true,
          pauseOnHover: false,
          pauseOnFocus: false,
          fade: true,
          cssEase: 'linear',
          speed: 500,
        });
      });
    },
  };
})(jQuery, Drupal);
