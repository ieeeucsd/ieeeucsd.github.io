/* ====================
 * Filename: home.ss
 * Author: Antony Nguyen
 * Date Last Updated: September 20, 2018
 * ----------
 * All the javascript needed for the home page
 ====================== */

/* Change dropdown on scroll */
$(function() {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 60) {
      $(".dropdown-menu-custom").addClass('dropdown-menu-white');
      $(".dropdown-item-custom").addClass('dropdown-item-black');
    }
    if ($(this).scrollTop() < 60) {
      $(".dropdown-menu-custom").removeClass('dropdown-menu-white');
      $(".dropdown-item-custom").removeClass('dropdown-item-black');
    }
  });
});
