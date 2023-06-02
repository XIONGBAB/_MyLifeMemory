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
(function () {
    // 先获取所有的navMenuItems
    let navMenuItems = document.querySelectorAll(".navMenuItem");
    let activeItem = null; // 用一个变量来跟踪当前的菜单
    for (let i = 0; i < navMenuItems.length; i++) {
        navMenuItems[i].addEventListener("click", function (event) {
            event.preventDefault();
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
                secondMenuLi.removeAttribute("style");
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
            // third menu box
            let secondSubMenuLiTag = this.querySelector(".secondSubMenuLiTag");
            let navSecondInput = secondSubMenuLiTag.querySelector(".navSecondInput");
            let navSecondLabel = secondSubMenuLiTag.querySelector(".navSecondLabel");
            let thirdSubMenuBox = secondSubMenuLiTag.querySelector(".thirdSubMenuBox ");
            let thirdHeight = thirdSubMenuBox.querySelectorAll(".thirdMenuLiTag");
            let activeItem2 = null;
            secondSubMenuLiTag.addEventListener("click", function (e) {
                e.preventDefault();

                let secondParent = this.parentElement;
                secondParent.style.height = "auto";
                thirdSubMenuBox.style.height = thirdHeight.length * thirdHeight[0].offsetHeight + "px";

                navSecondInput.checked = !navSecondInput.checked;
                if (navSecondInput.checked) {
                    navSecondInput.id = "menuItem2";
                    navSecondLabel.setAttribute("for", navSecondInput.id);
                    activeItem2 = this;
                } else {
                }
            });
        });
    }
    let secondSubMenuLiTags = document.querySelectorAll(".secondSubMenuLiTag");
    for (let i = 0; i < secondSubMenuLiTags.length; i++) {
        secondSubMenuLiTags[i].addEventListener("click", function (event) {
            event.stopPropagation(); // 阻止事件冒泡
        });
    }
})();

/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 











*/
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
