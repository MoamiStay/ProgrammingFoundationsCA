console.log("--- Question 1 ---");
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

console.log("--- Question 3 ---");
console.log("Answer shows in browser")
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

 for (var i = 0; i < games.length; i++) {
    var item = games[i];
    if (item.rating <= 3.5) {
    document.querySelector("ul.games").innerHTML += ("<li>Name of game: " + item.title + " rating: " + item.rating + " </li>" );
    }
 }

 console.log("--- Question 4 ---");
 function thingIDontLike(disliked) {
    if (typeof disliked === "string") {
        console.log("I don't like " + disliked);
     } else { console.log("Please send in a string");
    }
}
thingIDontLike("HAH!");
thingIDontLike(55);


console.log("--- Question 5 ---");
function subtract(num1, num2) {
    var subtracted = (parseFloat(num1) - parseFloat(num2));
    if (isNaN(subtracted) === true) {
        console.log("Invalid argument(s)");
    } else { return subtracted; //console.log(num1 + " - " + num2 + " = " + " " + subtracted);
    }
}
subtract(10, "5");
subtract("red", false);

var displaySubtract = document.getElementById("subtraction");
displaySubtract.innerHTML = (subtract(100, 58));

console.log("--- Question 6 ---");
var button = document.querySelector("button");
var changeButton = document.getElementsByClassName("page");
var title = document.querySelector("title");
var body = document.querySelector("body");
var headline = document.querySelector("h1");
var uList = document.querySelector("ul");

//console.dir(changeButton);
changeButton.onclick = function() {
    title.innerHTML = "New title";
    body.style.backgroundColor = "yellow";
}