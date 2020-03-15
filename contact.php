<?php include_once "includes/head.php" ?>

<header class="ca-header">
    <?php include "includes/navbar.php" ?>

    <div class="ca-background-image">
        <div class="ca-background-image-content">
            <p class="ca-quote">"To care for those who once cared for us is one of the highest honors.”</p>
            <p>― Tia Walker, The Inspired Caregiver: Finding Joy While Caring for Those You Love</p>
        </div>
    </div>
</header>

<!-- main section begins -->
<div class="ca-main-section-container">
    <div class="ca-section-contact">
        <div class="ca-section-heading" id="contact"><h1>Contact Us</h1></div>

        <section class="ca-section-contact-container">
            <div class="ca-contact-form-container">
                <h2>Get In Touch</h2>
                <p>Our manager shall contact after.</p>
                <form id="ca-contact-form" action="" method="POST">
                    <div class="ca-contact-email-div">
                        <label for="ca-contact-email">E-mail</label>
                        <input id="ca-contact-email" type="text">
                    </div>

                    <div class="ca-contact-message-div">
                        <label for="ca-contact-message">Message</label>
                        <textarea id="ca-contact-message" type="text"></textarea>
                    </div>

                    <div class="ca-input-div ca-contact-btn">
                        <button class="ca-contact-button" type="submit">Contact Now</button>
                    </div>
                </form>
            </div>

            <div class="ca-googlemap-container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3629.699659536953!2d73.77224921499636!3d24.530472884210575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e91ee890913f%3A0x3c9f7e227cd209ea!2sSS%20College%20Of%20Engineering!5e0!3m2!1sen!2sin!4v1582478942481!5m2!1sen!2sin" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" alt="google map"></iframe>
            </div>
        </section>
    </div>
</div>

<?php include_once "includes/footer.php" ?>