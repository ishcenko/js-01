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

// const stones = [
//   { name: "Смарагд", price: 1300, quantity: 4 },
//   { name: "Діамант", price: 2700, quantity: 3 },
//   { name: "Сапфір", price: 400, quantity: 7 },
//   { name: "Щебінь", price: 200, quantity: 2 },
// ];

// function calcTotalPrice(stones, stoneName) {
//   for (const stone of stones) {
//     if (stone.name === stoneName) {
//       return stone.price * stone.quantity;
//     }
//   }
//   return `Такого каменя як ${stoneName} немає!`;
// }
// const total = calcTotalPrice(stones, "Сапфір");
// console.log(total);
//! ======================================================

//* Example 4 - Комплексні завдання
// Напиши скрипт управління особистим кабінетом інтернет банку. Є об'єкт account в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.

/*
 * Типів транзакцій всього два.
 * Можна покласти чи зняти гроші з рахунку.
 */

const TRANSACTIONS = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

const account = {
  // Поточний баланс рахунку
  balance: 0,

  // Історія транзакцій
  transactions: [],

  /*
   * Метод створює та повертає об'єкт транзакції.
   * Приймає суму та тип транзакції.
   */
  /*
   * Кожна транзакція це об'єкт із властивостями: id, type та amount
   */
  createTransaction(amount, type) {
    return {
      amount,
      type,
      id: this.transactions.length,
    };
  },

  /*
   * Метод, що відповідає за додавання суми до балансу.
   * Приймає суму транзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його до історії транзакцій
   */
  deposit(amount) {
    this.balance += amount;
    const transaction = this.createTransaction(amount, TRANSACTIONS.DEPOSIT);
    this.transactions.push(transaction);
  },

  /*
   * Метод, що відповідає за зняття суми з балансу.
   * Приймає суму транзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його до історії транзакцій.
   *
   * Якщо amount більше ніж поточний баланс, виводь повідомлення
   * про те, що зняття такої суми не можливе, недостатньо коштів.
   */
  withdraw(amount) {
    if (amount > this.balance) {
      console.error("Недостатньо коштів!");
      return;
    }
    this.balance -= amount;
    const transaction = this.createTransaction(amount, TRANSACTIONS.WITHDRAW);
    this.transactions.push(transaction);
  },

  /*
   * Метод повертає поточний баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод шукає та повертає об'єкт транзакції по id
   */
  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (id === transaction.id) {
        return transaction;
      }
    }
  },

  /*
   * Метод повертає кількість коштів
   * певного типу транзакції з усієї історії транзакцій
   */
  getTransactionTotal(type) {
    let total = 0;
    for (const transaction of this.transactions) {
      if (type === transaction.type) {
        total += transaction.amount;
      }
    }
    return total;
  },
};

account.deposit(500);
account.deposit(1000);
account.deposit(100);
account.deposit(5555);
account.deposit(20000);
account.deposit(2000);

account.withdraw(300);
account.withdraw(2000);
account.withdraw(4500);
account.withdraw(2000);
account.withdraw(5500);
account.withdraw(14855);
// account.withdraw(700);

console.log(account.transactions);
console.log(account.getBalance());

console.log(account.getTransactionDetails(5));

console.log(account.getTransactionTotal(TRANSACTIONS.DEPOSIT));
console.log(account.getTransactionTotal(TRANSACTIONS.WITHDRAW));
