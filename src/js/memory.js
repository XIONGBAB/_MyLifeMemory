import "../css/memory.css";
import "../css/iconfont.css";
import "../css/normalize.css";
import "../js/flexible.js";
import { programming, studyOther, working, sourceMaterial, softwareList, adobeList, systemList, subTitleList, lifeList } from "./menuData";

// web icon js
document.querySelector("#icon-link").href = require("../images/favicon.ico");

// left subMenu js

window.addEventListener("load", function () {
    let programList = document.getElementById("programList");
    let programMenu = programming
        .map(e => {
            return `<li class="thirdMenuLiTag"> <a class="navSubMenuATag" href="#"><em class="navSubMenuEmTag"></em> <span class="navSubMenuSpanTag">${e.name}</span></a></li>`;
        })
        .join("");
    programList.innerHTML = programMenu;
    let studyOtherList = document.querySelector(".setMenuOther");
    let studyOtherMenu = studyOther
        .map(e => {
            return `<li class="thirdMenuLiTag"> <a class="navSubMenuATag" href="#"><em class="navSubMenuEmTag"></em> <span class="navSubMenuSpanTag">${e.name}</span></a></li>`;
        })
        .join("");
    studyOtherList.innerHTML = studyOtherMenu;

    let workMenuList = document.getElementById("workingMenu");
    let workMenu = working
        .map(e => {
            return `<li class="secondSubMenuLiTag"><input type="checkbox" name="" id="" /><label class="navSecondLabel" for=""><a class="navSubMenuATag" href="#"> <em class="navSubMenuEmTag"></em>
              <span class="navSubMenuSpanTag">${e.name}</span></a></label></li>`;
        })
        .join("");
    workMenuList.innerHTML = workMenu;
    let sourceList = document.getElementById("sourceMaterial");
    let sourceMenu = sourceMaterial
        .map(e => {
            return `<li class="secondSubMenuLiTag"><input type="checkbox" name="" id="" /><label class="navSecondLabel" for=""><a class="navSubMenuATag" href="#"> <em class="navSubMenuEmTag"></em>
              <span class="navSubMenuSpanTag">${e.name}</span></a></label></li>`;
        })
        .join("");
    sourceList.innerHTML = sourceMenu;

    let adobeLists = document.getElementById("adobeList");
    let adobeMenu = adobeList
        .map(e => {
            return `<li class="thirdMenuLiTag"> <a class="navSubMenuATag" href="#"><em class="navSubMenuEmTag"></em> <span class="navSubMenuSpanTag">${e.name}</span></a></li>`;
        })
        .join("");
    adobeLists.innerHTML = adobeMenu;

    let systemLists = document.getElementById("systemList");
    let systemMenu = systemList
        .map(e => {
            return `<li class="thirdMenuLiTag"> <a class="navSubMenuATag" href="#"><em class="navSubMenuEmTag"></em> <span class="navSubMenuSpanTag">${e.name}</span></a></li>`;
        })
        .join("");
    systemLists.innerHTML = systemMenu;

    let softwareLists = document.getElementById("softwareList");
    let softwareMenu = softwareList
        .map(e => {
            return `<li class="thirdMenuLiTag"> <a class="navSubMenuATag" href="#"><em class="navSubMenuEmTag"></em> <span class="navSubMenuSpanTag">${e.name}</span></a></li>`;
        })
        .join("");
    softwareLists.innerHTML = softwareMenu;

    let subTitleLists = document.getElementById("subTitle");
    let subTitleMenu = subTitleList
        .map(e => {
            return `<li class="thirdMenuLiTag"> <a class="navSubMenuATag" href="#"><em class="navSubMenuEmTag"></em> <span class="navSubMenuSpanTag">${e.name}</span></a></li>`;
        })
        .join("");
    subTitleLists.innerHTML = subTitleMenu;

    let lifeLists = document.getElementById("documentLife");
    let lifeMenu = lifeList
        .map(e => {
            return `<li class="thirdMenuLiTag"> <a class="navSubMenuATag" href="#"><em class="navSubMenuEmTag"></em> <span class="navSubMenuSpanTag">${e.name}</span></a></li>`;
        })
        .join("");
    lifeLists.innerHTML = lifeMenu;

    let thirdMenuLiTag = document.querySelectorAll(".thirdMenuLiTag");
    for (let t = 0; t < thirdMenuLiTag.length; t++) {
        thirdMenuLiTag[t].addEventListener("click", e => {
            e.stopPropagation();
            e.preventDefault();
        });
    }
});

// left nav style js   backup
(function () {
    // 先获取所有的navMenuItems
    let navMenuItems = document.querySelectorAll(".navMenuItem");
    let activeItem = null; // 用一个变量来跟踪当前的菜单
    let heightArr = [];
    let heightArr2 = [];
    let isAnMenu = false;
    for (let i = 0; i < navMenuItems.length; i++) {
        navMenuItems[i].addEventListener("click", function (event) {
            event.preventDefault();
            event.stopPropagation();
            // 获取input 和 label 来设置id 和for  值
            let input = this.querySelector(".navMenuInput");
            let navMenuLabel = this.querySelector(".navMenuLabel");
            let secondMenuBox = this.querySelector(".secondMenuBox");
            let secondSubMenuLiTag = this.querySelectorAll(".secondSubMenuLiTag");
            // 折叠以前展开的菜单，判断：如果我点击了其他菜单
            if (activeItem && activeItem !== this) {
                let activeInput = activeItem.querySelector(".navMenuInput");
                let activeLabel = activeItem.querySelector(".navMenuLabel");
                // 因为点击了其他列表，状态就为true ，那么先把当前状态调成false后就会进入下面的语句input.checked = !input.checked;
                activeInput.checked = false;
                // 并且把id和for值清空
                activeInput.id = "";
                activeLabel.setAttribute("for", activeInput.id);
                activeLabel.nextElementSibling.style.height = "0";
                if (isAnMenu) {
                    let a = document.getElementById("isOpen");
                    let b = document.getElementById("menuItem2");
                    a.removeAttribute("style");
                    b.checked = false;
                    a.id = "";
                }
                isAnMenu = false;
            }
            // 当点击时，因为状态是为false,点击后才会是true,所以要转换成true,再次点击的时候，原本是true 变false,进入else语句
            input.checked = !input.checked;
            if (input.checked) {
                input.id = "menuItem";
                navMenuLabel.setAttribute("for", input.id);
                activeItem = this;
                if (isAnMenu) {
                    let a = document.getElementById("isOpen");
                    let b = document.getElementById("menuItem2");
                    a.removeAttribute("style");
                    b.checked = false;
                    a.id = "";
                }
                isAnMenu = false;
                secondMenuBox.style.height = secondSubMenuLiTag.length * 30 + "px";
            } else {
                input.id = "";
                navMenuLabel.setAttribute("for", "");
                activeItem = null;
                secondMenuBox.removeAttribute("style");
                heightArr.splice(0); // 清空 heightArr 数组
            }
        });
    }
    // second sub js
    let activeItem2 = null;
    let secondSubMenuLiTag = document.querySelectorAll(".secondSubMenuLiTag");
    for (let s = 0; s < secondSubMenuLiTag.length; s++) {
        secondSubMenuLiTag[s].addEventListener("click", function (event) {
            event.stopPropagation(); // 阻止事件冒泡
            event.preventDefault();
            let navSecondInput = this.querySelector(".navSecondInput");
            let navSecondLabel = this.querySelector(".navSecondLabel");
            let thirdSubMenuBox = this.querySelector(".thirdSubMenuBox ");
            let thirdHeight = thirdSubMenuBox.querySelectorAll(".thirdMenuLiTag");
            let secondParent = this.parentElement;
            let secondSubMenuLiTagList = secondParent.querySelectorAll(".secondSubMenuLiTag");
            if (activeItem2 && activeItem2 !== this) {
                let secondInput = activeItem2.querySelector(".navSecondInput");
                let secondLabel = activeItem2.querySelector(".navSecondLabel");
                secondInput.checked = false;
                secondInput.id = "";
                secondLabel.setAttribute("for", navSecondInput.id);
                secondLabel.nextElementSibling.style.height = "0";
            }
            navSecondInput.checked = !navSecondInput.checked;
            if (navSecondInput.checked) {
                isAnMenu = true;
                heightArr.splice(0);
                heightArr2.splice(0);
                navSecondInput.id = "menuItem2";
                navSecondLabel.setAttribute("for", navSecondInput.id);
                activeItem2 = this;
                thirdSubMenuBox.style.height = thirdHeight.length * 30 + "px";
                thirdSubMenuBox.id = "isOpen";
                secondParent.style.height = parseInt(thirdSubMenuBox.style.height) + secondSubMenuLiTagList.length * 30 + "px";
                if (secondParent.style.height !== "") {
                    heightArr.push(secondParent.style.height);
                }
                heightArr2.push(secondParent.style.height);
            } else {
                isAnMenu = false;
                navSecondInput.id = "";
                navSecondLabel.setAttribute("for", navSecondInput.id);
                activeItem2 = null;
                thirdSubMenuBox.style.height = "0";
                thirdSubMenuBox.id = "";
                secondParent.removeAttribute("style");
                heightArr.splice(0);
            }
        });
    }
})();

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

//// optimize the js
// (function () {
//     let navMenuItems = document.querySelectorAll(".navMenuItem"); // 获取第一层元素
//     let activeItem = null; // 存储变量 当点击不是当前标签时，将之前的标签传给变量，并处理状态，清空状态
//     let heightArr = []; // 存储高度变量
//     let isAnMenu = false; // 检查是否展开

//     function collapseMenu(activeItem) {
//         let activeInput = activeItem.querySelector(".navMenuInput"); // 获取存储变量中的input和label标签
//         let activeLabel = activeItem.querySelector(".navMenuLabel");
//         activeInput.checked = false; // 将状态改为false,好收缩
//         activeInput.id = ""; // 给input id 为空，取消label 的关联
//         activeLabel.setAttribute("for", "");
//         activeLabel.nextElementSibling.style.height = "0"; // 将label下一个兄弟secondMenuBox 高度设置为0，收缩状态
//     }

//     function expandMenu(input, label, secondMenuBox, navHeight) {
//         input.id = "menuItem"; // 点击标签，给标签赋值
//         label.setAttribute("for", input.id);
//         activeItem = input.parentElement; // 获取点击标签的父亲navMenuItem
//         // 判断second菜单是否被展开过
//         isAnMenu ? (secondMenuBox.style.height = heightArr[0]) : (secondMenuBox.style.height = navHeight * 30 + "px");
//     }

//     function toggleMenu(event) {
//         event.preventDefault(); // 阻止默认事件
//         event.stopPropagation(); // 阻止冒泡
//         let input = this.querySelector(".navMenuInput"); // 获取传进来的event input和label参数
//         let label = this.querySelector(".navMenuLabel");
//         let secondMenuBox = this.querySelector(".secondMenuBox"); // 获取第二层标签
//         let secondSubMenuLiTag = this.querySelectorAll(".secondSubMenuLiTag"); // 获取第二层菜单下拉菜单
//         if (activeItem && activeItem !== this) {
//             // 如果 存储变量activeItem不是空，且传进来的存储变量不等于当前点击标签，也就是判断点击了其他二层标签了
//             collapseMenu(); // 调用展开函数，将状态和高度等清空
//         }
//         input.checked = !input.checked; // 刚开始没点第一层的标签状态是false,要切换成true
//         if (input.checked) {
//             // 当第一层的状态为真时，调用展开函数，并传入input ,label,第二层标签，第二层的子标签，以及获取第二层下拉菜单的数量
//             expandMenu(input, label, secondMenuBox, secondSubMenuLiTag.length);
//         } else {
//             // 否则再次点击时状态改成了false，清空id之前的label关联
//             input.id = "";
//             label.setAttribute("for", "");
//             activeItem = null; // 将存储变量清空
//             secondMenuBox.removeAttribute("style"); // 去除style，让高度自动
//         }
//     }
//     // 第一层的点击事件
//     for (let i = 0; i < navMenuItems.length; i++) {
//         navMenuItems[i].addEventListener("click", toggleMenu); // 给每个第一层添加一个点击事件，并调用切换函数
//     }
//     // 处理第三层的js
//     let activeItem2 = null; // 存储变量2 当点击不是当前标签时，将之前的标签传给变量2，并处理状态，清空状态
//     function collapseSecondMenu() {
//         let secondInput = activeItem2.querySelector(".navSecondInput"); // 处理存储变量2的input和label
//         let secondLabel = activeItem2.querySelector(".navSecondLabel");
//         secondInput.checked = false; // 并将存储变量2的状态改为false
//         secondInput.id = ""; // 处理存储变量2 id和label，和高度为0
//         secondLabel.setAttribute("for", secondInput.id);
//         secondLabel.nextElementSibling.style.height = "0";
//     }

//     function expandSecondMenu(navSecondInput, navSecondLabel, thirdSubMenuBox, thirdHeight) {
//         // 处理第三层和第二层的逻辑，跟第一层差不多
//         isAnMenu = true; // 判断第二层是否展开状态
//         heightArr.splice(0); // 高度数组，永远只存储一个值
//         navSecondInput.id = "menuItem2"; // 赋值并关联label
//         navSecondLabel.setAttribute("for", navSecondInput.id);
//         activeItem2 = navSecondInput.parentElement;
//         thirdSubMenuBox.style.height = thirdHeight * 30 + "px";
//         let secondParent = activeItem2.parentElement; // 获取点击标签的父亲secondMenuBox
//         // 给点击标签后的父亲重新设置高度，第二层的下拉子菜单的高度 + 第二层元素的个数 * 每行的行高是30
//         secondParent.style.height = parseInt(thirdSubMenuBox.style.height) + secondParent.querySelectorAll(".secondSubMenuLiTag").length * 30 + "px";
//         if (secondParent.style.height !== "") {
//             // secondMenuBox的高度不为空的状态下，将高度传给高度数组进行存储
//             heightArr.push(secondParent.style.height);
//         }
//     }

//     function toggleSecondMenu(event) {
//         event.preventDefault(); // 阻止冒泡和默认事件
//         event.stopPropagation();
//         let navSecondInput = this.querySelector(".navSecondInput"); // 获取传进来的event input和label参数
//         let navSecondLabel = this.querySelector(".navSecondLabel");
//         let thirdSubMenuBox = this.querySelector(".thirdSubMenuBox"); // 获取第三层元素标签
//         let thirdHeight = thirdSubMenuBox.querySelectorAll(".thirdMenuLiTag").length; // 获取第三层下拉菜单的个数
//         if (activeItem2 && activeItem2 !== this) {
//             // 如果 存储变量activeItem2不是空，且传进来的存储变量不等于当前点击标签，也就是判断点击了其他二层标签了
//             collapseSecondMenu(); // 调用处理第二层的函数，收缩其他第二层
//         }
//         navSecondInput.checked = !navSecondInput.checked; // 刚开始没点第二层的标签状态是false,要切换成true
//         if (navSecondInput.checked) {
//             // 当第二层的状态为真时，调用展开函数，并传入第三层的input ,label,第三层标签，第三层的子标签，以及获取第三层下拉菜单的数量
//             expandSecondMenu(navSecondInput, navSecondLabel, thirdSubMenuBox, thirdHeight);
//         } else {
//             // 否则再次点击时状态改成了false，清空id之前的label关联，并把是否展开的状态改为false
//             isAnMenu = false;
//             navSecondInput.id = "";
//             navSecondLabel.setAttribute("for", "");
//             activeItem2 = null;
//             thirdSubMenuBox.style.height = "0";
//             let secondParent = this.parentElement;
//             secondParent.removeAttribute("style");
//             heightArr.splice(0);
//         }
//     }
//     // 第二层的点击事件
//     let secondSubMenuLiTag = document.querySelectorAll(".secondSubMenuLiTag");
//     for (let s = 0; s < secondSubMenuLiTag.length; s++) {
//         secondSubMenuLiTag[s].addEventListener("click", toggleSecondMenu); // 给每个第二层添加一个点击事件，并调用切换函数
//     }
// })();
