"use strict";
const thumbs = document.querySelector("#thumbs");
const largeImage = document.querySelector("#largeImg");
thumbs.addEventListener("click", (evt)=>{
    evt.preventDefault();
    const link = evt.target.closest("a");
    if (!link) return;
    largeImage.src = link.href;
});

//# sourceMappingURL=index.f75de5e1.js.map
