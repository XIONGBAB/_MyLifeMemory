import "../css/index.css";
import "../css/iconfont.css";
import "../css/normalize.css";
import "../js/flexible.js";
document.querySelector("#icon-link").href = require("../images/favicon.ico");

// 判断是否支持HMR功能
if (module.hot) {
    module.hot.accept("../js/flexible.js");
    module.hot.accept("../js/flexible.js");
}

// PWA
if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker
            .register("/service-worker.js")
            .then(registration => {
                console.log("SW registered: ", registration);
            })
            .catch(registrationError => {
                console.log("SW registration failed: ", registrationError);
            });
    });
}

// JavaScript
let navList = document.querySelectorAll(".navBanner ul li");
navList.forEach(item => {
    item.addEventListener("mouseenter", () => {
        item.querySelector("a").classList.add("navBorder");
    });
    item.addEventListener("click", () => {
        item.classList.add("navCircle");
        navList.forEach(sibling => {
            if (sibling !== item) {
                sibling.classList.remove("navCircle");
            }
        });
    });
});
function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");

    // const lis = document.querySelectorAll(".contactBox ul li");
    // lis.forEach((li, index) => {
    //     console.log(index);
    //     const span = li.querySelector("span");
    //     const timeBox = li.querySelector(".timeBox");
    //     span[0].textContent = `${hour}`;
    //     span[1].textContent = `${minute}`;
    //     span[2].textContent = `${second}`;
    //     const degrees = index * 120 + hour * 30 + minute * 0.5;
    //     timeBox.style.transform = `rotate(${degrees}deg)`;
    // });
    const lis = document.querySelectorAll("li");
    console.log(lis);
    lis.forEach((li, index) => {
        const span = li.querySelector("span");
        console.log(span);
        const timeBox = li.querySelector(".timeBox");
        span.innerText = `${hours}:${minutes}:${seconds}`;
        const degrees = index * 120 + hours * 30 + minutes * 0.5;
        timeBox.style.transform = `rotate(${degrees}deg)`;
    });
}
console.log(updateTime());
// setInterval(updateTime, 1000);
