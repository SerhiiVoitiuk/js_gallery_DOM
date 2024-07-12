"use strict";
const largeImg = document.getElementById("largeImg");
const thumbs = document.getElementById("thumbs");
thumbs.addEventListener("click", (e)=>{
    e.preventDefault();
    largeImg.src = e.target.closest(".list-item__link");
});

//# sourceMappingURL=index.f75de5e1.js.map
