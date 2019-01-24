// JavaScript source code
$(document).ready(function () {
    var navlink;
    $('nav li').click(function (e) {
        e.preventDefault();
        navlink = $(this).attr('id');
       $('html, body').animate({ scrollTop: $('div#'+navlink).offset().top }, 500, 'linear');
    })
 
});