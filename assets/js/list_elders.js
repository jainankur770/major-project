// For listing the list of old signed in people.
// Global variable of listing elders.
var list_elders = "";
$(document).ready(function(){

    list_elders = 'request_data';
    $.ajax({
        type: "POST",
        url: "http://127.0.0.1:5000/",
        dataType: "json",
        data: {
            list_elders       : list_elders,
        },
        success: function (response) {
            var elders_list = JSON.stringify(response);
            console.log( elders_list );
        },
        statusCode: {
            404: function() {
                alert('data not found');
            }
        }
    });
});