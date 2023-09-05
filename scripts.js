//* Example 1 - Введення користувача та розгалуження
// Використовуючи конструкцію if..else та prompt, напиши код, який питатиме: "Яка офіційна назва JavaScript?". Якщо користувач вводить ECMAScript, то показуй alert з рядком "Правильно!", в іншому випадку - "Не знаєте? ECMAScript!"

// const userAnswer = prompt("Яка офіційна назва JavaScript?");

// if (userAnswer === "ECMAScript") {
//   alert("Yes");
// } else {
//   alert("No");
// }

// if (userAnswer === "ECMAScript") alert("Yes");
// else alert("No");

// userAnswer === "ECMAScript" ? alert("Yes") : alert("No");

// let msg = "";
// userAnswer === "ECMAScript" ? (msg = "Yes") : (msg = "No");
// alert(msg);

// let msg = userAnswer === "ECMAScript" ? "Yes" : "no";
// alert(msg);

//! ==========================================

//* Example 2 - Відображення часу (if...else)
// Напиши скрипт для відображення годин та хвилин у консолі браузера у вигляді рядка формату "14 г. 26 хв.". Якщо значення змінної minutes дорівнює 0, то виводь рядок "14 г.", без хвилин.

// const hourse = 14;
// const minutes = 26;
// let time = "";
// if (minutes === 0) {
//   time = `${hourse} hourse`;
// } else {
//   time = `${hourse} hourse ${minutes} minutes`;
// }
// console.log(time);

// const hourse = 14;
// const minutes = 0;
// let time =
//   minutes === 0 ? `${hourse} hourse` : `${hourse} hourse ${minutes} minutes`;
// console.log(time);

//! ==========================================

//* Example 4 - Вкладені розгалуження
// Напиши скрипт, який порівнює числа у змінних a та b. Якщо обидва значення більше 100, то виведи в консоль максимальне з них. В протилежному випадку у консолі повинна бути сума значення b та числа 512.
//
//* Example 10 - Дедлайн здачі проекту (switch)
// Виконай рефакторинг коду задачі номер 5 використовуючи switch.
// const daysUntil = 0;

// switch (daysUntil) {
//   case 0: {
//     console.log("Now");
//     break;
//   }
//   case 1: {
//     console.log("Now+1");
//     break;
//   }
//   case 2: {
//     console.log("Now+2");

//     break;
//   }
//   default: {
//     console.log("Now++");
//   }
// }

// if (daysUntil === 0) {
//   console.log("Now");
// } else if (daysUntil === 1) {
//   console.log("Now+1");
// } else if (daysUntil === 2) {
//   console.log("Now+2");
// } else {
//   console.log("Now++");
// }

//* Example 11 - Цикл for
// Напиши цикл for, який виводить у консоль браузера числа за зростанням від min до max, але тільки якщо число кратне 5.

// const max = 100;
// const min = 20;

// for (let i = min; i <= max; i += 1) {
//   if (i % 5 !== 0) continue;
//   console.log(i);
// }

// for (let i = min; i <= max; i += 1) {
//   console.log(i);
//   if (i % 5 !== 0) continue;
// }

// for (let i = min; i <= max; i += 1) {
//   if (i % 5 !== 0) break;
//   console.log(i);
// }
// let total = 0;

// for (let i = min; i <= max; i += 1) {
//   total += i;
// }
// console.log(total);

// for (let i = max; i >= min; i -= 1) {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
//   // console.log(i);
// }

// for (let i = min; i <= max; i += 1) {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
//   // console.log(i);
// }

// for (let i = min; i <= max; i += 5) {
//   console.log(i);
// }

// for (let i = 2; i <= 10; i += 2) {
//   console.log(i);
// }

//* Example 12 - Введення користувача та розгалуження
// Напиши скрипт, який питатиме логін за допомогою prompt та логувати результат у консоль браузера.

// Якщо відвідувач вводить "Адмін", то prompt запитує пароль
// Якщо нічого не введено або натиснуто клавішу Esc - вивести рядок "Скасовано"
// В іншому випадку вивести рядок "Я вас не знаю"
// Пароль перевіряти так:

// Якщо введено пароль "Я адмін", то вивести рядок "Здрастуйте!"
// Інакше виводити рядок "Невірний пароль"

const lodin = prompt("Login")?.trim();
// console.log(lodin);

if (lodin === "123456") {
  const password = prompt("Login");
  if (password === "123456") {
    console.log("Hi!");
  } else {
    console.log(" No password");
  }
} else if (!lodin) {
  // else if (lodin === "" || lodin === undefined)
  console.log("Скасвано");
} else {
  console.log("Я вас не знаю");
}
