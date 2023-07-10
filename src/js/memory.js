import "../css/memory.css";
import "../css/normalize.css";
import "../js/flexible.js";
import { programming, github, studyOther, working, softwareList, adobeList, systemList, lifeList, subTitleList, sourceMaterial, storage } from "./menuData";

// web icon js
document.querySelector("#icon-link").href = require("../images/favicon.ico");

window.addEventListener("load", function () {
    let tagArr = ["study_programming", "study_github", "study_other", "work_working", "computer_other", "computer_adobe", "computer_system", "document_life", "document_subtitle", "material_link", "temporary_storage"];
    const menuDataArray = [programming, github, studyOther, working, softwareList, adobeList, systemList, lifeList, subTitleList, sourceMaterial, storage];
    for (let arr = 0; arr < tagArr.length; arr++) {
        if (tagArr[arr] && menuDataArray[arr]) {
            upDataList(tagArr[arr], menuDataArray[arr]);
        }
    }
    // list link mouseenter and mouseleave js
    let fontSize = window.getComputedStyle(document.documentElement).fontSize.slice(0, 4);
    let link_bg = document.querySelector(".link_bg");
    let first_lists = document.querySelectorAll(".list_container>.first_lists");
    let second_lists = document.querySelectorAll(".second_lists");
    let third_lists = document.querySelectorAll(".third_lists");
    linkHover(first_lists, link_bg, fontSize, "list_hover");
    linkHover(second_lists, link_bg, fontSize, "list_hover_second");
    linkHover(third_lists, link_bg, fontSize, "list_hover_third");
    // list add html page js
    /**
     * @param {string} tag
     * @param {variable} dataList
     */
    function upDataList(tag, dataList) {
        let element = document.getElementById(tag);
        let result = dataList
            .map(e => {
                return `<li class="third_lists"><a href="javascript:;"><i></i><span>${e.name}</span></a></li>`;
            })
            .join("");
        element.innerHTML = result;
    }
    // Custom function js
    /**
     * @param {variable} listNode
     * @param {variable} listBgHeight
     * @param {variable} htmlFontSize
     * @param {string} listHoverStyle
     */
    function linkHover(listNode, listBgHeight, htmlFontSize, listHoverStyle) {
        let activeLink = null;
        let isClicked = true;
        for (let i = 0; i < listNode.length; i++) {
            listNode[i].addEventListener("mouseenter", function (event) {
                event.stopPropagation();
                listBgHeight.style.opacity = 1;
                listBgHeight.style.top = listNode[i].offsetTop / htmlFontSize + "rem";
                listNode[i].firstElementChild.classList.toggle(listHoverStyle);
            });
            listNode[i].addEventListener("mouseleave", function (event) {
                event.stopPropagation();
                listBgHeight.style.opacity = 0;
                listNode[i].firstElementChild.classList.remove(listHoverStyle);
            });
            listNode[i].addEventListener("click", function (event) {
                event.stopPropagation();
                switch (listNode[i].className) {
                    case "first_lists": {
                        let second_container = listNode[i].querySelector(".second_container");
                        let thirdList = second_container.querySelectorAll(".third_container");
                        if (activeLink && activeLink !== this) {
                            let second_container_height = activeLink.querySelector(".second_container");
                            let third_container_height = activeLink.querySelector(".third_container");
                            second_container_height.removeAttribute("style");
                            third_container_height.removeAttribute("style");
                        }
                        // 切换展开和收缩,当第二个li高度等于0px或者等于空的时候，展开
                        if (second_container.style.height === "0px" || second_container.style.height === "") {
                            activeLink = this;
                            let second_list_length = second_container.children.length;
                            second_container.style.height = (listBgHeight.offsetHeight * second_list_length) / htmlFontSize + "rem";
                        } else {
                            // 当不等于空的时候，再次点击后收缩
                            activeLink = null;
                            second_container.removeAttribute("style");
                        }
                        thirdList.forEach(element => {
                            element.removeAttribute("style");
                        });
                        break;
                    }
                    case "second_lists": {
                        let third_container = listNode[i].querySelector(".third_container");
                        if (activeLink && activeLink !== this) {
                            isClicked = false;
                            let third_list_length = activeLink.querySelector(".third_container");
                            third_list_length.removeAttribute("style");
                            let firstHeight = parseFloat(third_container.parentNode.parentNode.children.length * this.querySelector(".third_container").children[0].offsetHeight);
                            let secondHeight = parseFloat(this.querySelector(".third_container").children.length * this.querySelector(".third_container").children[0].offsetHeight);
                            third_container.parentNode.parentNode.style.height = parseFloat(secondHeight + firstHeight) / fontSize + "rem";
                        }
                        if (third_container.style.height === "0px" || third_container.style.height === "") {
                            activeLink = this;
                            third_container.style.height = (listBgHeight.offsetHeight * third_container.children.length) / htmlFontSize + "rem";
                            if (isClicked) {
                                this.parentNode.style.height = parseFloat(third_container.style.height) + parseFloat(listNode[i].parentNode.style.height) + "rem";
                            } else {
                                isClicked = true;
                            }
                        } else {
                            activeLink = null;
                            isClicked = true;
                            third_container.removeAttribute("style");
                            this.parentNode.style.height = (listBgHeight.offsetHeight * listNode[i].parentNode.children.length) / htmlFontSize + "rem";
                        }
                        break;
                    }
                    default:
                        break;
                }
            });
        }
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
