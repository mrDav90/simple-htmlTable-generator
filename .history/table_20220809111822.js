// générateur de table html

console.log("générateur de tableau");


let table = document.createElement("table");
table.style.width = "100%";
table.style.border = "solid black 1px";
let tr = document.createElement("tr");
let th = document.createElement("th");
let td = document.createElement("td");

tr.appendChild(th);
tr.appendChild(td);
table.appendChild(tr);

document.querySelector("#table-container").innerHTML = table ;