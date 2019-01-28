// JavaScript source code
var middle;
var view_middle;

$(document).ready(function () {
  var navlink;
  var top;
  $('nav li').click(function (e) {
    e.preventDefault();
    navlink = $(this).attr('id');
    console.log('navlink is: ', navlink);
    $('div#' + navlink).animate({ scrollTop: top }, 200);
  })
  $('nav h5').click(function (e) {
    e.preventDefault();
    $('nav div').removeClass('circle').addClass('full');
    $('nav h5').addClass('hidden');
    $('nav ul').removeClass('hidden');
  })
  $('.fa-arrow-up').click(function (e) {
    e.preventDefault();
    $('nav div').removeClass('full').addClass('circle');
    $('nav ul').addClass('hidden');
    $('nav h5').removeClass('hidden');
  })
});
