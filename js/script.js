console.log("--- Question 1 ---")
var outOfStock = true;

if (outOfStock === true) {
    console.log("Out of Stock"); 
} else {
    console.log("In Stock");
}

console.log("--- Question 2 ---")
for (let i = 15; i < 25; i++) {
    if (i !== 17 && i !== 20) { continue; }
    console.log(i);
} 

console.log("--- Question 3 ---")
var games = [
    {
        title: "Grand Theft Auto",
        rating: 4.48,
    },
    {
        title: "Portal 2",
        rating: 3.5,
    },
    {
        title: "Team Fortress",
        rating: null,
    },
    {
        title: "the Witcher",
        rating: 3.0,
    },
    {
        title: "The Elder Scrolls",
        rating: 2.9,
    },
];

var unsortedList = document.getElementsByClassName("games");

unsortedList.innerHTML = "anything";

//document.createElement("li");
//body.style.backgroundColor = "red";

/*
for (let i = 0; i < games.length; i++) {
    var item = games[i];
    unsortedList.innerHTML = ("<li>Name of game: " + item[0] + " rating: " + item[1] + " </li>");
}
*/
