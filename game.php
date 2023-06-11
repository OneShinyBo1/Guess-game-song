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