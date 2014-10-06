$(function(){
 $('.carousel').owlCarousel({
  items: 4,
  responsive: {
    0: {
      items: 1
    },
    480: {
      items: 2,
      margin: 15
    },
    768: {
      items: 3,
      margin: 30
    },
    992: {
      items: 4,
      margin: 45
    }
  }
});
});


$(function(){
 $('.services').owlCarousel({
  items : 1, 
  itemsDesktop : false,
  itemsDesktopSmall : false,
  itemsTablet: false,
  itemsMobile : false
});
});

$(function() {
 
  var owl = $("#owl-demo");
 
  owl.owlCarousel({
     
      items : 1,
      navigation : true
 
  });
 
});