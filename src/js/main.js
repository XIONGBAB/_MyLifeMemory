import "../css/index.css";
import "../css/normalize.css";
import "../js/flexible.js";
document.querySelector("#icon-link").href = require("../images/favicon.ico");

// 判断是否支持HMR功能
if (module.hot) {
    module.hot.accept("../js/flexible.js");
    module.hot.accept("../js/flexible.js");
}

// PWA
if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker
            .register("/service-worker.js")
            .then(registration => {
                console.log("SW registered: ", registration);
            })
            .catch(registrationError => {
                console.log("SW registration failed: ", registrationError);
            });
    });
}
// rotate timer

window.addEventListener("load", function () {
    //nav line js
    let navLine = document.querySelector(".nav_line");
    let navList = document.querySelectorAll(".nav_list>li");
    let fontSize = window.getComputedStyle(document.documentElement).fontSize.slice(0, 4);
    navLine.style.left = navList[0].offsetLeft / fontSize + "rem";
    navLine.style.width = navList[0].offsetWidth / fontSize + "rem";
    for (let i = 0; i < navList.length; i++) {
        navList[i].addEventListener("mouseenter", function () {
            navLine.style.opacity = 1;
            navLine.style.left = navList[i].offsetLeft / fontSize + "rem";
            navLine.style.width = navList[i].offsetWidth / fontSize + "rem";
        });
    }
    // information card
    // let tagBox = document.querySelectorAll(".tag_box > span");
    // for (let i = 0; i < tagBox.length; i++) {
    //     // let a = parseInt(Math.random() * 60);
    //     // let b = parseInt(document.documentElement.style.fontSize);
    //     let c = tagBox[i].style.getPropertyValue("--i");
    //     tagBox[i].style.left = c * 4 + "rem";
    //     tagBox[i].style.top = c * 2 + "rem";
    //     console.log(c);
    // }
    // tagBox.forEach(e => {
    //     // let a = ( * Math.random() * 60) / ;
    //     // e.style.left = +"rem";
    //     let a = e.style.getPropertyValue("--i");
    //     console.log(a);
    //     e.style.top = (e.style.getPropertyValue("--i") * Math.random() * 60) / document.documentElement.style.fontSize + "rem";
    // });
    // function updateTime() {
    //     const now = new Date();
    //     const hours = now.getHours().toString().padStart(2, "0");
    //     const minutes = now.getMinutes().toString().padStart(2, "0");
    //     const seconds = now.getSeconds().toString().padStart(2, "0");

    //     const hourDegree = hours * 30 + minutes / 2;
    //     const minuteDegree = minutes * 6 + seconds / 10;
    //     const secondDegree = seconds * 6;

    //     let timerArr = [hours, minutes, seconds];
    //     let rotatingDegree = [hourDegree, minuteDegree, secondDegree];
    //     const timerBox = document.querySelectorAll(".timerBox ul li span");
    //     const pointers = document.querySelectorAll(".timeBox");

    //     for (let i = 0; i < timerBox.length; i++) {
    //         timerBox[i].innerHTML = timerArr[i];
    //         pointers[i].style.transform = `rotate(${rotatingDegree[i]}deg)`;
    //     }
    // }
    // const timerContainer = document.querySelector(".timerBox");
    // timerContainer.style.display = "block";
    // let opacitySpeed = 0;
    // let closeSetinterval = setInterval(() => {
    //     opacitySpeed += 0.1;
    //     if (opacitySpeed >= 1) {
    //         opacitySpeed = 1;
    //         clearInterval(closeSetinterval);
    //     }
    //     document.querySelector(".timerBox").style.opacity = opacitySpeed;
    // }, 100);

    // setInterval(updateTime, 1000);

    // // JavaScript
    // let navList = document.querySelectorAll(".navBanner ul li");
    // navList.forEach(item => {
    //     item.addEventListener("mouseenter", () => {
    //         item.querySelector("a").classList.add("navBorder");
    //     });
    //     item.addEventListener("click", () => {
    //         item.classList.add("navCircle");
    //         navList.forEach(sibling => {
    //             if (sibling !== item) {
    //                 sibling.classList.remove("navCircle");
    //             }
    //         });
    //     });
    // });

    // click menu button
    const searchBox = document.querySelector("#searchContainer");
    const menuBox = document.querySelector("#menuBtnContainer");
    document.querySelector(".menuBtnOpen").addEventListener("click", () => {
        const searchBoxText = searchBox.classList.toggle("searchBox");
        const searchBoxOpenText = searchBox.classList.toggle("searchBoxOpen");
        searchBox.className == "searchBoxOpen" ? searchBoxText : searchBoxOpenText;

        const menuBoxText = menuBox.classList.toggle("menuBtn");
        const menuBoxOpenText = menuBox.classList.toggle("menuBtnOpen");
        menuBox.className == "menuBtnOpen" ? menuBoxText : menuBoxOpenText;
        searchBox.addEventListener("mouseenter", () => {
            if (menuBox.className == "menuBtn" && searchBox.className == "searchBox") {
                menuBox.classList.add("menuBtnOpen");
                menuBox.classList.remove("menuBtn");
            }
        });

        searchBox.addEventListener("mouseleave", () => {
            if (menuBox.className == "menuBtnOpen" && searchBox.className == "searchBox") {
                menuBox.classList.remove("menuBtnOpen");
                menuBox.classList.add("menuBtn");
            }
        });
    });
});
