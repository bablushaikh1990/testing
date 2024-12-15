
import $ from "jquery";
$(document).ready(function () {
  $("#testimonial-slider").owlCarousel({
    items: 3,
    itemsDesktop: [1300, 3],
    itemsDesktopSmall: [1280, 2],
    itemsTablet: [992, 2],
    itemsMobile: [991, 1],
    pagination: true,
    navigation: false,
    autoPlay: true,
  });

  $(window).bind("orientationchange", function (event) {
    location.reload(true);
  });
  let oulHeight = $(".owl-carousel .owl-wrapper").height() - 70;
  $(".owl-carousel .owl-wrapper .testimonial").css("height", oulHeight);
});
