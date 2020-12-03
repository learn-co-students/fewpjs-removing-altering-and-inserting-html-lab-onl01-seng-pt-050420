// Write your code here! 


// Remove DOM node "main"
document.getElementById("main").remove();   



//Make sure you create an <h1> with id 'victory' 
let newHeader = document.createElement("h1"); 
  newHeader.setAttribute("id", "victory"); 

// with a sweet message in it: expected '' to include 'is the champion'
  newHeader.innerHTML = "Ian is the champion"; 

// <h1 id="victory">Ian is the champion</h1>
  document.body.appendChild(newHeader);