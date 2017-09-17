var carousel = ( function () {

var carousel = document.querySelector( '.test__carousel' ),
    wrap = document.querySelector( '.test-carousel__wrap' ),
    slides = document.querySelectorAll( '.test-carousel__slide' ),
    slide = document.querySelector( '.test-carousel__slide' ),
    counter = slides.length,
    interval = 3000;

var start = 0;

var timerID = setTimeout( function () {

var intevalID = setInterval( function () {

    if ( counter - 1 >= 1 ) {
        counter--;
        start = start - slide.offsetWidth; }
    else if ( counter === 1 ) {
        counter = slides.length;
        start = 0;
    }    

    wrap.style.transform = 'translateX( ' +  start + 'px' +' )';

    },interval);

},interval);

})();