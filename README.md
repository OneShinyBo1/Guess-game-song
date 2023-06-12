# Guess-game-song
 YFF project

This is a project where a user must log in and proceed to play a quiz-like guessing game based on songs

## How to add more songs
To add songs, you have to open the js folder and the script.js file.
In there you will find an array of objects containing mainly game names and what the song is called.
Add in your selected game, the name of the audio file, and put the actual audio file inside the Audio folder.
Before the name of your audio file, put Audio/


## If missing database
In phpmyadmin:

Create a database with the name phpproject01

Go into the database and enter in the sql code

    CREATE TABLE users (
    usersId int(11) PRIMARY KEY AUTO_INCREMENT NOT NULL,
    usersName varchar(128) NOT NULL,
    usersEmail varchar(128) NOT NULL,
    usersUid varchar(128) NOT NULL,
    usersPwd varchar(128) NOT NULL
);

And press go.

The login system should then work.

