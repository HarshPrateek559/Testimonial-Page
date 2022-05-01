//declaring the variables from the DOM
let prev = document.querySelector("#forward");
let next = document.querySelector("#back");
let tanya = document.querySelector("#tanya");
let john = document.querySelector("#john");

//functions for changing the cards

next.onclick = ()=>{
    tanya.style.display = "flex";
    john.style.display = "none";
}

prev.onclick = ()=>{
    tanya.style.display = "none";
    john.style.display = "flex";
}