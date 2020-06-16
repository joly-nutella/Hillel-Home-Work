
function sum() {
    let sum = 0;
    return function(number) {
        return (sum += number);
    };
}

let sumCounter = sum();
console.log(sumCounter(15));
console.log(sumCounter(22));
console.log(sumCounter(33));