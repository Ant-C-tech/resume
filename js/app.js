'use strict'

function runningNum(num, time, outElemClass, fps = 20) {
  const timeStep = Math.round(time / ((time / 1000) * fps));
  const step = Math.round(num / (time / timeStep));

  const out = document.querySelector(outElemClass);
  let counter = 0;
  let timer = setInterval(() => {
    counter += step;
    if (num > counter) {
      out.innerHTML = counter;
    } else {
      clearInterval(timer);
      out.innerHTML = num;
    }
  }, timeStep);
}

runningNum(23, 1500, "#projectNumbers");

let popupItNationCourse = new PopUp({
  openBtn: "showModal-itNationCourse",
  container: "popupContainer__itNationCourse",
  content: ` <img class="course__img w-100" src="img/certificate.jpg" alt="certificate">`,
  maskColor: "#1e2939",
  maskOpacity: "0.7",
});

const achievementsCounter = document.querySelector("#certificateNumbers");
let flag = true

document.addEventListener("scroll", () => {
  if (achievementsCounter.getBoundingClientRect().y + achievementsCounter.offsetHeight < document.documentElement.clientHeight && flag) {
    runningNum(10, 1000, "#certificateNumbers");
    console.log('work');
    flag = false
  }
});
