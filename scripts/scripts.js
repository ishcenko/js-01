import { addNewTask } from "./functions.js";
import refs from "./refs.js";
// const refs = {
//   addBtn: document.getElementById("addBtn"),
//   myUL: document.getElementById("myUL"),
// };
refs.addBtn.addEventListener("click", addNewTask);
// refs.myUL.addEventListener("click");
