// import * as data from "./data.js";
window.addEventListener("load", function () {
    let study_content = $q(".study_content");
    let newData = data.map(e => {
        return ` 
                <div class="link">
                            <div class="circular"></div>
                            <div class="text">
                                <h4><a href="">${e.name}</a>   </h4>
                                <p>${e.title}</p>
                            </div>
                            <div class="date">
                                <i>2021年01月04日</i>
                                <i class="bi bi-heart">&nbsp;268</i>
                            </div>
                        </div>

        `;
    }).join(""); // 用空字符串拼接
    console.log(newData);
    study_content.innerHTML = newData;



    // tool
    function $q(name) {
        return document.querySelector(name);
    }
})