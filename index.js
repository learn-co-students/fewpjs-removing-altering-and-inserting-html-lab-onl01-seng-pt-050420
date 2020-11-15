// Write your code here!
var el = document.getElementById('main');
el.remove(); 

let newHeader = document.createElement('h1');
let attr = document.createAttribute("id");
attr.value = "victory";
newHeader.setAttributeNode(attr);
document.body.appendChild(newHeader);
newHeader.innerHTML = "DANG is the champion";

