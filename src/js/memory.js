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
// 先获取所有的navMenuItems
let navMenuItems = document.querySelectorAll(".navMenuItem");
let activeItem = null; // 用一个变量来跟踪当前的菜单
for (let i = 0; i < navMenuItems.length; i++) {
    navMenuItems[i].addEventListener("click", function (event) {
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
            let secondMenuLi = activeLabel.nextElementSibling;
            secondMenuLi.style.height = 0;
            activeInput.checked = false;
            // 并且把id和for值清空
            activeInput.id = "";
            activeLabel.setAttribute("for", "");
        }
        // 当点击时，因为状态是为false,点击后才会是true,所以要转换成true,再次点击的时候，原本是true 变false,进入else语句
        input.checked = !input.checked;
        if (input.checked) {
            input.id = "menuItem";
            navMenuLabel.setAttribute("for", input.id);
            activeItem = this;
            secondMenuBox.style.height = navHeight.length * navHeight[0].offsetHeight + "px";
        } else {
            input.id = "";
            navMenuLabel.setAttribute("for", "");
            activeItem = null;
            secondMenuBox.removeAttribute("style");
        }
    });
}
let secondSubMenuLiTags = document.querySelectorAll(".secondSubMenuLiTag");
for (let i = 0; i < secondSubMenuLiTags.length; i++) {
    secondSubMenuLiTags[i].addEventListener("click", function (event) {
        event.stopPropagation(); // 阻止事件冒泡
        console.log(1);
        let a = this.querySelector(".thirdSubMenuBox");
        let b = this.parentElement;
        console.log(b);
        a.style.height = "90px";
        b.style.height = "auto";
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

/*  backup
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

// new subMenu js
// const navMenuItemList = document.querySelectorAll(".navMenuItem");
// let activeItem = null;

// navMenuItemList.forEach(list => {
//     list.addEventListener("mouseenter", function () {
//         let { input, label } = getInput(".navMenuInput", ".navMenuLabel", this);
//         input.id = "menuItem";
//         label.setAttribute("for", input.id);
//         if (activeItem && activeItem != this) {
//             let activeItem2 = document.querySelector(".navMenuItem");
//             const input2 = activeItem2.querySelector(".navMenuInput");
//             const label2 = activeItem2.querySelector(".navMenuLabel");
//             input2.id = "";
//             label2.setAttribute("for", input2.id);
//         }
//     });

//     list.addEventListener("mouseleave", function () {
//         let { input, label } = getInput(".navMenuInput", ".navMenuLabel", this);
//         if (input.checked) {
//             console.log(input.checked, 2);
//         } else {
//             console.log(input.checked);
//             input.id = "";
//             label.setAttribute("for", input.id);
//         }
//         activeItem = this;
//     });
// });

// // function
// function getInput(inputTag, labelTag, domElement) {
//     const input = domElement.querySelector(inputTag);
//     const label = domElement.querySelector(labelTag);
//     return { input, label };
// }

// left nav style js
// 先获取所有的navMenuItems
// let navMenuItems = document.querySelectorAll(".navMenuItem");
// let activeItem = null; // 用一个变量来跟踪当前的菜单
// for (let i = 0; i < navMenuItems.length; i++) {
//     navMenuItems[i].addEventListener("click", function (event) {
//         event.stopPropagation();
//         // 获取input 和 label 来设置id 和for  值
//         let input = this.querySelector(".navMenuInput");
//         let navMenuLabel = this.querySelector(".navMenuLabel");
//         let secondMenuBox = this.querySelector(".secondMenuBox");
//         let navHeight = secondMenuBox.querySelectorAll(".secondSubMenuLiTag");
//         // 折叠以前展开的菜单，判断：如果我点击了其他菜单
//         if (activeItem && activeItem !== this) {
//             let activeInput = activeItem.querySelector(".navMenuInput");
//             let activeLabel = activeItem.querySelector(".navMenuLabel");
//             // 因为点击了其他列表，状态就为true ，那么先把当前状态调成false后就会进入下面的语句input.checked = !input.checked;
//             let secondMenuLi = activeLabel.nextElementSibling;
//             secondMenuLi.style.height = 0;
//             activeInput.checked = false;
//             // 并且把id和for值清空
//             activeInput.id = "";
//             activeLabel.setAttribute("for", "");
//         }
//         // 当点击时，因为状态是为false,点击后才会是true,所以要转换成true,再次点击的时候，原本是true 变false,进入else语句
//         input.checked = !input.checked;
//         if (input.checked) {
//             input.id = "menuItem";
//             navMenuLabel.setAttribute("for", input.id);
//             activeItem = this;
//             secondMenuBox.style.height = navHeight.length * navHeight[0].offsetHeight + "px";
//         } else {
//             input.id = "";
//             navMenuLabel.setAttribute("for", "");
//             activeItem = null;
//             secondMenuBox.removeAttribute("style");
//         }
//     });
// }
// let secondSubMenuLiTags = document.querySelectorAll(".secondSubMenuLiTag");

// for (let i = 0; i < secondSubMenuLiTags.length; i++) {
//     secondSubMenuLiTags[i].addEventListener("click", function (event) {
//         event.stopPropagation(); // 阻止事件冒泡
//     });
// }

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

// backup

let secondSubMenuLiTags = document.querySelectorAll(".secondSubMenuLiTag");
let activeItem2 = null;
for (let i = 0; i < secondSubMenuLiTags.length; i++) {
    secondSubMenuLiTags[i].addEventListener("click", function (event) {
        event.stopPropagation(); // 阻止事件冒泡
        let thirdSubMenuBox = this.querySelector(".thirdSubMenuBox");
        let b = this.parentElement;
        let lis = thirdSubMenuBox.querySelectorAll(".thirdMenuLiTag");
        let input2 = this.querySelector(".navMenuInput");
        let navMenuLabel2 = this.querySelector(".navMenuLabel");
        if (activeItem2 && activeItem2 !== this) {
            let activeInput2 = activeItem2.querySelector(".navMenuInput");
            let activeLabel2 = activeItem2.querySelector(".navMenuLabel");
            let thirdMenuLi = activeLabel2.nextElementSibling;
            thirdMenuLi.style.height = 0;
            activeInput2.checked = false;
            activeInput2.id = "";
            activeLabel2.setAttribute("for", "");
        }
        console.log(input2);
        // input2.checked = !input2.checked;
        if (input2.checked) {
            input2.id = "menuItem2";
            navMenuLabel2.setAttribute("for", input2.id);
            thirdSubMenuBox.style.height = lis.length * lis[0].offsetHeight + "px";
            b.style.height = "auto";
            activeItem2 = this;
        } else {
            input2.id = "";
            navMenuLabel2.setAttribute("for", "");
            activeItem2 = null;
            thirdSubMenuBox.removeAttribute("style");
        }
    });
}

*/
