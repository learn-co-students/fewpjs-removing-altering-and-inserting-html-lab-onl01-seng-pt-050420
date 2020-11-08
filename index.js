// Write your code here!
document.getElementById('main').remove();

let newHeader = document.createElement('h1');
newHeader.id = "victory";
newHeader.innerText = "Daniel is the champion";
document.body.appendChild(newHeader);
newHeader = document.getElementById('victory');