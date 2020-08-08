var app = document.getElementById("app");
console.log(app);
const request = new XMLHttpRequest();
const url = "https://ghibliapi.herokuapp.com/films";

request.open("get",url,true);
request.send();


request.onload = function (response){
var movies = JSON.parse(request.responseText);

movies.forEach((movie)=>{
console.log(movie.title);

const card = document.createElement("div")
const title = document.createElement("h2")
const description = document.createElement("p")

title.textContent = movie.title;
description.textContent = movie.description;

app.appendChild(card);
card.appendChild(title);
card.appendChild(description);
})

}