// const allEl = document.querySelectorAll("*");
// // console.log(allEl);
// for (const el of allEl) {
//   el.addEventListener("click", () => alert(`'1'${el.tagName}`), {
//     once: true,
//     capture: true,
//   });
//   el.addEventListener("click", () => alert(`'2'${el.tagName}`));
// }
// document.body.addEventListener("click", (e) => {
//   console.log(
//     `Target: ${e.target.tagName} | current target: ${e.currentTarget.tagName}`
//   );
//   console.log(e.currentTarget);
// });

const refs = {
  form: document.getElementById("form"),
  price: document.getElementById("price"),
  amount: document.getElementById("amount"),
  quantity: document.getElementById("quantity"),
  total: document.getElementById("total"),
};

const data = {
  price: 0,
  quantity: 0,
  calcTotalPrice() {
    return Number((this.price * this.quantity).toFixed(2));
  },
};

dataFill();
displayTotal();
refs.amount.textContent = data.quantity;
// console.log(data);

refs.form.addEventListener("input", handleFormInput);

function handleFormInput({ target }) {
  const { value } = target;
  if (target === refs.quantity) {
    refs.amount.textContent = value;
  }

  target.setAttribute("value", value);
  dataFill();
  displayTotal();
  //   console.log(data);
}

function dataFill() {
  data.price = Number(refs.price.value);
  data.quantity = Number(refs.quantity.value);
}

function displayTotal() {
  refs.total.textContent = data.calcTotalPrice() + " грн";
}
