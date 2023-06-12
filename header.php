<?php
session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/style.css">

</head>
<body>

    <ul>
        <div id="navbar">
        <li class="navContent"><a href="index.php">Home</a></li>
        <li class="navContent"><a href="about.php">About</a></li>
        <?php 
            if (isset($_SESSION["useruid"])) {
                echo "<li class='navContent'><a href='game.php'>Game</a></li>";
                echo "<li class='navContent'><a href='includes/logout.inc.php'>Log Out</a></li>";
            }
            else {
                echo "<li class='navContent'><a href='signup.php'>Sign Up</a></li>";
                echo "<li class='navContent'><a href='login.php'>Log In</a></li>";
            }
        ?>
        </div>
    </ul>