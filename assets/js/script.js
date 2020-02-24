//Global Variable
var query = "";

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

$('.ca-nav-login').click( function(){
    query = "Login";

    //To prevent body from scrolling when modal is opened.
    $('body').css('overflow','hidden');
    $('#ca-modal-login-window').css('display','block');
    $('.ca-main-login-modal').css('display','flex');
} );
  
$('.ca-modal-close').click( function(){
    // Run the effect
    $( '.ca-main-login-modal' ).effect( 'fold', 500 );
    setTimeout( function(){
        $('#ca-modal-login-window').css('display','none');
    },500 );
} );


// Second Way - Function to show hide the sidebar if anywhere outside is clicked.
$(document).mouseup(function (e) {
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
            $('input[type=text]').val('');

            //removing all the radio checked property.
            $("input[type=radio]").prop("checked", false);
        },500 );
    }
});

$('#signup').click( function(){
    query = "Signup";

    $('#ca-modal-login-window').css('display','none');
    $('.ca-main-login-modal').css('display','none');

    $('#ca-modal-signup-window').css('display','block');
    $('.ca-main-signup-modal').css('display','flex');

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

// for smooth scrolling of the home page when navbar items are clicked.
$("a[href='#aboutus'],a[href='#contact']").click(function(e) {
	e.preventDefault();
	
	var position = $($(this).attr("href")).offset().top - 90;

	$("body, html").animate({
		scrollTop: position
	},800 );
});


$("a[href='#home']").click(function(e) {
	e.preventDefault();
	
	$("body, html").animate({
		scrollTop: 0
	},800 );
});