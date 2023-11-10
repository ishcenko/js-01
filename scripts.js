// console.log(_.add(6, 4));

const refs = {
  otuputScrollStandart: document.getElementById("otuputScrollStandart"),
  otuputScrollThrottled: document.getElementById("otuputScrollThrottled"),
  otuputResizeStandart: document.getElementById("otuputResizeStandart"),
  otuputResizeThrottled: document.getElementById("otuputResizeThrottled"),
};

const eventScrollCounter = {
  standart: 0,
  throttle: 0,
};

const eventResizeCounter = {
  standart: 0,
  throttle: 0,
};

document.addEventListener(
  "click", //scroll
  () => {
    eventScrollCounter.standart += 1;
    refs.otuputScrollStandart.textContent = eventScrollCounter.standart;
  }
);

document.addEventListener(
  "click", //scroll
  _.throttle(
    () => {
      eventScrollCounter.throttle += 1;
      refs.otuputScrollThrottled.textContent = eventScrollCounter.throttle;
    },
    2000,
    {
      leading: true,
      trailing: true,
    }
  )
);
//!========================================================================

window.addEventListener("resize", () => {
  eventResizeCounter.standart += 1;
  refs.otuputResizeStandart.textContent = eventResizeCounter.standart;
});

window.addEventListener(
  "resize",
  _.throttle(() => {
    eventResizeCounter.throttle += 1;
    refs.otuputResizeThrottled.textContent = eventResizeCounter.throttle;
  }, 1000)
);
