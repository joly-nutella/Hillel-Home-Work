//Первое задание
let randomNumber = Math.floor(Math.random() * (10 + 1));
console.log(randomNumber);
while (true) {
  let userNumber = prompt("Введите число от 0 до 10", "");
  console.log(userNumber);
  if (userNumber === "") {
    alert("Введите число!!");
  } else if (userNumber === null) {
    alert("Приходите снова:)");
    break;
  }
  userNumber = Number(userNumber);
  if (Number.isNaN(userNumber)) {
    alert("Введите число от 0 до 10!");
  } else if (userNumber === randomNumber) {
    alert("Правильно, Вы победили!!");
    break;
  } else {
    alert("Введите другое число");
  }
}

//Второе задание
let userHeight = +prompt("Введите высоту треугольника");
 let x = "";
let star = "*";

for (let i = 0; i <= userHeight; i++) {
   x += `${star}   `;
     console.log(x);
 }


let triangle ="";
for (let j = 0; j <= userHeight; j++) {
    for(let s = 0; s <= j; s++){
      triangle += `${star}  `;
}  
    triangle += "\n";
}
console.log(triangle);



let triangle1 = "";
let str = "*  ";

for (let k = 0; k <= (userHeight + 1); k++) {
triangle1 += str.repeat(k);
triangle1 += "\n";
}
console.log(triangle1);
