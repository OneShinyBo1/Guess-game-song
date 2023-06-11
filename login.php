<?php
    include_once 'header.php';
?>

    <h2>Log In</h2>
    <form action="includes/login.inc.php" method="post">
        <input type="text" name="name" placeholder="Username/Email...">
        <input type="password" name="pwd" placeholder="Password...">
        <button type="submit" name="submit">Log In</button>
    </form>


<?php
    include_once 'footer.php';
?>
