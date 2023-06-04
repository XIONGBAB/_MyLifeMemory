import "../css/memory.css";
import "../css/iconfont.css";
import "../css/normalize.css";
import "../js/flexible.js";
import menuDate from "./menuData";

// web icon js
document.querySelector("#icon-link").href = require("../images/favicon.ico");

// left subMenu js

window.addEventListener("load", function () {
    let programList = document.getElementById("programList");
    let newData = menuDate
        .map(e => {
            return `<li class="thirdMenuLiTag"> <a class="navSubMenuATag" href="#"><em class="navSubMenuEmTag"></em> <span class="navSubMenuSpanTag">${e.name}</span></a></li>`;
        })
        .join("");
    programList.innerHTML = newData;
});

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
(function () {
    // 先获取所有的navMenuItems
    let navMenuItems = document.querySelectorAll(".navMenuItem");
    let activeItem = null; // 用一个变量来跟踪当前的菜单
    let heightArr = [];
    let heightArr2 = [];
    for (let i = 0; i < navMenuItems.length; i++) {
        navMenuItems[i].addEventListener("click", function (event) {
            event.preventDefault();
            event.stopPropagation();
            // 获取input 和 label 来设置id 和for  值
            let input = this.querySelector(".navMenuInput");
            let navMenuLabel = this.querySelector(".navMenuLabel");
            let secondMenuBox = this.querySelector(".secondMenuBox");
            let navHeight = secondMenuBox.querySelectorAll(".secondSubMenuLiTag");
            // 折叠以前展开的菜单，判断：如果我点击了其他菜单
            if (activeItem && activeItem !== this) {
                let activeInput = activeItem.querySelector(".navMenuInput");
                let activeLabel = activeItem.querySelector(".navMenuLabel");
                // 因为点击了其他列表，状态就为true ，那么先把当前状态调成false后就会进入下面的语句input.checked = !input.checked;
                activeInput.checked = false;
                // 并且把id和for值清空
                activeInput.id = "";
                activeLabel.setAttribute("for", "");
                activeLabel.nextElementSibling.style.height = "4px";
            }
            // 当点击时，因为状态是为false,点击后才会是true,所以要转换成true,再次点击的时候，原本是true 变false,进入else语句
            input.checked = !input.checked;
            if (input.checked) {
                input.id = "menuItem";
                navMenuLabel.setAttribute("for", input.id);
                activeItem = this;
                for (let n = 0; n < navHeight.length; n++) {
                    let checkList = navHeight[i].querySelector(".navSecondInput");
                    let thirdHeight = secondMenuBox.querySelector(".thirdSubMenuBox");
                    if (checkList.checked) {
                        secondMenuBox.style.height = navHeight.length * 30 + parseInt(thirdHeight.style.height) + "px";
                    } else {
                        secondMenuBox.style.height = heightArr[1];
                    }
                }
            } else {
                input.id = "";
                navMenuLabel.setAttribute("for", "");
                activeItem = null;
                secondMenuBox.removeAttribute("style");
                for (let n = 0; n < navHeight.length; n++) {
                    let checkList = navHeight[i].querySelector(".navSecondInput");
                    if (checkList.checked) {
                        secondMenuBox.style.height = "0";
                    } else {
                        if (secondMenuBox.style.height !== "") {
                            secondMenuBox.style.height == heightArr2[0];
                        }
                    }
                }
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
                heightArr.splice(0);
                let secondInput = activeItem2.querySelector(".navSecondInput");
                let secondLabel = activeItem2.querySelector(".navSecondLabel");
                secondInput.checked = false;
                secondInput.id = "";
                secondLabel.setAttribute("for", navSecondInput.id);
                heightArr.push(secondLabel.style.height);
                secondLabel.nextElementSibling.style.height = "0";
            }
            navSecondInput.checked = !navSecondInput.checked;
            if (navSecondInput.checked) {
                navSecondInput.id = "menuItem2";
                navSecondLabel.setAttribute("for", navSecondInput.id);
                activeItem2 = this;
                thirdSubMenuBox.style.height = thirdHeight.length * 30 + "px";
                secondParent.style.height = parseInt(thirdSubMenuBox.style.height) + secondSubMenuLiTagList.length * 30 + "px";
                if (secondParent.style.height !== "") {
                    heightArr.push(secondParent.style.height);
                    heightArr2.push(secondParent.style.height);
                }
            } else {
                navSecondInput.id = "";
                navSecondLabel.setAttribute("for", navSecondInput.id);
                activeItem2 = null;
                thirdSubMenuBox.style.height = "0";
                secondParent.removeAttribute("style");
                heightArr.splice(0);
            }
        });
    }

    let thirdMenuLiTag = document.querySelectorAll(".thirdMenuLiTag");
    for (let t = 0; t < thirdMenuLiTag.length; t++) {
        thirdMenuLiTag[t].addEventListener("click", e => {
            e.stopPropagation();
            e.preventDefault();
        });
    }
})();

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
