<?php
    include_once 'header.php';
?>

<?php 
            if (isset($_SESSION["useruid"])) {
                echo "<p>Hello mr ". $_SESSION["useruid"] ."</p>";
            }
        ?>


<?php
    include_once 'footer.php';
?>
