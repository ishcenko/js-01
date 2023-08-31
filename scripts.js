//* Example 1 - Математичні оператори
// Виведи на екран загальну кількість яблук та винограду. Різницю яблук та винограду.

const apples = 47;
const grapes = 135;
const total = apples + grapes;
console.log('Total', total);
const diff = apples - grapes;
console.log('Diff', diff);

//* Example 2 - Комбіновані оператори
// Заміни вираз перевизначення комбінованим оператором +=.

let studens = 100;
// studens = studens + 50;
studens += 50;
console.log('Studens', studens);

let ass = 45;
ass **= 34; //ступінь
console.log('Ass', ass);

//* Example 3 - Пріоритет операторів
// Розбери пріоритет операторів в інструкції привласнення значення змінної result.

const result = 108 + 223 - 2 * 5;
console.log('Result', result);

//* Example 4 - Клас Math
// Напиши скрипт, який виводить у консоль заокруглені вгору/вниз і т.д. значення змінної value. Використовуй методи Math.floor(), Math.ceil() та Math.round(). Перевір що буде в консолі при значеннях 27.3 та 27.9.

const value = 27.49;
console.log('Округленя до цілого', Math.floor(value));
console.log('Округленя до вгору', Math.ceil(value));
console.log(Math.round(value));

//* Example 5 - Шаблонні рядки
// Склади фразу за допомогою шаблонних рядків A has B bots in stock, де A, B - змінні вставлені в рядок.

const companyName = 'Cyberdyne System';
const repairBors = 150;
const defenceBots = 50;
const message_1 = `${companyName} has ${
  repairBors + defenceBots
} bots in stock`;
console.log(message_1);

//* Example 6 - Методи рядків та чейнінг
// Напиши скрипт, який розраховує індекс маси тіла людини. Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини у метрах.

// Вага та висота зберігаються у змінних weight та height, але не як числа, а в вигляді рядків (спеціально для завдання). Не цілі числа можуть бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової частини може бути кома.

// Індекс маси тіла необхідно округлити до однієї цифри після коми;

let weight = '88,3';
let height = '1.75';

weight = Number(weight.replace(',', '.'));
height = Number(height.replace(',', '.'));

console.log('weight', weight);
console.log('height', height);

const bmi = Number((weight / Math.pow(height, 2)).toFixed(1)); // height **      Math.pow(height, 2)
console.log('Індекс маси тіла', bmi);

//* Example 7 - Оператори порівняння та приведення типів
// Яким буде результат виразів?
console.log(5 > 4);
console.log(10 >= '7');
console.log('2' > '12');
console.log('2' == 2);
console.log('2'.charCodeAt(0)); //unicode
console.log('6' === 6);
console.log(false === 'false');
console.log(1 == true);
console.log(1 === true);
console.log('Papaya' === 'papaya');
console.log(undefined == null);
console.log(undefined === null);
console.log('Papaya' < 'papaya');
console.log(false === false);
console.log('0' === false);

//! ===================================

//* Example 8 - Логічні оператори
// Яким буде результат виразів?

console.log(true && 3);
console.log(false && 3);
console.log(true && 4 && 'kiwi');
console.log(true && 0 && 'kiwi');
console.log(true || 3);
console.log(true || 9 || 8);
console.log(null || 0 || 'ooops');
console.log(null || 2 || undefinedlog);
console.log((1 && null && 2) > 0);
console.log(null || (2 && 7) || 4);
