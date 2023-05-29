
// Array of games, games are objects with name, genre and year
// TODO: Add more (actual) games
let names = [
    // {game: "Titas", genre: "RPG", year: 2021},
    // {game: "Jonas", genre: "RPG", year: 2021},
    {game: "Dark souls", genre: "RPG", year: 2011},
    {game: "Team Fortress 2" , genre: "Shooter", year: 2007},
    {game: "Among Us" , genre: "Social deduction", year: 2018},
    // "Brawlhalla",
    // "Crab Game",
    // "Ecolyptus plant",
    // "France",
    // "Game",
    // "Hardstone",
    // "Insolent",
    // "James",
    // "Krab Game",
    // "Lebron James",
    // "Minecraft",
    // "Noita",
    // "Oman",
    // "Prince Horace",
    // "Qatar",
    // "Rainbow Six Siege",
    // "Stan",
    // "Uganda",
    // "Vatican City",
    // "Washroom",
    // "Xenomorph",
    // "Yeah",
    // "Zaza"
]

// Get game names from array by using map
var gameName = names.map(a => a.game);
console.log(gameName);


// Sort names in ascending order
let sortedNames = gameName.sort();
console.log(sortedNames);
// User input
let input = document.getElementById("input");

// Get random name from array
var selectedName = names[Math.floor(Math.random()*names.length)];
console.log(selectedName);

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


// Checks if game is correct
function confirmName(){
    let name = document.getElementById("input").value;
    if(name == selectedName.game){
        alert("Correct!");
    } else {
        alert("Wrong!");
    }
    event.preventDefault();
}




