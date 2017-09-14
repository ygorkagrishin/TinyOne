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

var menu = ( function () {

var iconContainer = document.querySelector( '.hero-header__menu' ),
    icon = document.querySelector( '.hero-header__menu .fa-bars' ),
    closes = document.querySelector( '.hero-header__menu .fa-times' ),    
    menu = document.querySelector( '.hero__slide-menu' ),
    cont = document.querySelector( '.hero-slide__list' ); 

window.addEventListener( 'click', function (event) {
var target = event.target,
    width = cont.offsetWidth + 'px';

if ( target.classList.contains( 'fa-bars' ) ) {

    menu.style.width = width;
    icon.style.display = 'none';
    closes.style.display = 'inline-block';

} else {

    menu.style.width = null;
    closes.style.display = 'none';
    icon.style.display = 'inline-block';

    }

});


})();

var scroll = ( function () {

var arrow = document.querySelector( '.hero__arrow .fa' );
var para = document.querySelector( '.hero' ).offsetHeight;

arrow.addEventListener( 'click', function () {

    window.scrollTo( 0, para );
    
    });

})();

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