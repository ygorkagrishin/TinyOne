window.addEventListener( 'click', function ( event ) {

var target = event.target;
var menu = document.querySelector( '.hero__slide-menu' );

if ( target.classList.contains( 'fa-bars' ) ) {
    menu.classList.add( 'active' );
} else if ( target.classList.contains( 'fa-times' ) ||
            target.classList.contains( 'hero-item__link' ) ) {
            menu.classList.remove( 'active' );
    }

}); 