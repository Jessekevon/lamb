$(document).ready(function(){
	console.log('working');
});

// Init tabs

// $( function() {
//   $( "#tabs" ).tabs();
// } );

$('.slider-one').slick({
	arrows: false,
	dots: false
});

$('.slider-two').slick({
	arrows: false,
	dots: false
});


$('nav a').on('click', function() {

	$('nav').removeClass('activated');

    var scrollAnchor = $(this).attr('data-scroll'),
        scrollPoint = $('[data-anchor="' + scrollAnchor + '"]').offset().top - 50;

    $('body,html').animate({
        scrollTop: scrollPoint
    }, 500);

    return false;

})


$(window).scroll(function() {
    var windscroll = $(window).scrollTop();
    if (windscroll >= 550) {
        $('.smooth-anchor').each(function(i) {
            if ($(this).position().top <= windscroll + 50) {
                $('nav a.active').removeClass('active');
                $('nav a').eq(i).addClass('active');
            }
        });

    } else {

        $('nav').removeClass('fixed');
        $('nav a.active').removeClass('active');
        // $('nav a:first').addClass('active');
    }
});
