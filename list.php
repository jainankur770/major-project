<script type="text/javascript">
    if( !sessionStorage.getItem( 'login_data' ) ) {
    // Re-direct to this page
    window.location.replace("./index.php");
    }
</script>

<?php include_once "includes/head.php" ?>

<header class="ca-header ca-header-dashboard">
    <?php include "includes/navbar.php" ?>
</header>
    
    <!-- main section begins -->
    <div class="ca-main-section-container">
        <div id="ca-login-user-content">
            <?php include_once "./includes/dashboard_options.php" ?>

            <section class="ca-elders-list-container">
                <h1 class="ca-elders-list-container-title">
                    List of Elders you can help
                </h1>
                <div class="ca-elders-list-container-lists"></div>
            </section>
        </div>
    </div>

    <script src="./assets/js/list_elders.js"></script>
<?php include_once "includes/footer.php" ?>