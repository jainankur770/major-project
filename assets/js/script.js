// Function to show the sidebar.
$(document).ready(function(){
    $('.ca-nav-link-resposive').click( function() {
        // alert('asdfaf');
        $('.ca-sidebar').css('transform','translateX(-100%)');
    } );
});


// Function to show hide the sidebar if anywhere outside is clicked.
$(document).click( function(event) {
    console.log(event);
    if (event.target.className != 'fa fa-bars' && event.target.className != 'ca-sidebar ca-sidebar-visible') {
        console.log('yes');
        $(".ca-sidebar").css('transform','translateX(0%)');
    }else{
        console.log('no');
    }
});

$('#login').click( function(){
    $('#ca-modal-window').css('display','block');
    $('.ca-main-modal').css('display','block');
} );
  
$('.ca-modal-close').click( function(){
    // Run the effect
    $( '.ca-main-modal' ).effect( 'fold', 500 );
    setTimeout( function(){
        $('#ca-modal-window').css('display','none');
    },510 );
} );