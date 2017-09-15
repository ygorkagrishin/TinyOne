$( document ).ready( function () {

$( '.hero-item__link' ).on( 'click', function (e) {
e.preventDefault();

var href = $( this ).attr( 'href' ),
    top = $( href ).offset().top;

$( 'html,body' ).animate({

        scrollTop: top
    
        }, 1500);

    });

});