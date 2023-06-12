<?php
    include_once 'header.php';
?>


        <?php 
            if (isset($_SESSION["useruid"])) {
                echo "<h1>Hello mr ". $_SESSION["useruid"] ."</h1>";
            }
            else {
                echo "<h1>Welcome Guest</h1>";
                echo "<h3>Please sign up or log in to play the game</h3>";
            }
        ?>


<?php
    include_once 'footer.php';
?>
