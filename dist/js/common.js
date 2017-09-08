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