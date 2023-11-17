import refs from "./refs.js";
import { load, save } from "./storage.js";

const STORAGE_KEY = "tasks";
let currentID = 1;

function addCloseButton(target) {
  const span = document.createElement("span");
  const txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  target.appendChild(span);
}

function addNewTask() {
  const clearInput = () => (refs.myInput.value = "");

  const value = refs.myInput.value.trim();
  if (value === "") {
    alert("Потрібно ввести текст");
    clearInput();
    return;
  }
  //   console.log(value);
  createLi({
    text: value,
    // id: currentID,
    // isDone: true,
  });

  addTaskToStorage(value);
  clearInput();
}

function createLi({ text, isDone = false, id = currentID }) {
  const liEl = document.createElement("li");
  liEl.textContent = text;
  liEl.dataset.id = id;
  if (isDone) liEl.className = "checked";
  addCloseButton(liEl);
  refs.myUL.appendChild(liEl);
}

function handleTaskBehaviour({ target }) {
  const currentState = load(STORAGE_KEY);
  // console.log(target);
  // console.log(target.nodeName);
  // console.log(target.tagName);
  if (target.nodeName === "LI") {
    // console.log("LI");
    target.classList.toggle("checked");
    const taskObj = currentState.find(
      (task) => Number(task.id) === Number(target.dataset.id)
    );
    taskObj.isDone = !taskObj.isDone;
    // console.log(taskObj);
  } else if (target.classList.contains("close")) {
    // console.log(target.parentNode);
    target.parentNode.remove();
    const taskIndex = currentState.findIndex(
      (task) => Number(task.id) === Number(target.parentNode.dataset.id)
    );
    currentState.splice(taskIndex, 1);
    // console.log(taskIndex);
  }
  save(STORAGE_KEY, currentState);
}

function createTaskObject({ text, isDone = false }) {
  return { text, isDone, id: currentID };
}

function addTaskToStorage(text) {
  const currentState = load(STORAGE_KEY);
  if (currentState === undefined) {
    save(STORAGE_KEY, [createTaskObject({ text })]);
  } else {
    currentState.push(createTaskObject({ text }));
    save(STORAGE_KEY, currentState);
  }
  currentID += 1;
  // console.log(currentState);
}

function fillTasksList() {
  // console.log("a");
  const currentState = load(STORAGE_KEY);
  if (currentState !== undefined) {
    // console.log(currentState);
    currentState.forEach(createLi);
    currentID =
      currentState.length === 0
        ? 1
        : currentState[currentState.length - 1].id + 1;
  }
}

export { addNewTask, handleTaskBehaviour, fillTasksList };
