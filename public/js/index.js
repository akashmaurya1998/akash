$(document).ready(function() {

    $('#ABOUT').scrollTop(0);

    $('.nav-item').click(function() {
        $('.active').removeClass("active");
        $(this).addClass("active");
    });

    $('nav .nav-link').click(function() {
      event.preventDefault();
        var hash = this.hash;
        $('html,body').animate({
            scrollTop: $(""+$(this).attr('href')).offset().top
        }, 300);
    });
});

if ($(window).width()<992) {
  $('.para').removeClass("w-50");
  $('span').removeClass('mr-4');
  $('span').addClass('mr-2');
  console.log("less");
} else {
  $('.para').addClass('w-50');
  $('span').removeClass('mr-2');
  $('span').addClass('mr-4');
}
