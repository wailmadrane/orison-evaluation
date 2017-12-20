/*-- Nav Menu --*/

$(".menu__links").slideUp(0);

$(".menu__mobile-bar--burger").click(function() {
    $(".menu__links").slideToggle(400);
    console.log("hello");
});

var $menu = $(".menu");
var $document = $(document);
var menuOffset;

function gradientMenu () {
    menuOffset = $menu.offset().top;
    if ( menuOffset > 5 ) {
        $menu.removeClass('gradient');
    }
    else{
        $menu.addClass('gradient');
    }
}
gradientMenu ();

$document.on("scroll", function(){
    gradientMenu ();
});

/*-- Api flickr --*/

var sourceList = $("#mes-photos").html(),
    templateList = Handlebars.compile(sourceList),
    base_url = "https://api.flickr.com/services/rest/",
    options = {
        method: "flickr.photos.search",
        api_key: "be39ed909c012ebdf5726ca2873cfefe",
        tags: "landscape",
        format: "json",
        per_page: 21,
        nojsoncallback: 1
    };
$.getJSON(base_url, options).done(function(e) {
    $(".owl-carousel").html(templateList(e.photos.photo));
}).then(function(){

    /*-- OwlCarousel --*/
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
});

/*-- Google Api --*/
    var map;

    function initMap() {
        var googlePlex = {lat: 37.4224082, lng: -122.0856086};
        map = new google.maps.Map(document.getElementById('map'), {
          center: googlePlex,
          zoom: 17,
          gestureHandling: 'cooperative',

        });

        var image = '../img/marker-orison.png';

        var marker = new google.maps.Marker({
          position: googlePlex,
          map: map,
          icon: image,
          animation: google.maps.Animation.DROP
        });
    }

/*-- Parallax --*/
    
$('.parallax-1').parallax({imageSrc: 'img/blog-cvr-9-26.jpg'});
