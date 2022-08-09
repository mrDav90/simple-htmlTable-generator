// générateur de table html

console.log("hi");

let tableContainer = document.querySelector(".table-container").innerHTML;


let table = document.createElement("table");
let tr = document.createElement("tr");
let th = document.createElement("th");
let td = document.createElement("td");

tr.appendChild(th);
tr.appendChild(td);
table.appendChild(tr);

tableContainer.appendChild(table);