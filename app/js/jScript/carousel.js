function carousel() {

var carousel = document.querySelector( '.test__carousel' ),
    wrap = document.querySelector( '.test-carousel__wrap' ),
    slides = document.querySelectorAll( '.test-carousel__slide' ),
    slide = document.querySelector( '.test-carousel__slide' ),
    counter = slides.length,
    interval = 3000,
    start = 0;

var timerID = setTimeout( function () {

var intevalID = setInterval( function () {

    if ( counter - 1 >= 1 ) {
        counter--;
        wrap.classList.add( 'active' );
        start = start - slide.offsetWidth; }
    else if ( counter === 1 ) {
        wrap.classList.remove( 'active' );
        counter = slides.length;
        start = 0;
    }    
    
    wrap.style.transform = 'translateX( ' +  start + 'px' +' )';

    },interval);

},interval); 

setWidthforContainer();

};

function setWidthforContainer() {

var wrap = document.querySelector( '.test-carousel__wrap' ),
    slide = document.querySelector( '.test-carousel__slide' ),
    children = wrap.children.length;

wrap.style.width = slide.offsetWidth * children + 'px';  

};

document.addEventListener( 'DOMContentLoaded', carousel );
window.addEventListener( 'resize', setWidthforContainer );