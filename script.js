// Add any interactive features here, like toggling themes or animations.
console.log("Website loaded!");
$(document).ready(function () {
      // Smooth scroll to the form on page load
      $('html, body').animate({
        scrollTop: $('.form-container').offset().top
      }, 1000);
