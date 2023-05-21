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

function addNavSubFunction(variableOne, variableTwo, isTrue) {
    let elementResultOne = document.querySelectorAll(`${variableOne}`);
    let elementResultTwo = document.querySelectorAll(`${variableTwo}`);
    elementResultOne.forEach(item => {
        item.addEventListener("click", function () {
            let lisElementTag = null;
            let itemSum = item.nextElementSibling;
            let lisVariable = null;
            elementResultTwo.forEach(items => {
                if (items != item) {
                    items.style.height = "0px";
                }
            });
            if (itemSum) {
                itemSum.childNodes.forEach(nodeLists => {
                    if (nodeLists.className) {
                        lisElementTag = nodeLists.className;
                    }
                });
                lisVariable = itemSum.querySelectorAll(`.${lisElementTag}`);
                if (isTrue) {
                    this.classList.add("active");
                    elementResultOne.forEach(otherItem => {
                        if (otherItem != item) {
                            otherItem.classList.remove("active");
                        }
                    });
                }
                let elementID = null;
                if (item.nextElementSibling) {
                    elementID++;
                    this.nextElementSibling.id = "secondMenuBox" + elementID;
                    this.nextElementSibling.style.height = lisVariable.length * lisVariable[0].clientHeight + "px";
                }
            }
            addNavSubFunction(".secondSubMenuATag", ".thirdMenuBox", false);
            if (itemSum) {
                let secondMenuBox1 = document.getElementById("secondMenuBox1");
                secondMenuBox1.style.height = this.nextElementSibling.style.height;
            }
        });
    });
}
addNavSubFunction(".navSubMenuATag", ".secondMenuBox", true, ".navSubMenu");

// function isClick(variableThird, variableTwo) {
//     let elementResultThird = document.querySelectorAll(`${variableThird}`);
//     elementResultThird.forEach(items => {
//         items.addEventListener("click", function () {
//             console.log(this.querySelector(variableTwo).style.height);
//             if (this.querySelector(variableTwo).style.height != "0px") {
//                 this.querySelector(variableTwo).style.height = "0px";
//             }
//         });
//     });
// }
// isClick(variableThird, variableTwo);

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
