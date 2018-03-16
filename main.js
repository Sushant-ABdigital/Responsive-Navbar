$(document).ready(function(){
    $(".menu a").on('click', function(e){
        var checker = $('#toggle');
        if(checker.prop("checked")){
            checker.prop("checked", false);
        }
        e.preventDefault();
        var o = $($(this).attr('href')).offset().top;
        var p = $('.nav').outerHeight(true);
        var st = (o - p) - 20;
        window.scrollTo(0, st);
        console.log('scrolling to '+ st);
    });
});