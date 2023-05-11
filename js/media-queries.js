const loaderWrapper = document.getElementById("loader-wrapper");
const title = document.getElementById("title");
const title2 = document.getElementById("title2");



setTimeout(() => {
    title.style.opacity = "1";
    title.style.transform = "scale(1)";
}, 1000);
setTimeout(() => {
    title2.style.opacity = "1";
    title2.style.transform = "scale(1)";
}, 1000);


loaderWrapper.addEventListener("click", () => {
    loaderWrapper.style.opacity = "0";
    setTimeout(() => {
        loaderWrapper.style.display = "none";
        content.style.display = "block";
    }, 500);
});