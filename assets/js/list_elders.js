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

            var inputs = '';
            for (var i = 0; i <= response.length-1; i++) {
                inputs += 
                '<article class="ca-elders-list" id="'+ response[i][0] +'" ><div class="ca-elders-list-content"><h3>' + response[i][1] + '</h3><p>AGE: '+ response[i][2] +'</p><p>MONEY RAISED: '+ response[i][3].toLocaleString('en-IN') +'</p><p>CONTACT No: '+ response[i][5] +'</p></div><div class="ca-elders-list-button"><button class="ca-learn-more">LEARN MORE...</button><button class="ca-send-request">SEND REQUEST</button></div></article>';
            }
            $( '.ca-elders-list-container-lists' ).html( inputs );
            console.log( response );
        },
        statusCode: {
            404: function() {
                alert('data not found');
            }
        }
    });
});