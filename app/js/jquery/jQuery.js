$( document ).ready( function () {

$( '.hero-item__link' ).on( 'click', function (e) {
e.preventDefault();

var href = $( this ).attr( 'href' ),
    top = $( href ).offset().top;

$( 'html,body' ).animate({ scrollTop: top }, 1500);

});

$( '.fa-long-arrow-down' ).on( 'click', function () {

var $this = $( this ),
    section = $this.closest( '.hero' ),
    sibling = section.next(),
    top = sibling.offset().top;
 
$( 'html,body' ).animate({ scrollTop: top }, 1500);

    });

});