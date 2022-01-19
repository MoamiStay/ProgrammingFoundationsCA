
var pets = [
    {
    type: "cat", age: 5.5,
    },
    {
        type: "dog", age: 3.8,
    },
    {
        type: "parrot", age: 4.0,
    },
];


var petsLength = pets.length;

for (var i = 0; i < petsLength; i++) {
    var item = pets[i];
    if (item.age >= 4) {
    console.log(item.type + ": " + item.age + " years old") }
}

function myFunction(bool) {
    if (typeof bool === "boolean") {
        console.log(typeof bool);
    } else {
        console.log("Please pass in a boolean value");
    }
}
myFunction(true);

var subheading = document.querySelector("h2");
var button = document.querySelector("button");

function newheading() {
    subheading.innerHTML = "updated heading";
    subheading.style.color = "blue";
}

button.onclick = newheading;