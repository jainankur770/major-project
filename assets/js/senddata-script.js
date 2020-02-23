$(document).ready(function(){
    $('.ca-login-button').on( 'click', function() {
        var username = $('#username_login').val();
        var user_type = username.split('_');
        var password = $('#password_login').val();
        console.log(query+username + user_type[0] + password);
        $.ajax({
            type: "POST",
            url: "http://127.0.0.1:5000/",
            dataType: "json",
            data: { query: query, user_type : user_type[0], Id : user_type[1] },
            success: function (response) {
                alert(response);
            },
            statusCode: {
                404: function() {
                    alert('data not found');
                }
            }
        });
    })
});