import "../css/memory.css";
import "../css/iconfont.css";
import "../css/normalize.css";
import "../js/flexible.js";

// js
let rightBackground = document.querySelector(".rightBackground");
let rightContent = document.querySelector(".rightContent");
document.querySelector("#icon-link").href = require("../images/favicon.ico");

document.querySelector(".goButton").addEventListener("click", () => {
    rightBackground.style.opacity = 0;
    setTimeout(() => {
        rightBackground.style.display = "none";
        setTimeout(() => {
            rightContent.style.opacity = 1;
            rightBackground.remove(); // 自杀
        }, 500);
    }, 500);
});
