//* Example 1 - Базові операції з масивом

// Створіть масив genres з елементами «Jazz» та «Blues».
//1. Додайте «Рок-н-рол» до кінця.
//2. Виведіть у консоль перший елемент масиву.
//3. Виведіть у консоль останній елемент масиву. Код повинен працювати для масиву довільної довжини.
//4. Видаліть перший елемент та виведіть його в консоль.
//5. Вставте «Country» та «Reggae» на початок масиву.
// const genres = ["Jazz", "Blues"];
// console.table(genres);

// genres.push("Рок-н-рол");
// console.table(genres);
// console.log(genres[0]);
// console.log(genres[1]);
// console.log(genres[2]);
// console.log(genres[genres.length - 1]);
// console.log(genres.shift());
// console.log(genres.splice(0, 1)[0]);
// genres.unshift("Country", "Reggae"); //додає елементи
// genres.splice(0, 0, "Country", "Reggae"); //додає елементи

//!=========================================
//* Example 2 - Масиви та рядки
// Напиши скрипт для обчислення площі прямокутника зі сторонами, значення яких зберігаються у змінній values у вигляді рядка. Значення гарантовано розділені пробілом.

// const values = "44 8";
// const valuesArray = values.split(" ");
// console.log(valuesArray);
// const a = Number(valuesArray[0]);
// console.log(a);
// const b = Number(valuesArray[1]);
// console.log(b);
// console.log(a * b);

//!=========================================
//* Example 3 - Перебір масиву

// Напиши скрипт для перебору масиву fruits циклом for. Для кожного елемента масиву виведи в консоль рядок у форматі номер_елемента: значення_елемента. Нумерація елементів повинна починатися з 1.
// const fruits = ["🍎", "🍇", "🍑", "🍌", "🍋"];
// for (let i = 0; i < fruits.length; i += 1) {
//   console.table(`${i + 1} - ${fruits[i]}`);
// }

// for (const fruit of fruits) {
//   console.log(fruit);
// }

// for (const i in fruits) {
//   console.log(i);
//   console.log(`${Number(i) + 1}: ${fruits[i]}`);
// }
//!==================================
//* Example 5 - Масиви та рядки
// Напиши скрипт, який виводить у консоль усі слова рядка крім першого і останнього. Результуючий рядок не повинен починатися або закінчуватися символ пробілу. Скрипт повинен працювати для будь-якого рядка.

// const string = "Welcome new to the in apple future";

// const strArray = string.split(" ");
// strArray.shift();
// strArray.pop();
// const newArr = strArray.join(" ");
// console.log(newArr);

//!============================
//* Example 6 - Масиви та рядки
// Напиши скрипт, який «розгортає» рядок (зворотний порядок букв) і виводить його в консоль.

// const string = "Welcome to the future";
// const reversedStr = string.split("").reverse().join("");
// console.log(reversedStr);

// let newString = [];
// const stringArray = string.split("");
// for (let i = stringArray.length - 1; i >= 0; i -= 1) {
//   console.log(stringArray[i]);
//   newString.push(stringArray[i]);
// }
// newString = newString.join("");
// console.log(newString);
//!===============================
//* Example 7 - Сортування масиву із циклом
// Напиши скрипт сортування масиву рядків в алфавітному порядку за першою літерою елемента.

const langs = ["python", "javascript", "c++", "haskel", "php", "ruby"];
console.log(langs);
console.log(langs.sort());
