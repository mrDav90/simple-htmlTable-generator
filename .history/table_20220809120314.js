// table generator

console.log("------------------------");
console.log("Simple table generator");
console.log("------------------------");

if (typeof window !== 'undefined') {
    console.log('You are on the browser')
  } else {
    console.log('You are on the server')
  }

let tableContainer = document.querySelector(".table-container");
