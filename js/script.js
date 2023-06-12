
// Array of games, games are objects with name, genre and year
// TODO: Add more (actual) games
let names = [
    // {game: "Dark souls", genre: "RPG", year: 2011, song: "Audio/DarkSouls.mp3"},  
    // {game: "Bloodborne", genre: "RPG", year: 2015, song: "Audio/Bloodborne.mp3"},
    // {game: "Team Fortress 2" , genre: "Shooter", year: 2007, song: "Audio/TF2.mp3"},
    // {game: "Among Us" , genre: "Social deduction", year: 2018, song: "Audio/AmongUs.mp3"},
    // {game: "Minecraft" , genre: "Sandbox", year: 2011, song: "Audio/Minecraft.mp3"},
    {game: "Terraria" , genre: "Sandbox", year: 2011, song: "Audio/Song3.mp3"},
    {game: "Counter-Strike: Global Offensive" , genre: "Shooter", year: 2012, song: "Audio/Song1.mp3"},
    {game: "World of Warcraft" , genre: "MMORPG", year: 2004, song: "Audio/Song4.mp3"},
    {game: "Dark souls 3" , genre: "RPG", year: 2016, song: "Audio/Song2.mp3"},
    // {game: "Grand Theft Auto V" , genre: "Action-adventure", year: 2013, song: "Audio/GTA5.mp3"},
    // {game: "The Elder Scrolls V: Skyrim" , genre: "RPG", year: 2011, song: "Audio/Skyrim.mp3"},
    // {game: "Portal 2" , genre: "Puzzle", year: 2011, song: "Audio/Portal2.mp3"},
    // {game: "Half-Life 2" , genre: "Shooter", year: 2004, song: "Audio/HalfLife2.mp3"},
    // {game: "The Witcher 3: Wild Hunt" , genre: "RPG", year: 2015, song: "TheWitcher3.mp3"},
    // {game: "Fallout: New Vegas" , genre: "RPG", year: 2010, song: "FalloutNewVegas.mp3"},



]

// Get game names from array by using map

var gameName = names.map(a => a.game);

// Sort names in ascending order
let sortedNames = gameName.sort();

// User input
let input = document.getElementById("input");

// Get random name from array
var selectedName = names[Math.floor(Math.random()*names.length)];


// Function to display names
// Execute Function on Keyup
input.addEventListener("keyup", (e) => {
        // Initially remove all elements ( so if user deletes input, all elements are removed)
        removeElements();
    // Loops through array above
    for(let i of sortedNames){
        // Check if input value matches with array value, 
        // even if input is not complete and is in lowercase
        if(i.toLowerCase().startsWith(input.value.toLowerCase()) && input.value != ""){

            // Create li element
            let listItem = document.createElement("li");

            // One common class name
            listItem.classList.add("list-items");
            listItem.style.cursor = "pointer";
            listItem.setAttribute("onclick", "displayNames('"+ i +"')")

            // Display matched part in bold
            let word = "<b>" + i.substr(0, input.value.length) + "</b>";
            word += i.substr(input.value.length);

            //display the value in array
            listItem.innerHTML = word;
            document.querySelector(".list").appendChild(listItem);
        }
    }
});

// Function to display names
function displayNames(value){
    input.value = value;
    removeElements();
}

// Function to remove elements
function removeElements(){
    // Clear all elements
    let items = document.querySelectorAll(".list-items");
    items.forEach((item) => {
        item.remove();
    });
}

const element = document.getElementById("btn");
element.addEventListener("click", confirmName);

var attempts = 1;
// Checks if game is correct
function confirmName(){

    // Checks if user has run out of attempts
if(attempts < 5){
        
    // variable for the user input
    let name = document.getElementById("input").value;

    // Checks if user has written something
    if (gameName.includes(name)){ 

        // Checks if it is correct
        if(name == selectedName.game){
            alert("Correct!");
        } else {
            attempts+= 1;
            console.log(attempts);
            alert("Wrong!");
        }

    }else{
        alert("You have to write something!");
     }

}else{
    alert("You have no more attempts!");
    document.getElementById("btn").disabled = true;
}
    // Prevents the page from reloading
    event.preventDefault();
}


// Audio
var audio = document.createElement("audio");


// Plays specific amount of audio based on attempts
function playAudio() {
    if (audio.paused) {
        setTimeout(function(){
            // const audioIndex = Math.floor(Math.random() * audioArray.length);

            const audio = new Audio(selectedName.song);
            console.log(audio);
            audio.play();

            setTimeout(function(){
                audio.pause();
                audio.currentTime = 0;
            }, attempts*3000);
        }, 2);

    
    }else{

        audio.pause();
        audio.currentTime = 0;
}
event.preventDefault();
}

