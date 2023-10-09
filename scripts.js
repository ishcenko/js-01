const cars = [
  {
    make: "Honda",
    model: "CR-V",
    type: "suv",
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: "Honda",
    model: "Accord",
    type: "sedan",
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: "Mazda",
    model: "Mazda 6",
    type: "sedan",
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: "Mazda",
    model: "CX-9",
    type: "suv",
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: "Toyota",
    model: "4Runner",
    type: "suv",
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Sequoia",
    type: "suv",
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Tacoma",
    type: "truck",
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: "Ford",
    model: "F-150",
    type: "truck",
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Fusion",
    type: "sedan",
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Explorer",
    type: "suv",
    amount: 6,
    price: 31660,
    onSale: false,
  },
];

//!=======================================
//Пусть функция getModels возвращает массив моделей (поле model) всех автомобилей.

// const getModels = (cars) =>
//   cars.map((car) => {
//     return car;
//   });

// console.table(getModels(cars));

//Нехай функція makeCarsWithDiscount повертає новий масив об'єктів із змінним значенням властивості price залежно від переданої знижки.

// const makeCarsWithDiscount = (cars, discount) =>
//   cars.map((car) => ({ ...car, price: car.price * (1 - discount) }));

// console.table(makeCarsWithDiscount(cars, 0.25));
// console.table(makeCarsWithDiscount(cars, 0.35));

//!===================================
//Нехай функція filterByPrice повертає масив автомобілів ціна яких менша ніж значення параметра threshold.

// const filterByPrice = (cars, threshold) =>
//   cars.filter(({ price }) => price <= threshold);

// console.table(filterByPrice(cars, 30000));
// console.table(filterByPrice(cars, 25000));

//!=======================================

//Нехай функція getCarsWithDiscount повертає масив автомобілів властивість onSale яких true.

// const getCarsWithDiscount = (cars) => cars.filter(({ onSale }) => onSale);

// console.table(getCarsWithDiscount(cars));

//!================================
//Нехай функція getCarsWithType повертає масив автомобілів тип яких збігається зі значенням параметра type.

// const getCarsWithType = (cars, type) =>
//   cars.filter(({ type: carType }) => carType === type);

// console.table(getCarsWithType(cars, "suv"));
// console.table(getCarsWithType(cars, "sedan"));
// console.table(getCarsWithType(cars, "truck"));

// const getCarByModel = (cars, model) =>
//   cars.find(({ model: carModel }) => carModel === model);

// console.table(getCarByModel(cars, "F-150"));
// console.table(getCarByModel(cars, "CX-9"));
// console.table(getCarByModel(cars, "Accord"));

//!===========================
//Нехай функція sortByAscendingAmount повертає новий масив автомобілів відсортований за зростанням значення якості amount.

// const sortByAscendingAmount = (cars) =>
//   [...cars].sort((a, b) => a.amount - b.amount);

// console.table(sortByAscendingAmount(cars));
//!================================
//Нехай функція sortByDescendingPrice повертає новий масив автомобілів відсортований за зменшенням значення властивості price.
// const sortByAscendingPrice = (cars) =>
//   [...cars].sort((a, b) => b.price - a.price);

// console.table(sortByAscendingPrice(cars));
//SORT
// const arr = [1, 55, 44, 87, 8, 9, 3, 5, 5.1, 6, 56, 7];
// const arr2 = [1, 55, 44, 87, 8, 9, 3, 5, 5.1, 6, 56, 7];

// arr.sort((a, b) => a - b);
// arr2.sort((a, b) => b - a);
// console.table(arr);
// console.table(arr2);

//!====================================
//Нехай функція sortByModel повертає новий масив автомобілів відсортований за назвою моделі в алфавітному та зворотному алфавітному порядку, в залежності від значення параметра order.

// const sortByModel = (cars, order) =>
//   [...cars].sort((a, b) => {
//     switch (order) {
//       case "asc":
//         // a.model.locaiCompare(b.model);
//         return a.model.localeCompare(b.model);
//       case "desc":
//         return b.model.localeCompare(a.model);
//     }
//   });

// console.table(sortByModel(cars, "asc"));
// console.table(sortByModel(cars, "desc"));

//!===========================
// Нехай функція getTotalAmount повертає загальну кількість автомобілів (значення властивостей amount).

// const getTotalAmount = (cars) =>
//   cars.reduce((acc, { amount }) => acc + amount, 0);

// console.table(getTotalAmount(cars));

//!====================================
// const total = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
//   return previousValue + number;
// }, 0);

// console.table(total); // 32

//!=======================
// Example 11 - Ланцюжки методів
// Нехай функція getAvailableCarNames повертає масив моделей автомобілів, але тільки тих, які зараз на розпродажі.

// const getModelsOnSale = (cars) =>
//   cars.filter(({ onSale }) => onSale).map(({ model }) => model);

// console.table(getModelsOnSale(cars));

//!===================================
// Example 12 - Ланцюжки методів
// Нехай функція getSortedCarsOnSale повертає масив автомобілів на розпродажі (Властивість onSale), відсортованих за зростанням ціни.

// const getSortedCarsOnSale = (cars) =>
//   cars.filter(({ onSale }) => onSale).sort((a, b) => a.price - b.price);

// console.table(getSortedCarsOnSale(cars));
