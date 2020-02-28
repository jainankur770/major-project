// Requesting data after login. 
$(document).ready(function(){
    $('#ca-login-form').on( 'submit', function(e) {
        e.preventDefault();
        var element = document.getElementById('ca-login-user-content');

        var username    = $('#username_login').val();
        var user_type   = username.split('_');
        var password    = $('#password_login').val();

        //removing all the input field value.
        $('input').val('');

        console.log(query+username + user_type[0] + password);
        $.ajax({
            type: "POST",
            url: "http://127.0.0.1:5000/",
            dataType: "json",
            data: {
                query       : query,
                user_type   : user_type[0],
                Id          : user_type[1],
                password    : password
            },
            success: function (response) {
                document.cookie = "username=" + response.name + "; path=/;";
                alert( response.name );
                $('#ca-login-user-content').html(response);
                window.location.replace("../includes/dashboard.html");
                
                console.log( response );
            },
            statusCode: {
                404: function() {
                    alert('data not found');
                }
            }
        });
    })
});


// Requesting data after signup. 
$(document).ready(function(){
    $('#ca-signup-form').on( 'submit', function(e) {
        e.preventDefault();

        var name        = $('#name_signup').val();
        var address     = $('#address_signup').val();
        var age         = $('#age_signup').val();
        var contact     = $('#contact_signup').val();
        var fund        = $('#fund_signup').val();
        var password    = $('#password_signup').val();

        $.ajax({
            type: "POST",
            url: "http://127.0.0.1:5000/",
            dataType: "json",
            data: {
                query       : query,
                user_type   : user_type,
                name        : name,
                age         : age,
                fund_raised : fund,
                contact_no  : contact,
                address     : address,
                password    : password
            },
            success: function (response) {
                var signup_details = JSON.stringify(response);
                console.log( signup_details );
            },
            statusCode: {
                404: function() {
                    alert('data not found');
                }
            }
        });
    })
});


$(document).ready(function(){
    $('#ca-contact-form').on( 'submit', function(e) {
        e.preventDefault();

        var email     = $('#ca-contact-email').val();
        var message   = $('#ca-contact-message').val();
        query         = 'contact_us';

        $.ajax({
            type: "POST",
            url: "http://127.0.0.1:5000/",
            dataType: "json",
            data: {
                query       : query,
                email       : email,
                message     : message
            },
            success: function (response) {
                var signup_details = JSON.stringify(response);
                console.log( signup_details );
            },
            statusCode: {
                404: function() {
                    alert('data not found');
                }
            }
        });
    })
});