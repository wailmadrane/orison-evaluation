
/*-- My Scroll Reveal plug-in Js by Waïl Madrane --*/

$(document).ready(function() {
   var $scrollReveal = $('[data-scroll-reveal="true"]');
   var $document = $(document);
   var revealHeight = Math.round($(window).height()*0.66);
   var scrollRevealOffset = 0;

   $scrollReveal.addClass('hidden');

   $document.on('scroll', function(){
       $scrollReveal.each(function(){
           scrollRevealOffset = $(this).offset().top - revealHeight;

           if ( $document.scrollTop() > scrollRevealOffset && $(this).hasClass('hidden') ) {
               $(this).removeClass('hidden');
               console.log("hello");
           }
       });
   });
});
