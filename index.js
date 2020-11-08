// Write your code here!
document.querySelector('main').remove();

let newHeader  = document.createElement("h1");
document.body.appendChild(newHeader)

newHeader= document.querySelector("h1#victory");
newHeader.innerHTML = "Zach is the champion";

