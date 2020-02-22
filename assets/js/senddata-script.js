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