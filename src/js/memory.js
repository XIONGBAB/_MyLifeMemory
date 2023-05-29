import "../css/memory.css";
import "../css/iconfont.css";
import "../css/normalize.css";
import "../js/flexible.js";

// web icon js
document.querySelector("#icon-link").href = require("../images/favicon.ico");

//left scroll js
let navContainerScroll = document.querySelector(".navContainer");
navContainerScroll.addEventListener("scroll", () => {
    let searchBg = document.querySelector(".searchBgBox");
    if (navContainerScroll.scrollTop > 50) {
        searchBg.classList.add(".searchBgBox");
        searchBg.style.opacity = "1";
    } else if (navContainerScroll.scrollTop < 10) {
        searchBg.classList.remove(".searchBgBox");
        searchBg.style.opacity = "0";
    }
});

// left nav style js
let navMenuItems = document.querySelectorAll(".navListContainer>.navMenuItem");

for (let i = 0; i < navMenuItems.length; i++) {
    navMenuItems[i].addEventListener("click", function () {
        let input = this.querySelector("input[type='checkbox']");
        let navMenuLabel = this.querySelector(".navMenuLabel");

        for (let j = 0; j < navMenuItems.length; j++) {
            let label = navMenuItems[j].querySelector(".navMenuLabel");
            let checkBox = navMenuItems[j].querySelector("input[type='checkbox']");
            checkBox.id = "";
            label.setAttribute("for", checkBox.id);
            let second = this.querySelector(".secondMenuItem");
            // second.style.height = "120px";
            console.log(second);
        }
        input.id = "menuItem";
        navMenuLabel.setAttribute("for", input.id);
    });
}

// right container goButton js
let rightBackground = document.querySelector(".rightBackground");
let rightContent = document.querySelector(".rightContent");
document.querySelector(".goButton").addEventListener("click", () => {
    rightBackground.style.opacity = 0;
    setTimeout(() => {
        rightBackground.style.display = "none";
        setTimeout(() => {
            rightContent.style.display = "block";
            rightContent.style.opacity = 1;
            rightBackground.remove(); // clear right bg
        }, 500);
    }, 500);
});
