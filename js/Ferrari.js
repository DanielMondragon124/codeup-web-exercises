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

const imageList = [
    "photos/sf90.jpeg",
    "photos/WP.jpeg",
    "photos/bbb.jpeg",
    "photos/ferrari5.webp",
    "photos/cars3.webp",
];

let currentImageIndex = 0;
const imageContainer1 = document.getElementById("image-container1");
const imageContainer2 = document.getElementById("image-container2");
const prevArrow = document.getElementById("prev-arrow");
const nextArrow = document.getElementById("next-arrow");

function updateImage() {
    if (imageContainer1.style.opacity === "1" || imageContainer1.style.opacity === "") {
        imageContainer1.style.opacity = "0";
        imageContainer2.style.backgroundImage = `url(${imageList[currentImageIndex]})`;
    } else {
        imageContainer1.style.opacity = "1";
        imageContainer1.style.backgroundImage = `url(${imageList[currentImageIndex]})`;
    }
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % imageList.length;
    updateImage();
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + imageList.length) % imageList.length;
    updateImage();
}

updateImage();
setInterval(nextImage, 3000);

prevArrow.addEventListener("click", prevImage);
nextArrow.addEventListener("click", nextImage);

