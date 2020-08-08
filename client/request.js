var app = document.getElementById("app");
console.log(app);
const request = new XMLHttpRequest();
const url = "https://ghibliapi.herokuapp.com/films";
var cards = [];

request.open("get",url,true);
request.send();


request.onload = function (response){
var movies = JSON.parse(request.responseText);

movies.forEach((movie)=>{
console.log(movie.title);

const card = document.createElement("div")
card.setAttribute("class","card my-3")
const title = document.createElement("h2")
title.setAttribute("class","card-header bg-primary text-light")
const description = document.createElement("p")
description.setAttribute("class","card-body")

title.textContent = movie.title;
description.textContent = movie.description;

app.appendChild(card);
card.appendChild(title);
card.appendChild(description);
cards.push(card);
})

}


function sort(){
    
}