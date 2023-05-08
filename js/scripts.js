const imageList = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
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
setInterval(nextImage, 4000);

prevArrow.addEventListener("click", prevImage);
nextArrow.addEventListener("click", nextImage);

