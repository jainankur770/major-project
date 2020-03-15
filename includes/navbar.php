<nav class="ca-navbar">
    <div class="ca-navbar-items">
        <div class="ca-items">
            <div class="ca-item ca-logo">LOGO</div>
            <div class="ca-single-item ca-home">
                <i class="fa fa-home" aria-hidden="true"></i>
                <a class="ca-nav-link" href="./index.php">Home</a>
            </div>
            <div class="ca-single-item ca-about">
                <i class="fa fa-users" aria-hidden="true"></i>
                <a class="ca-nav-link" href="./aboutus.php">About US</a>
            </div>
            <div class="ca-single-item ca-contact">
                <i class="fa fa-phone" aria-hidden="true"></i>
                <a class="ca-nav-link" href="./contact.php">Contact</a>
            </div>
        </div>
        <div class="ca-sign">
            <i class="fa fa-sign-in" aria-hidden="true"></i>
            <a class="ca-nav-link ca-nav-login ca-nav-user" href="#">Login/Signup</a>
        </div>
    </div>

    <!-- modal window -->
    <div id="ca-modal-login-window"  class="ca-shadow-login" >
        <div class="ca-main-login-modal">
            <div class="ca-modal-image-container">
                <img class="ca-image-modal" src="https://colorlib.com/etc/lf/Login_v1/images/img-01.png" alt="modal image">
            </div>

            <div class="ca-modal-login-content">
                <form class="ca-member-login-form" id="ca-login-form" action="" method="POST">
                    <div class="ca-form-title">LOGIN</div>
                    <div class="ca-input-div">
                        <span class="ca-icon"><i class="fa fa-user" aria-hidden="true"></i></span>
                        <input class="ca-input-type1" id="username_login" value="" type="text" placeholder="Username" required autocomplete="off">
                    </div>

                    <div class="ca-input-div">
                        <span class="ca-icon"><i class="fa fa-key" aria-hidden="true"></i></span>
                        <input class="ca-input-type1" id="password_login" value="" type="password" placeholder="Password" autocomplete="off">
                    </div>

                    <div class="ca-input-div ca-login-btn">
                        <button class="ca-login-button" type="submit">Login</button>
                    </div>

                    <div class="ca-signup-div">
                        <span>Don't have an account?<button type="button" id="signup" class="ca-signup-btn">Sign Up</button></span>
                    </div>
                </form>
            </div>
            <button class="ca-modal-close">
                <i class="fa fa-times" aria-hidden="true"></i>
            </button>
        </div>
    </div>

    <div id="ca-modal-signup-window"  class="ca-shadow-signup" >
        <div class="ca-main-signup-modal">
            <div class="ca-modal-image-container">
                <img class="ca-image-modal" src="https://colorlib.com/etc/lf/Login_v1/images/img-01.png" alt="modal image">
            </div>

            <div class="ca-modal-signup-content">
                <form class="ca-member-signup-form" id="ca-user-type" action="" >
                    <div class="ca-form-title">Applying As</div>

                    <div class="ca-input-div ca-signin-btn">
                        <button class="ca-user ca-young-button" type="button" value="young">Young</button>
                    </div>

                    <div class="ca-input-div ca-signin-btn">
                        <button class="ca-user ca-old-button" type="button" value="old">Old</button>
                    </div>
                </form>


                <form class="ca-member-signup-form" id="ca-signup-form" action="" method="POST">
                    <div class="ca-form-title">SIGN UP</div>
                    <div class="ca-input-div">
                        <span class="ca-icon"><i class="fa fa-envelope" aria-hidden="true"></i></span>
                        <input class="ca-input-type1" id="name_signup" type="text" placeholder="Name" autocomplete="off">
                    </div>

                    <div class="ca-input-div">
                        <span class="ca-icon"><i class="fa fa-address-book" aria-hidden="true"></i></span>
                        <input class="ca-input-type1" id="address_signup" type="text" placeholder="Address" autocomplete="off">
                    </div>

                    <div class="ca-input-div">
                        <span class="ca-icon"><i class="fa fa-envelope" aria-hidden="true"></i></span>
                        <input class="ca-input-type1" id="age_signup" type="text" placeholder="Age" autocomplete="off">
                    </div>

                    <div class="ca-input-div">
                        <span class="ca-icon"><i class="fa fa-phone" aria-hidden="true"></i></span>
                        <input class="ca-input-type1" id="contact_signup" type="text" placeholder="Contact Number" autocomplete="off">
                    </div>

                    <div class="ca-input-div" id="ca-fund">
                        <span class="ca-icon"><i class="fa fa-credit-card-alt" aria-hidden="true"></i></span>
                        <input class="ca-input-type1" id="fund_signup" type="text" placeholder="Fund Raised" autocomplete="off">
                    </div>

                    <div class="ca-input-div">
                        <span class="ca-icon"><i class="fa fa-key" aria-hidden="true"></i></span>
                        <input class="ca-input-type1" id="password_signup" type="password" placeholder="Password" autocomplete="off">
                    </div>

                    <div class="ca-input-div ca-signin-btn">
                        <button class="ca-signup-button" type="submit">Sign In</button>
                    </div>
                </form>
            </div>
            <button class="ca-modal-close">
                <i class="fa fa-times" aria-hidden="true"></i>
            </button>
        </div>
    </div>

    <div class="ca-navbar-items-resposive">
        <div class="ca-items-responsive">
            <div class="ca-item-responsive ca-logo-resposive">LOGO</div>
        </div>
        <div class="ca-sign-responsive">
            <a class="ca-nav-link-resposive" href="#">
                <i class="fa fa-bars"></i>
            </a>

            <div id="ca-sidebar" class="ca-sidebar">
                <div class="ca-sidebar-container">
                    <div class="ca-sidebar-msg">
                        <h1>Where To!</h1>
                    </div>
                    <div class="ca-sidebar-items">
                        <div class="ca-single-sidebar-item ca-home">
                            <i class="fa fa-home" aria-hidden="true"></i>
                            <a class="ca-nav-link ca-sidebar-link" href="./index.php">Home</a>
                        </div>
                        <div class="ca-single-sidebar-item ca-about">
                            <i class="fa fa-users" aria-hidden="true"></i>
                            <a class="ca-nav-link ca-sidebar-link" href="./aboutus.php">About US</a>
                        </div>
                        <div class="ca-single-sidebar-item ca-contact">
                            <i class="fa fa-phone" aria-hidden="true"></i>
                            <a class="ca-nav-link ca-sidebar-link" href="./contact.php">Contact</a>
                        </div>
                        <div class="ca-single-sidebar-item ca-sidebar-login">
                            <i class="fa fa-sign-in" aria-hidden="true"></i>
                            <a class="ca-nav-link ca-nav-login ca-sidebar-link ca-nav-user" href="javascript:void(0);">Login/Signup</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</nav>

<nav class="ca-navbar ca-navbar-scroll">
    <div class="ca-navbar-items">
        <div class="ca-items">
            <div class="ca-item ca-logo">LOGO</div>
            <div class="ca-single-item ca-home">
                <i class="fa fa-home" aria-hidden="true"></i>
                <a class="ca-nav-link" href="./index.php">Home</a>
            </div>
            <div class="ca-single-item ca-about">
                <i class="fa fa-users" aria-hidden="true"></i>
                <a class="ca-nav-link" href="./aboutus.php">About US</a>
            </div>
            <div class="ca-single-item ca-contact">
                <i class="fa fa-phone" aria-hidden="true"></i>
                <a class="ca-nav-link" href="./contact.php">Contact</a>
            </div>
        </div>
        <div class="ca-sign">
            <i class="fa fa-sign-in" aria-hidden="true"></i>
            <a class="ca-nav-link ca-nav-login ca-nav-user" href="">Login/Signup</a>
        </div>
    </div>

    <div class="ca-navbar-items-resposive">
        <div class="ca-items-responsive">
            <div class="ca-item-responsive ca-logo-resposive">LOGO</div>
        </div>
        <div class="ca-sign-responsive">
            <a class="ca-nav-link-resposive" href="javascript:void(0);">
                <i class="fa fa-bars"></i>
            </a>
        </div>
    </div>
</nav>