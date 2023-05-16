import "../css/memory.css";
import "../css/iconfont.css";
import "../css/normalize.css";
import "../js/flexible.js";

// icon js
document.querySelector("#icon-link").href = require("../images/favicon.ico");

// goButton js
let rightBackground = document.querySelector(".rightBackground");
let rightContent = document.querySelector(".rightContent");
document.querySelector(".goButton").addEventListener("click", () => {
    rightBackground.style.opacity = 0;
    setTimeout(() => {
        rightBackground.style.display = "none";
        setTimeout(() => {
            rightContent.style.display = "block";
            rightContent.style.opacity = 1;
            rightBackground.remove(); // 自杀
        }, 500);
    }, 500);
});

// left nav js
let navSubMenuBox = document.querySelectorAll(".navSubMenu a");
let secondMenuBox = document.querySelectorAll(".secondMenuBox");
let secondMenuLiBox = document.querySelectorAll(".subMenu");
navSubMenuBox.forEach(item => {
    item.addEventListener("click", () => {
        navSubMenuBox.forEach(otherItem => {
            if (otherItem != item) {
                otherItem.classList.remove("active");
            }
        });
        item.classList.add("active");
        secondMenuBox.forEach(secondBoxItem => {
            let secondMenuBoxHight = secondMenuLiBox[0].clientHeight;
            console.log(secondMenuLiBox.length);
            secondBoxItem.style.height = secondMenuBoxHight * secondMenuLiBox.length + "px";
        });
    });
});
