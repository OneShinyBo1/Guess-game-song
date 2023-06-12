<?php
    include_once 'header.php';
?>

<?php

if (!isset($_SESSION["useruid"])) {
    header("location: login.php");
    exit();
}
?>

<br>
<br>

    <h1>Guess the song</h1>
    
    <form autocomplete="off">
        <div>
            <button class="bootan" id="btn">Guess</button>
            <input type="text" id="input" placeholder="Your answer" />
            
        </div>
        <ul class="list"></ul>
        <br> <br>
        <button class="bootan" onclick="playAudio()">Play Song</button>
    </form>
    <script src="js/script.js"></script>
</body>
</html>