// générateur de table html

console.log("générateur de tableau");

let tableContainer = document.querySelector(".table-container");


let table = document.createElement("table");
table.style.width = "100px";
table.style.border = "solid black 1px";
let tr = document.createElement("tr");
let th = document.createElement("th");
let td = document.createElement("td");

tr.appendChild(th);
tr.appendChild(td);
table.appendChild(tr);

tableContainer.innerHTML = table ;