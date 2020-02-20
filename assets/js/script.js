// Function to show the sidebar.
$(document).ready(function(){
    $('.ca-nav-link-resposive').click( function() {
        // alert('asdfaf');
        $('.ca-sidebar').addClass('ca-sidebar-visible');
    } );
});


// Function to show hide the sidebar if anywhere outside is clicked.
$(document).click( function(event) {
    if (event.target.className != 'fa fa-bars' ) {
        console.log('yes');
        $(".ca-sidebar").removeClass('ca-sidebar-visible');
    }else{
        console.log('no');
    }
});




$(document).ready(function(){
    $('#ca-submit').on( 'click', function() {
        var id = $('#ca-id').val();
        console.log(id);
        $.ajax({
            type: "POST",
        
            url: "http://127.0.0.1:5000/",
            data: JSON.stringify({ query: id }),
            success: function (response) {
                $('.ca-response').html(response);
            },
            statusCode: {
                404: function() {
                    alert('data not found');
                }
            }
        });
    })
});