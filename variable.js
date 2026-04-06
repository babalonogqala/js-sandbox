var a = 3;
var b = 8;

var c = a;

a = b;
b = c;
console.log(a);
console.log(b);

var output = prompt("character num");
let num = output.length;
var left = 600 - num;

// var char = function lenghtcalc() {
//   let num = output.length;
//   num - 200;
// };

console.log(num + " plus only left " + left);
