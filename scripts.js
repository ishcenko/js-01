//* Example 1 - Коллбек функції
// Напишіть наступні функції:
//* createProduct(obj, callback) - приймає об'єкт товару без id, а також коллбек. Функція створює об'єкт товару, додаючи йому унікальний ідентифікатор у властивість id та викликає коллбек передаючи йому створений об'єкт.
//* logProduct(product) - колббек приймаючий об'єкт продукту і логуючий його в консоль
//* logTotalPrice(product) - колббек, що приймає об'єкт продукту і логіює загальну вартість товару в консоль

const apple = { name: "apples", name2: "🍎", price: 30, quantity: 3 };
const lemon = { name: "lemons", name2: "🍋", price: 50, quantity: 9 };

createProduct(apple, logProduct);
createProduct(apple, logTotalPrice);

createProduct(lemon, logProduct);
createProduct(lemon, logTotalPrice);

function createProduct(obj, callback) {
  const newProduct = { ...obj, id: Date.now() };
  callback(newProduct);
}

// logProduct(apple);
// logTotalPrice(apple);

// logProduct(lemon);
// logTotalPrice(lemon);

function logProduct(product) {
  console.table(product);
}

function logTotalPrice({ price, quantity }) {
  console.table(price * quantity);
}
