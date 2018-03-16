$(document).ready(function(){
    $(".menu a").on('click', function(e){
        var checker = $('#toggle');
        if(checker.prop("checked")){
            checker.prop("checked", false);
        }
        e.preventDefault();
        // var o = $($(this).attr('href')).offset().top;
        // var p = $('.nav').outerHeight(true);
        // var st = (o - p) - 20;
        // window.scrollTo(0, st);
        // console.log('scrolling to '+ st);
    });
});
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top - 80
        }, 1000);
      }
    }
  });