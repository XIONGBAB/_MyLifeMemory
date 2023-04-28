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
// rotate timer

window.addEventListener("load", function () {
    function updateTime() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, "0");
        const minutes = now.getMinutes().toString().padStart(2, "0");
        const seconds = now.getSeconds().toString().padStart(2, "0");

        const hourDegree = hours * 30 + minutes / 2;
        const minuteDegree = minutes * 6 + seconds / 10;
        const secondDegree = seconds * 6;

        let timerArr = [hours, minutes, seconds];
        let rotatingDegree = [hourDegree, minuteDegree, secondDegree];
        const timerBox = document.querySelectorAll(".timerBox ul li span");
        const pointers = document.querySelectorAll(".timeBox");

        for (let i = 0; i < timerBox.length; i++) {
            timerBox[i].innerHTML = timerArr[i];
            pointers[i].style.transform = `rotate(${rotatingDegree[i]}deg)`;
        }
    }
    const timerContainer = document.querySelector(".timerBox");
    timerContainer.style.display = "block";
    let opacitySpeed = 0;
    let closeSetinterval = setInterval(() => {
        opacitySpeed += 0.1;
        if (opacitySpeed >= 1) {
            opacitySpeed = 1;
            clearInterval(closeSetinterval);
        }
        document.querySelector(".timerBox").style.opacity = opacitySpeed;
    }, 100);

    setInterval(updateTime, 1000);

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
});
