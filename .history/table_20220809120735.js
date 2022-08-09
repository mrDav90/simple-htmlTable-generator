// table generator

console.log("------------------------");
console.log("Simple table generator");
console.log("------------------------");

var body = null;

if (typeof document !== 'undefined') {
    // will run in client's browser only
    body = document.getElementsByTagName("body")[0];
}

let tableContainer = document.querySelector(".table-container");



