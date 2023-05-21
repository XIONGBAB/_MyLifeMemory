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
            rightBackground.remove(); // 干掉自己
        }, 500);
    }, 500);
});

// left nav js
let navSubMenuBox = document.querySelectorAll(".navSubMenu a");
let navSubMenuB = document.querySelectorAll(".navSubMenu ul");

navSubMenuBox.forEach(item => {
    item.addEventListener("click", function () {
        navSubMenuB.forEach(items => {
            if (items != item) {
                items.style.height = "0px";
            }
        });
        let itemSum = item.nextElementSibling;
        if (itemSum !== null) {
            let lis = itemSum.querySelectorAll("li");
            this.classList.add("active");
            navSubMenuBox.forEach(otherItem => {
                if (otherItem != item) {
                    otherItem.classList.remove("active");
                }
            });
            if (item.nextElementSibling) {
                this.nextElementSibling.style.height = lis.length * lis[0].clientHeight + "px";
            }
        }
    });
});

//left scroll js
let navContainerScroll = document.querySelector(".navContainer");
navContainerScroll.addEventListener("scroll", () => {
    let searchBg = document.querySelector(".searchBgBox");
    if (navContainerScroll.scrollTop > 50) {
        searchBg.classList.add("searchBg");
        searchBg.style.opacity = "1";
    } else if (navContainerScroll.scrollTop < 10) {
        searchBg.style.opacity = "0";
    }
});
