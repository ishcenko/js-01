//* Створити список технологій що вивчаються на курсі Fullstack за допомогою js | Показати як це робиться через map та reduce

const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];

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

const listContant = technologies.reduce(
  (markup, technology) => markup + `<li>${technology}</li>`,
  ""
);
const list = `<ul>${listContant}</ul>`;
document.body.insertAdjacentHTML("afterbegin", list);
