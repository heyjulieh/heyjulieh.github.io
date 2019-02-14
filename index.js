var button;

$(document).ready(function () {
    var navlink;
    $('nav li').click(function (e) {
        e.preventDefault();
        navlink = $(this).attr('id');
       $('html, body').animate({ scrollTop: $('div#'+navlink).offset().top }, 500, 'linear');
    });
    $('nav h5').click(function (e) {
        e.preventDefault();
        $('nav div').removeClass('circle').addClass('full');
        $('nav h5').addClass('hidden');
        $('nav ul').removeClass('hidden');
    });
    $('.fa-arrow-up').click(function (e) {
        e.preventDefault();
        $('nav div').removeClass('full').addClass('circle');
        $('nav ul').addClass('hidden');
        $('nav h5').removeClass('hidden');
    });
    $('#services_list li').click(function(e) {
        e.preventDefault();
        button = $(this).attr('id')
        if ($('section.' + button).hasClass('hidden')) {
            $('section.' + button).removeClass('hidden');
            $('.modal').not('section.' + button).addClass('hidden');
        } else {
            $('.modal').addClass('hidden');
        }
    });
    $('section .close').click(function(e) {
        e.preventDefault();
        if ($('section.' + button).hasClass('hidden')==false) { 
            $('section.' + button).addClass('hidden')
        }
    });
   $(document).click(function(event) {
      if (!$(event.target).closest(".modal, #services li").length && $('section.' + button).hasClass('hidden')==false) {
        $('body').find('section.' + button).addClass('hidden');
      }
    });
    var intro_top = $('div#intro').offset().top;
    var services_top = $('div#services').offset().top;
    var about_top = $('div#about').offset().top;
    var contact_top = $('div#contact').offset().top;
    var intro_bottom = $('div#intro').offset().bottom;
    var services_bottom = $('div#services').offset().bottom;
    var about_bottom = $('div#about').offset().bottom;
    var contact_top = $('div#contact').offset().bottom;
    console.log('intro top: ', intro_top);
    console.log('services top: ', services_top);
    console.log('about top: ', about_top);
    console.log('contact top: ', contact_top);
});
