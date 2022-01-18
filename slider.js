new Splide ( '.splide', {
type    : 'loop',
perPage : 1,
  autoplay: true,
}).mount();
  
  

var splide = new Splide( '#slider2', {
  perPage : 4,
  rewind: true,
  breakpoints: {
    768: {
      perPage : 2,
    },
    375: {
      perPage : 1,
    },
  }
} );
splide.mount();

