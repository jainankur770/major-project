//Global Variable
var query = "";
var user_type = "";
var login_data = "";

// Function to show the sidebar.
$(document).ready(function(){
    $('.ca-nav-link-resposive').click( function() {
        // alert('asdfaf');
        $('.ca-sidebar').css('transform','translateX(-100%)');
    } );
});


// First Way - Function to show hide the sidebar if anywhere outside is clicked.
$(document).click( function(event) {
    if (event.target.className != 'fa fa-bars' && event.target.className != 'ca-sidebar') {
        console.log('yes');
        $(".ca-sidebar").css('transform','translateX(0%)');
    }else{
        console.log('no');
    }
});


// Event delegation to on click class( fires at the time of listening ).
$( document ).on( 'click', '.ca-nav-login', function(){
    query = "Login";

    //To prevent body from scrolling when modal is opened.
    $('body').css('overflow','hidden');
    $('#ca-modal-login-window').css('display','block');
    $('.ca-main-login-modal').css('display','flex');
} );
  
$('.ca-modal-close').click( function(){
    // Run the effect
    $( '.ca-main-login-modal, .ca-main-signup-modal' ).effect( 'fold', 500 );
    setTimeout( function(){
        $('#ca-modal-login-window, #ca-modal-signup-window').css('display','none');
    },500 );
} );



 
// Set effect from select menu value.
$( ".ca-user-option-label" ).click( function() {
    $( ".ca-user-options-dropdown" ).toggle( 'blind', 200 );
});


// Second Way - Function to show hide the sidebar if anywhere outside is clicked.
$(document).click(function (e) {
    var container = $(".ca-main-login-modal, .ca-nav-link, .ca-main-signup-modal");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        //To restore body scrolling.
        $('body').css('overflow','auto');
        // Run the effect
        $( '.ca-main-login-modal, .ca-main-signup-modal' ).effect( 'fold', 500 );
        setTimeout( function(){
            $('#ca-modal-login-window, #ca-modal-signup-window').css('display','none');

            //removing all the input field value.
            $('.ca-input-type1').val('');
        },500 );
    }
});

$('#signup').click( function(){
    query = "Signup";

    $('#ca-modal-login-window').css('display','none');
    $('.ca-main-login-modal').css('display','none');

    $('#ca-modal-signup-window').css('display','block');
    $('.ca-main-signup-modal').css('display','flex');

    $('#ca-user-type').css( 'display', 'block' );
    $('#ca-signup-form').css( 'display', 'none' );

} );

//When focused move icon.
$('.ca-input-type1').focusin( function(){
    $(this).siblings('.ca-icon').css( 'transform', 'translateX(-12px)' );
} );

//When out focused get icon to the original position.
$('.ca-input-type1').focusout( function(){
    $(this).siblings('.ca-icon').css( 'transform', 'translateX(0px)' );
} );


// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    $('.ca-navbar-scroll').css('top','0');
  } else {
    $('.ca-navbar-scroll').css('top','-90px');
  }
}


//Form field changes according to the value young old.
$('.ca-user').on('click', function() {
    if( $(this).val() === 'young' ) {
        //global var init
        user_type = $(this).val();

        $('#ca-fund').css( 'display', 'none' );
        $('#ca-user-type').css( 'display', 'none' );
        $('#ca-signup-form').css( 'display', 'block' );
    } else {
        user_type = $(this).val();

        $('#ca-fund').css( 'display', 'flex' );
        $('#ca-user-type').css( 'display', 'none' );
        $('#ca-signup-form').css( 'display', 'block' );
    }
});


// Show the session details.
if( sessionStorage.getItem( 'login_data' ) ) {
    var login = sessionStorage.getItem( 'login_data' );
    login_data = JSON.parse( login );
    $('.ca-nav-user').removeClass( 'ca-nav-login' );
    console.log( login_data.name );

    if( login_data.user_type === 'young' ) {
        $('.ca-nav-user').html( login_data.name );
        $( '.ca-nav-user' ).attr( 'href', './dashboard_young.php' );
        $( '.ca-user-sidebar' ).attr( 'href', './dashboard_young.php' );

        $('.ca-user-name').append( login_data.name );
        $('.ca-user-age').append( login_data.age );
        $('.ca-user-contact').append( login_data.contact );
        $('.ca-user-review').append( login_data.review );
        $('.ca-user-rating').append( login_data.rating );
        $('.ca-user-takingcare').append( login_data.taking_care_of );
        $('.ca-user-id').append( login_data.user_type );
        $('.ca-user-address').append( login_data.Address );
    } else {
        $( '.ca-nav-user' ).attr( 'href', './dashboard_old.php' );
        $( '.ca-user-sidebar' ).attr( 'href', './dashboard_old.php' );
        $('.ca-nav-user').html( login_data.name );

        $('.ca-user-name').append( login_data.name );
        $('.ca-user-age').append( login_data.age );
        $('.ca-user-contact').append( login_data.contact );
        $('.ca-user-review').append( login_data.review );
        $('.ca-user-rating').append( login_data.rating );
        $('.ca-user-takingcare').append( login_data.taken_care_by );
        $('.ca-user-id').append( login_data.user_type );
        $('.ca-user-address').append( login_data.Address );
    }
}

// For logging out
$( '#ca-user-logout' ).click( function(e) {
    e.preventDefault();
    sessionStorage.removeItem( 'login_data' );
    $('.ca-nav-user').addClass( 'ca-nav-login' );
    $('.ca-nav-user').html( 'Login/Signup' );
    location.reload(true);
} )