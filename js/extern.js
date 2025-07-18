console.log("Happening in an external file");
//document.getElementById("result").innerHTML = "<h1>Hello World</h1>";
//document.querySelector("#result").innerHTML = "<h1>Hello World</h1>";
// var salary = 1000;
// //function scoped
// let count = 0;
// //block scoped
// function dummy() {
//     var salary = 1000;
// }
// if (timer < 2000) {
//     let count = 0;
// }
function calculate_area(l, w) {
    let area;
    area = l * w;
    document.querySelector("#result").innerHTML = "The area of this plot of land is : " + area;
}
calculate_area(5, 10);

function calculate_hypotenuse() {
    let side1 = 16, side2 = 25, hypo;
    hypo = Math.sqrt(Math.pow(side1, 2) + Math.pow(side2, 2));
    document.querySelector("#message").innerHTML = "The area of the triangle is : " + hypo.toFixed(2);
}
calculate_hypotenuse();

let valA = 37;
let valB = 3;
let valC = 18;
let result = (valA - valB) % 3 / 2 * (4 + valC) - 3;
alert(result);

//let fname = "Joe";
//let isAdded = true;
//isAdded = 0;
// let counter = "";
// let sum = 100.24;
// const PI = 3.142;