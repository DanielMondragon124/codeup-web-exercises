const textWrapper = document.getElementById("text-wrapper");
const title = document.getElementById("title");
const reflection = document.getElementById("reflection");
const content = document.getElementById("content");

setTimeout(() => {
    title.style.opacity = "1";
    reflection.style.opacity = "0.4";
}, 1000);

document.addEventListener("click", () => {
    textWrapper.style.display = "none";
    content.style.display = "block";
});
