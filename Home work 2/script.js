let name = prompt("What is your name?", "Enter your name");
let yourBirth = prompt("Year of birth","Enter year of birth");
//console.log(yourBirth,typeof yourBirth);
yourBirth = +yourBirth;
//console.log(yourBirth,typeof yourBirth);
const CURRENT_YEAR = 2020;
//console.log(CURRENT_YEAR, typeof CURRENT_YEAR);
let age = (CURRENT_YEAR - yourBirth);
//console.log(age);
alert(name + " " + age);
//confirm("Your age is" +" "+ age);


let a = prompt();
a = +a;
let b = prompt();
b = +b;
let c = prompt();
c = +c;
let sum = a + b + c;
let average = sum/3;
console.log(average);
