// class User {
//   static calcBirthDate(age) {
//     return 2023 - age;
//   }
//   constructor(userName, userAge) {
//     // console.log("Welcome");
//     // console.log(this);
//     // console.log(userName, userAge);
//     this.name = userName;
//     this.age = userAge;
//   }
//   greeting() {
//     console.log(
//       `Hello,${this.name}! You was born in ${User.calcBirthDate(this.age)}`
//     );
//   }
// }

// const user = new User("Andrii", 34);
// // console.log(user);
// user.greeting();
// console.log(User.calcBirthDate(73));
// console.log(User.calcBirthDate(47));

// console.dir(user);

// const arr = [1, 2, 3];
// console.dir(arr);
//!=======================

//! ====================================

// Example 1 - Блогер
// Напиши клас Blogger для створення об'єкта блогера з наступними властивостями:

// email - пошта, рядок
// age - вік, число
// numberOfPosts - кількість постів, число
// topics - масив тем на яких спеціалізується блогер

// Клас чекає один параметр - об'єкт налаштувань з однойменними властивостями.

// Додай метод getInfo(), який, повертає рядок: User ${пошта} is ${вік} years old and has ${кількість постів} posts.

// Додай метод updatePostCount(value), який у параметрі value приймає кількість постів, які потрібно додати користувачеві.

// class Blogger {
//   constructor({ name, age, numberOfPosts, topics }) {
//     this.name = name;
//     this.age = age;
//     this.numberOfPosts = numberOfPosts;
//     this.topics = topics;
//   }
//   getInfo() {
//     return `Blogger ${this.name} is ${this.age} years old and has ${this.numberOfPosts} posts`;
//   }
//   updatePostCount(value) {
//     this.numberOfPosts += value;
//   }
//   getYear(value) {
//     this.age += value;
//   }
// }

// const mango = new Blogger({
//   name: "mango@mail.com",
//   age: 24,
//   numberOfPosts: 20,
//   topics: ["tech", "cooking"],
// });

// console.log(mango.getInfo());

// mango.updatePostCount(10);
// mango.getYear(1);

// console.log(mango.getInfo());

// const poly = new Blogger({
//   name: "poly@mail.com",
//   age: 19,
//   numberOfPosts: 17,
//   topics: ["sports", "gaming", "health"],
// });
// console.log(poly.getInfo());

// mango.updatePostCount(10);
// poly.getYear(1);

// console.log(poly.getInfo());

//! ====================================

// Example 2 - Сховище
// Напиши клас Storage який створює об'єкти для керування складом товарів. При виклику отримуватиме один аргумент - початковий масив товарів і записуватиме його властивість items.

// Додай методи класу:

// getItems() - повертає масив товарів.
// addItem(item) - отримує новий товар і додає його до поточних.
// removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних.

// class Storage {
//   constructor(arr) {
//     this.items = arr;
//   }

//   getItems() {
//     return this.items;
//   }
//   addItem(item) {
//     this.items.push(item);
//   }
//   removeItem(item) {
//     this.items = this.items.filter((el) => el !== item);
//   }
// }

// const storage = new Storage(["🍎", "🍋", "🍇", "🍑"]);

// const items = storage.getItems();
// console.table(items); // [ '🍎', '🍋', '🍇', '🍑' ]

// storage.addItem("🍌");
// console.table(storage.items); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

// storage.removeItem("🍇");
// storage.removeItem("🍌");
// storage.removeItem("🍎");
// console.table(storage.items); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

//! ====================================

// Example 3 - User
// Напиши клас User який створює об'єкт із властивостями login та email. Оголоси приватні властивості #login та #email, доступ до яких зроби через гетер та сетер login та email.

// class User {
//   //приватні властивості
//   #login;
//   #email;
//   constructor({ login, email }) {
//     this.#login = login;
//     this.#email = email;
//   }
//   //геттер
//   get login() {
//     return this.#login;
//   }
//   //сеттер
//   set login(newLogin) {
//     if (!Number.isNaN(Number(newLogin))) {
//       console.log("логін не може бути числом");
//     } else this.#login = newLogin;
//   }
//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mango = new User({
//   login: "Mango",
//   email: "mango@dog.woof",
// });

// console.log(mango);

// console.log(mango.login); // Mango
// mango.login = "Mangodoge";
// mango.login = "9";
// console.log(mango.login); // Mangodoge

// const poly = new User({
//   login: "Poly",
//   email: "poly@mail.com",
// });

// console.log(poly.login); // Poly
// poly.login = "Polycutie";
// poly.login = "SSS";
// console.log(poly.login); // Polycutie

//! ====================================
// Example 4 - Нотатки
// Напиши клас Notes який керує колекцією нотаток у властивості items. Замітка це об'єкт із властивостями text та priority. Додай класу статичну властивість Priority, у якому зберігатиметься об'єкт із пріоритетами.

class Notes {
  static Priority = {
    LOW: "low",
    NORMAL: "normal",
    HIGH: "high",
  };
  constructor(items) {
    this.items = items = [];
  }
  addNote(note) {
    this.items.push(note);
  }

  removeNote(text) {
    // const index = this.items.findIndex(
    //   ({ text: noteText }) => text === noteText
    // );
    // this.items.splice(index, 1);

    this.items = this.items.filter(({ text: noteText }) => text !== noteText);
  }

  updatePriority(text, newPriority) {
    const targetObj = this.items.find(
      ({ text: noteText }) => text === noteText
    );
    targetObj.priority = newPriority;
  }
}
// console.dir(Notes);
const myNotes = new Notes([]);

myNotes.addNote({ text: "Моя перша замітка", priority: Notes.Priority.LOW });
console.log(myNotes.items);

myNotes.addNote({
  text: "Моя друга замітка",
  priority: Notes.Priority.NORMAL,
});
console.log(myNotes.items);

myNotes.removeNote("Моя перша замітка");
console.log(myNotes.items);

myNotes.updatePriority("Моя друга замітка", Notes.Priority.HIGH);
console.log(myNotes.items);
