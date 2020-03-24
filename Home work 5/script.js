//1
var userNumber = +prompt("Enter radius", "");
function calculateCircleSquare(radius) {
  let result = Math.PI * radius ** 2;
  return result;
}

console.log("Square is: " + calculateCircleSquare(userNumber));

//2
function calculateLenthOfCircle(radius) {
  let result = 2 * Math.PI * radius;
  return result;
}

console.log("LenthofCircle is: " + calculateLenthOfCircle(userNumber));

//3
function avgSum(a, b) {
  let result = (a + b) / 2;
  return result;
}

console.log("Average sum is: " + avgSum(5, 13));

//4
function calc (x, y, action) {
  switch (action) {
    case "+":
      return x + y;

    case "-":
      return x - y;

    case "*":
      return x * y;

    case "/":
      return x / y;

    case "%":
      return x % y;

    case "^":
      return x ** y;

    default:
      console.log("Alert!! Wrong symbol!");
  }
}

console.log("Result is: " + calc (20, 4, "*"));
