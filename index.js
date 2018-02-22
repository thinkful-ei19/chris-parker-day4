'use strict';

// const catCar = function () {
//   $('.thumbnail').click(function(event) {
//     $('.hero').replaceWith($('.thumbnail');
//   });
// };

// catCar();

const catCar = function() {
  $('.thumbnail img').click(function() {
    let imgsrc = $(this).attr('src');
    $('.hero img').attr('src', imgsrc);
  });

};
$(document).ready(catCar);