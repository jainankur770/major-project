// For listing the list of old signed in people.
// Global variable of listing elders.
var list_elders = "";
$(document).ready(function(){

    query         = 'request_data';
    $.ajax({
        type: "POST",
        url: "http://127.0.0.1:5000/",
        dataType: "json",
        data: {
            query       : query,
        },
        success: function (response) {
            // var elders_list = JSON.stringify(response);
            console.log( response[0] );
        },
        statusCode: {
            404: function() {
                alert('data not found');
            }
        }
    });
});