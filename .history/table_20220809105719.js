// générateur de table html

let tableContainer = document.querySelector(".table-container");


let table = document.createElement("table");
let tr = document.createElement("tr");
let th = document.createElement("th");
let td = document.createElement("td");

tr.appendChild(th);
tr.appendChild(td);
table.appendChild(tr);
