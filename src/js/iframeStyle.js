import "../css/normalize.css";
import "../css/iframeStyle.css";
import "../js/flexible.js";
// web icon js
document.querySelector("#icon-link").href = require("../images/favicon.ico");

// copy code js
let preButton = document.querySelectorAll("button[class='preButton']");
for (let pre = 0; pre < preButton.length; pre++) {
    preButton[pre].addEventListener("click", function () {
        const textarea = this.nextElementSibling.querySelector("code");
        navigator.clipboard.writeText(textarea.textContent);
        this.style.color = "#ffe200";
        let timer = setTimeout(() => {
            this.removeAttribute("style");
        }, 4000);
        let clearTime = setTimeout(() => {
            clearTimeout(timer);
            clearTimeout(clearTime);
        }, 8000);
    });
}
