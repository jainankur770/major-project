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

        <section class="ca-user-info">
            <div class="ca-dashboard-info">
                <div class="ca-dashboard-heading">Dashboard</div>
                <h1 class="ca-user-name">Name: </h1>
                <h1 class="ca-user-id">Id: </h1>
                <h1 class="ca-user-age">Age: </h1>
                <h1 class="ca-user-address">Address: </h1>
                <h1 class="ca-user-contact">Contact: </h1>
                <h1 class="ca-user-review">Review: </h1>
                <h1 class="ca-user-rating">Rating: </h1>
                <h1 class="ca-user-takingcare">Taking Care Of: </h1>
            </div>
        </section>
    </div>
</div>

<?php include_once "includes/footer.php" ?>