// générateur de table html

console.log("générateur de table");

document.body.onload = tablegen;

function tablegen(){
    let tableContainer = document.querySelector(".table-container");


    let table = document.createElement("table");
    let tr = document.createElement("tr");
    let th = document.createElement("th");
    let td = document.createElement("td");

    tr.appendChild(th);
    tr.appendChild(td);
    table.appendChild(tr);

    tableContainer.innerHTML = table ;
}