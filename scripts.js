// Example 1 - Майстерня коштовностей
// Напишіть метод calcTotalPrice(stoneName), який приймає назву каменю і розраховує та повертає загальну вартість каменів з таким ім'ям, ціною та кількістю з властивості stones.

// const chopShop = {
//   stones: [
//     { name: "Emerald", price: 1300, quantity: 4 },
//     { name: "Diamond", price: 2700, quantity: 3 },
//     { name: "Sapphire", price: 1400, quantity: 7 },
//     { name: "Ruby", price: 800, quantity: 2 },
//   ],
//   calcTotalPrice(stoneName) {
//     const currentStone = this.stones.find(({ name }) => name === stoneName);
//     //   console.log(currentStone);
//     return currentStone.price * currentStone.quantity;
//   },
// };

// console.table(chopShop.calcTotalPrice("Emerald")); // 5200
// console.log(chopShop.calcTotalPrice("Diamond")); // 8100
// console.log(chopShop.calcTotalPrice("Sapphire")); // 9800
// console.log(chopShop.calcTotalPrice("Ruby")); // 1600

//!=====================================

// Example 2 - Телефонна книга
// Виконайте рефакторинг методів об'єкту phonebook щоб код запрацював.

// const phonebook = {
//   contacts: [],
//   add(contact) {
//     const newContact = {
//       list: "default",
//       ...contact,
//       id: this.generateId(),
//       createdAt: this.getDate(),
//       showCtx() {
//         console.log(this);
//       },
//     };
//     newContact.showCtx();
//     this.contacts.push(newContact);
//   },
//   generateId() {
//     return "_" + Math.random().toString(36).substr(2, 9);
//   },
//   getDate() {
//     return Date.now();
//   },
// };

// console.log(
//   phonebook.add({
//     name: "Mango",
//     email: "mango@mail.com",
//     list: "friends",
//   })
// );
// console.log(
//   phonebook.add({
//     name: "Poly",
//     email: "poly@hotmail.com",
//   })
// );
// console.log(phonebook.contacts);

//!================================

// Створіть об'єкт calculator з трьома методами:

//* read(a, b)- приймає два значення та зберігає їх як властивості об'єкта.
//* add() - повертає суму збережених значень.
//* mult() - перемножує збережені значення та повертає результат.

// const calculator = {
//   read(a = 0, b = 0) {
//     (this.a = a), (this.b = b);
//   },
//   add() {
//     return this.a + this.b;
//   },
//   mult() {
//     return this.a * this.b;
//   },
// };

// calculator.read(5, 3);
// // console.log(calculator);
// console.log(calculator.add());
// console.log(calculator.mult());
//!================
// function boo() {
//   console.log(this);
// }

// function foo() {
//   boo();
//   console.log(this);
// }

// foo();

//!=========

// const user = {
//   username: "Alex",
//   sayHi() {
//     console.log(`Hello my name is ${this.username}`);
//   },
// };
// user.sayHi();

// const user2 = {
//   username: "Olga",
//   foo: user.sayHi,
// };

// user2.foo();

//!==================
// function boo() {
//   console.log(this);
// }
// // const foo = () => console.log(this);
// // foo();

// const user = {
//   username: "Alex",
//   sayHi() {
//     // const foo = () => console.log(this);
//     // foo.call({ username: "Lena" });
//     // const copyFoo = foo.bind({ username: "Lena" });
//     // copyFoo();

//     // boo();
//     console.log(`Hello ${this.username}`);
//   },
// };

// user.sayHi();

// // boo.call({ username: "Lena" });
//!===================

// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     // console.log(this);
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
//   //   console.log(callback);
//   // callback() - це виклик методу getFullName без об'єкта
//   //   console.log(`Обробляємо заявку від ${callback.call(customer)}.`); // 1.1
//   console.log(`Обробляємо заявку від ${callback}.`); // 1.2
// }

// // makeMessage(customer.getFullName); // 1.1
// makeMessage(customer.getFullName.bind(customer)); // 1.2

//!===============================
let text = "100";
text = text.padEnd(12, "0");
console.log(text);

let number = "123";
number = number.padStart(12, "*");
console.log(number);

//!==========
