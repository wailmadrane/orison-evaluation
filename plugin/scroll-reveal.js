
/*-- plug-in --*/

var $scrollReveal = $('[data-scroll-reveal="true"]');
var $document = $(document);
var scrollRevealOffset;
var num = 0;

$scrollReveal.addClass('hidden');

$document.on("scroll", function(){

    $scrollReveal.each(function() {
    scrollRevealOffset = $(this).offset().top/3;

        if( $document.scrollTop() > scrollRevealOffset && $(this).hasClass('hidden') ){
            $(this).removeClass('hidden');
        }
    });
});
