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
