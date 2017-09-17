"use strict";

var submitForm = function (e) {
e.preventDefault();
    
var form = $( e.target ),
    url = form.attr( 'action' ),
    data = form.serialize();
    
var request = $.ajax({
    
    type : 'POST',
    url : url,
    data : data
    
});
    
request.done( function () {
    
$('#form__field').trigger( 'reset' );
        
    setTimeout( function () {
    
        $(".form__mod-container").remove()  
    
    }, 3000 );
    
    });

    request.done( function () {
        
        alert( "Форма отправленна" );
        
    });

    request.fail( function (jqXHR, textStatus) {
    
        alert( "Ошибка обратитесь в админестратору сайта" );
    
    });
    
}
    
$( '#form__field' ).on( 'submit', submitForm );
$( '#cont__field' ).on( 'submit', submitForm );