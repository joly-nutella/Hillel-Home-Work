let userName = prompt("Name", "Введите свое имя");
let userAge = prompt("Age", "Введите свой возраст");
let userInfo = confirm("Алкоголь употребляем?");


if (userName === null || userName === "") {
  console.log("Неправильное имя");
} else if(userAge === null || Number.isNaN(userAge)){
  console.log("Неправильный возраст");
}else{
if (userInfo !== true) {
  alert("Так держать!!");
  } else{
   if (userAge > 40) {
    alert("Не злоупотребляйте!");
  } else if (userAge < 18) {
    alert("  Ты что?! Маме расскажу!!");
  } else {
    alert("Только водку с пивом не мешай...");
  }
}
}