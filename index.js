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
        if ($('aside.' + button).hasClass('hidden')) {
            $('aside.' + button).removeClass('hidden');
            $('.modal').not('aside.' + button).addClass('hidden');
        } else {
            $('.modal').addClass('hidden');
        }
    });
    $('aside .close').click(function(e) {
        e.preventDefault();
        if ($('aside.' + button).hasClass('hidden')==false) {
            $('aside.' + button).addClass('hidden')
        }
    });
   $(document).click(function(event) {
      if (!$(event.target).closest(".modal, #services li").length && $('section.' + button).hasClass('hidden')==false) {
        $('body').find('section.' + button).addClass('hidden');
      }
    });
    $("h5:not(nav h5)").fitText(1);
    if ($(window).width() > 1125) {
      $("h2").fitText(1.2);
      $(".section h1").fitText(.7);
    }
    else if ($(window).width() < 550) {
      $("h2").fitText(.55);
      $(".section h1").fitText(.38);
    }
    else {
      $("h2").fitText(.8);
      $(".section h1").fitText(.58);
    }

//    var intro_top = $('div#intro').offset().top;
//    var services_top = $('div#services').offset().top;
//    var about_top = $('div#about').offset().top;
//    var contact_top = $('div#contact').offset().top;
//    var intro_bottom = $('div#intro').offset().bottom;
//    var services_bottom = $('div#services').offset().bottom;
//    var about_bottom = $('div#about').offset().bottom;
//    var contact_top = $('div#contact').offset().bottom;
//    console.log('intro top: ', intro_top);
//    console.log('services top: ', services_top);
//    console.log('about top: ', about_top);
//    console.log('contact top: ', contact_top);
});
$( window ).resize(function() {
  if ($(window).width() > 1125) {
    $("h2").fitText(1.2);
    $(".section h1").fitText(.7);
  }
  else if ($(window).width() < 550) {
    $("h2").fitText(.55);
    $(".section h1").fitText(.38);
  }
  else {
    $("h2").fitText(.8);
    $(".section h1").fitText(.58);
  }
});
$( window ).on( "orientationchange", function() {
  if ($(window).width() > 1125) {
    $("h2").fitText(1.2);
    $(".section h1").fitText(.7);
  }
  else if ($(window).width() < 550) {
    $("h2").fitText(.55);
    $(".section h1").fitText(.38);
  }
  else {
    $("h2").fitText(.8);
    $(".section h1").fitText(.58);
  }
});
