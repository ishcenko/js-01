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
