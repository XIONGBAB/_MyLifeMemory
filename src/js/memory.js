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
/* 
暂存  navSubMenu[i].id = "navSubMenu" + (i + 1);
function addNavSubMenu() {}  addNavSubMenu();
    // let MenuBoxHeight = [];
// secondMenuBox.style.height = secondMenuBox.children.length * secondMenuBox.children[0].clientHeight + "px";
*/

// let navSubMenu = document.querySelectorAll(".navSubMenu");

// for (let i = 0; i < navSubMenu.length; i++) {
//     navSubMenu[i].addEventListener("click", function () {
//         let navSubMenuATag = document.querySelectorAll(".navSubMenuATag");
//         let secondMenuBox = this.querySelector(".secondMenuBox");
//         // 点li 下面有ul的时候执行这段
//         if (secondMenuBox) {
//             secondMenuBox.style.height = "100px";
//             secondMenuBox.addEventListener("click", function () {
//                 secondMenuBox.style.height = "100px";
//             });
//         }
//         // 点li 删除其他的activeRed类名
//         for (let j = 0; j < navSubMenuATag.length; j++) {
//             navSubMenuATag[j].classList.remove("activeRed");
//         }
//         // 点li 添加当前activeRed类名
//         navSubMenuATag[i].classList.add("activeRed");

//         // // let isActiveRed = this.querySelector(".activeRed");
//         // // MenuBoxHeight.push(secondMenuBox.clientHeight + "px");
//         // if (isActiveRed == null) {
//         //     navSubMenuATag[i].classList.add("activeRed");
//         //     secondMenuBox.style.height = secondMenuBox.children.length * secondMenuBox.children[0].clientHeight + "px";
//         //     MenuBoxHeight.splice(1);
//         // }
//     });
// }

// function addNavSubFunction(variableOne, variableTwo, isTrue) {
//     let elementResultOne = document.querySelectorAll(`${variableOne}`);
//     let elementResultTwo = document.querySelectorAll(`${variableTwo}`);
//     elementResultOne.forEach(item => {
//         item.addEventListener("click", function () {
//             let lisElementTag = null;
//             let itemSum = item.nextElementSibling;
//             let lisVariable = null;
//             elementResultTwo.forEach(items => {
//                 if (items != item) {
//                     items.style.height = "0px";
//                 }
//             });
//             if (itemSum) {
//                 itemSum.childNodes.forEach(nodeLists => {
//                     if (nodeLists.className) {
//                         lisElementTag = nodeLists.className;
//                     }
//                 });
//                 lisVariable = itemSum.querySelectorAll(`.${lisElementTag}`);
//                 if (isTrue) {
//                     this.classList.add("active");
//                     elementResultOne.forEach(otherItem => {
//                         if (otherItem != item) {
//                             otherItem.classList.remove("active");
//                         }
//                     });
//                 }
//                 let elementID = null;
//                 if (item.nextElementSibling) {
//                     elementID++;
//                     this.nextElementSibling.id = "secondMenuBox" + elementID;
//                     this.nextElementSibling.style.height = lisVariable.length * lisVariable[0].clientHeight + "px";
//                 }
//             }
//             addNavSubFunction(".secondSubMenuATag", ".thirdMenuBox", false);
//             if (itemSum) {
//                 let secondMenuBox1 = document.getElementById("secondMenuBox1");
//                 secondMenuBox1.style.height = this.nextElementSibling.style.height;
//             }
//         });
//     });
// }
// addNavSubFunction(".navSubMenuATag", ".secondMenuBox", true, ".navSubMenu");

// function isClick(variableThird, variableTwo) {
//     let elementResultThird = document.querySelectorAll(`${variableThird}`);
//     elementResultThird.forEach(items => {
//         items.addEventListener("click", function () {
//             console.log(this.querySelector(variableTwo).style.height);

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

// style="height:100px"
