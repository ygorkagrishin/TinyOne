function fullHeight() {

var collection = document.querySelectorAll( '.section' );
var port = window.innerHeight + 'px';
var c;

for ( c=0; c<=collection.length - 1; c++  ) {
var section = collection[c];
section.style.height = port;

if ( section.children[0].offsetHeight >= window.innerHeight ) {
    section.style.height = section.children[0].offsetHeight + 'px';
        }
    }
};

document.addEventListener( 'DOMContentLoaded', fullHeight );
window.addEventListener( 'resize', fullHeight );

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