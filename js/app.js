"use strict";

let popupItNationCourse = new PopUp({
  openBtn: "showModal-itNationCourse",
  container: "popupContainer__itNationCourse",
  content: ` <img class="course__img w-100" src="img/certificate.jpg" alt="certificate">`,
  maskColor: "#1e2939",
  maskOpacity: "0.7",
});

const runningNum = (num, time, outElemClass, fps = 20) => {
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
};

const isOnScreenFirstly = (elem, flag) => {
  return (
    elem.getBoundingClientRect().y + elem.offsetHeight <
      document.documentElement.clientHeight && flag
  );
};

const projectCounter = document.querySelector("#projectNumbers");
let projectCounterFlag = true;

const achievementsCounter = document.querySelector("#certificateNumbers");
let achievementsCounterFlag = true;

window.addEventListener("load", () => {
  if (isOnScreenFirstly(projectCounter, projectCounterFlag)) {
    runningNum(23, 1500, "#projectNumbers");
    projectCounterFlag = false;
  }
});

document.addEventListener("scroll", () => {
  if (isOnScreenFirstly(achievementsCounter, achievementsCounterFlag)) {
    runningNum(10, 1500, "#certificateNumbers", 10);
    achievementsCounterFlag = false;
  } else if (isOnScreenFirstly(projectCounter, projectCounterFlag)) {
    runningNum(23, 1500, "#projectNumbers");
    projectCounterFlag = false;
  }
});
