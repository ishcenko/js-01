//* Example 1 - Деструктуризація
// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.
// function calcBMI({ weight, height }) {
//   const numericWeight = Number(weight.replace(",", "."));
//   const numericHeight = Number(height.replace(",", "."));
//   return Number((numericWeight / numericHeight ** 2).toFixed(1));
// }
// //Було;
// // console.log(calcBMI("88,3", "1.75"));
// // console.log(calcBMI("68,3", "1.65"));
// // console.log(calcBMI("118,3", "1.95"));

// //Очікується;
// console.log(
//   calcBMI({
//     height: "1.75",
//     weight: "88,3",
//   })
// );
// console.log(
//   calcBMI({
//     weight: "68,3",
//     height: "1.65",
//   })
// );
// console.log(
//   calcBMI({
//     weight: "118,3",
//     height: "1.95",
//   })
// );
//!==============================================
//* Example 2 - Деструктуризація
// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.

// function printContactsInfo({ names, phones }) {
//   const nameList = names.split(",");
//   const phoneList = phones.split(",");
//   for (let i = 0; i < nameList.length; i += 1) {
//     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   }
// }

// // Було
// // printContactsInfo(
// //   'Jacob,William,Solomon,Artemis',
// //   '89001234567,89001112233,890055566377,890055566300',
// // );

// // Очікується
// printContactsInfo({
//   names: "Jacob,William,Solomon,Artemis",
//   phones: "89001234567,89001112233,890055566377,890055566300",
// });

// $(".option").click(function () {
//   $(".option").removeClass("active");
//   $(this).addClass("active");
// });
//!==================================================
//* Example 5 - Операція spread
// Доповни функцію createContact(partialContact) так, щоб вона повертала новий об'єкт контакту з доданими властивостями id та createdAt, а також list зі значенням "default" якщо в partialContact немає такої властивості.
// function createContact(partialContact) {
//   return {
//     list: "default",
//     ...partialContact,
//     id: generateId,
//     createAt: new Date(),
//     createAt2: Date.now(),
//   };
// }
// console.log(
//   createContact({
//     name: "Mango",
//     email: "mango@mail.com",
//     list: "friends",
//   })
// );
// console.log(
//   createContact({
//     name: "Poly",
//     email: "poly@hotmail.com",
//   })
// );

// function generateId() {
//   return "_" + Math.random().toString(36).substr(2, 9);
// }

//! ======================================

//* Example 6 - Операція rest
// Напиши функцію transformUsername(user) так, щоб вона повертала новий об'єкт із властивістю fullName, замість firstName та lastName.

function transformUsername({ firstName, lastName, ...rest }) {
  // console.log(rest);
  // rest.fullName = `${firstName} ${lastName}`;
  // return rest;
  return {
    fullName: `${firstName} ${lastName}`,
    ...rest,
  };
}

console.log(
  transformUsername({
    id: 1,
    firstName: "Jacob",
    lastName: "Mercer",
    email: "j.mercer@mail.com",
    friendCount: 40,
    friend: "favorite",
  })
);

console.log(
  transformUsername({
    id: 1,
    firstName: "Andrii",
    lastName: "IS",
    email: "a_mercer@mail.com",
    friendCount: 400,
    friend: (true && false) || true,
  })
);

// {
//     id: 1,
//     fullname: "Jacob Mercer",
//     email: "j.mercer@mail.com",
//     friendCount: 40,
//   }

console.log(
  transformUsername({
    id: 2,
    firstName: "Adrian",
    lastName: "Cross",
    email: "a.cross@hotmail.com",
    friendCount: 20,
  })
);
