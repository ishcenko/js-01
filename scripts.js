//* Створити список технологій що вивчаються на курсі Fullstack за допомогою js | Показати як це робиться через map та reduce

// const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];

// const ulEl = document.createElement("ul"); //UL
// for (const technology of technologies) {
//   //   console.log(technologies);
//   const liEl = document.createElement("li"); //LI
//   liEl.textContent = technology;
//   ulEl.appendChild(liEl);
// }
// document.body.prepend(ulEl);
// document.body.append(ulEl);

//!==========================================

// const listContant = technologies
//   .map((technology) => `<li>${technology}</li>`)
//   .join(" ");
// const list = `<ul>${listContant}</ul>`;
// // console.log(list);
// document.body.insertAdjacentHTML("afterbegin", list);

//!========================================

// const listContant = technologies.reduce(
//   (markup, technology) => markup + `<li>${technology}</li>`,
//   ""
// );
// const list = `<ul>${listContant}</ul>`;
// document.body.insertAdjacentHTML("afterbegin", list);

const numbers = [
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
];

const numberList = numbers.reduce((acc, nums) => acc + `<li>${nums}</li>`, "");
const listNum = `<ul>${numberList}</ul>`;
document.body.insertAdjacentHTML("beforebegin", listNum);

//* Створити кілька кнопок на основі масива з обєктами використовуючи createElement

const colors = [
  {
    label: "red",
    color: "#FF0000",
  },
  {
    label: "green",
    color: "#00FF00",
  },
  {
    label: "blue",
    color: "#0000FF",
  },
  {
    label: "yellow",
    color: "#FFFF00",
  },
];

const btn = document.getElementById("btn");
const fragmen = document.createDocumentFragment();
console.dir(fragmen);
colors.forEach(({ label, color }) => {
  // console.log(label, color);
  const button = document.createElement("button");
  button.type = "button";
  button.textContent = label;
  button.classList.add("btn");
  button.style.backgroundColor = color;
  fragmen.appendChild(button);
});
btn.appendChild(fragmen);
