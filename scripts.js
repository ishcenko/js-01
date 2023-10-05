//* Example 1 - Основи об'єктів
// Напиши скрипт, який для об'єкта user, послідовно:

//1. додає поле mood зі значенням 'happy'
//2. замінює значення hobby на 'skydiving'
//3. замінює значення premium на false
//4. виводить вміст об'єкта user у форматі ключ:значення використовуючи Object.keys() та for...of

// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true,
// };
// user.mood = "Happy";
// user["moods"] = "happy";
// user.hobby = "skudiving";
// // console.log(user);

// for (const key in user) {
//   //   console.log(`${key}:${user[key]}`);
// }
// // console.log(Object.keys(user));

// for (const key of Object.keys(user)) {
//   //   console.log(`${key}:${user[key]}`);
// }

//!==========================================
//* Example 2 - метод Object.values()
// У нас є об'єкт, де зберігаються зарплати нашої команди. Напишіть код для підсумовування всіх зарплат і збережіть результат у змінній sum. Повинно вийти 390. Якщо об'єкт salaries порожній, то результат має бути 0.

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pate: 150,
// };
// const salaliesArr = Object.values(salaries);
// // console.log(salaliesArr);

// let sum = 0;

// for (const salari of salaliesArr) {
//   console.log(salari);
//   sum += salari;
// }

// console.log("Результат:", sum, "грн");

// !========================================

//* Example 3 - Масив об'єктів
// Напишіть функцію calcTotalPrice(stones, stoneName), яка приймає масив об'єктів та рядок з назвою каменю. Функція рахує і повертає загальну вартість каміння з таким ім'ям, ціною та кількістю з об'єкта

const stones = [
  { name: "Смарагд", price: 1300, quantity: 4 },
  { name: "Діамант", price: 2700, quantity: 3 },
  { name: "Сапфір", price: 400, quantity: 7 },
  { name: "Щебінь", price: 200, quantity: 2 },
];

function calcTotalPrice(stones, stoneName) {
  for (const stone of stones) {
    if (stone.name === stoneName) {
      return stone.price * stone.quantity;
    }
  }
  return `Такого каменя як ${stoneName} немає!`;
}
const total = calcTotalPrice(stones, "Сапфір");
console.log(total);
