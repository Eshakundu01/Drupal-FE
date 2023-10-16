/**
 * @file
 * World Cup slider behaviours.
 */

(function ($, Drupal) {
  Drupal.behaviors.sliderBehavior = {
    attach: function (context, settings) {
      once('slick', '.matches', context).forEach(function (element) {
        $(element).find('.view-content').slick({
          dots: true,
          infinite: 0,
          autoplay: true,
          pauseOnHover: false,
          pauseOnFocus: false,
          prevArrow:"<button type='button' class='slick-prev slick-arrow'><i class='bi bi-chevron-left' aria-hidden='true'></i></button>",
          nextArrow:"<button type='button' class='slick-next slick-arrow'><i class='bi bi-chevron-right' aria-hidden='true'></i></button>",
          fade: true,
          cssEase: 'linear',
          speed: 500,
        });
      });
    },
  };
})(jQuery, Drupal);
