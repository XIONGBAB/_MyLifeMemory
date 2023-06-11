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
    // left nav style js
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
                let noOfItem = Boolean(this.querySelector(".thirdSubMenuBox "));
                if (noOfItem) {
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
    // let rightBackground = document.querySelector(".rightBackground");
    // let rightContent = document.querySelector(".rightContent");
    // document.querySelector(".goButton").addEventListener("click", () => {
    //     rightBackground.style.opacity = 0;
    //     setTimeout(() => {
    //         rightBackground.style.display = "none";
    //         setTimeout(() => {
    //             rightContent.style.display = "block";
    //             rightContent.style.opacity = 1;
    //             rightBackground.remove(); // clear right bg
    //         }, 500);
    //     }, 500);
    // });
});
