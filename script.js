let userName = prompt("Введіть ваше ім'я");

while (userName === null || userName === "" || !isNaN(userName)) {
  userName = prompt ("Введіть ваше ім'я" , userName);
}
let userAge = +prompt("Введіть ваш вік",);

while (userAge === null || userAge === "" || isNaN(userAge)) {
  userAge = prompt ("Введіть ваш вік" , userAge);
}

console.log(userName + userAge);

if (userAge < 18) {
  alert("You are not allowed to visit this website");
} else if ((userAge > 18, userAge <= 22)) {
  let check = confirm("Are you sure you want to continue?");
  if (check === false) {
    alert("You are not allowed to visit this website");
  } else  {
    alert(`Welcome ${userName}`);
  }
} else {
  alert(`Welcome  ${userName}`);
}
