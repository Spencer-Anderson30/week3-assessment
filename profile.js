const button1 = document.getElementById("color")
myFavoritColor.addEventListener("click", color)
alert("Red")

const button2 = document.getElementById("place")
myFavoritColor.addEventListener("click", place)
alert("Lake Powell")

const button3 = document.getElementById("ritual")
myFavoritColor.addEventListener("click", ritual)
alert("Meditating")


// I could not figure this one out. I looked at like 5 different ways to do this and still couldn't get the button to show an alert when clicking on it.

// alert("Hello! I am an alert box!!");

// element.addEventListener("click", function() {
//     document.getElementById("demo").innerHTML = "Hello World";
//   });

// element.addEventListener("click", myFunction);

// function myFunction() {
//   document.getElementById("demo").innerHTML = "Hello World";
// }

// const movieTitle = document.createElement("span");
// movieTitle.textContent = inputField.value;
// movieTitle.addEventListener("click", crossOffMovie);
// movie.appendChild(movieTitle)

// const deleteBtn = document.createElement("button");
// deleteBtn.textContent = "x";
// deleteBtn.addEventListener("click", deleteMovie);
// movie.appendChild(deleteBtn);