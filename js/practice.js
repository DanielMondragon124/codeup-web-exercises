// const sliders = [
//     { id: "slider1", images: 3 },
//     { id: "slider2", images: 4 },
//     { id: "slider3", images: 6 }
// ];
//
// sliders.forEach((slider, index) => {
//
//
//     let currentSlide = 0;
//     const sliderElement = document.getElementById(slider.id);
//     const indicatorsElement = document.getElementById(`indicators${index + 1}`);
//
//     setInterval(() => changeSlide(slider.id, 1), 3000);
//
//     for (let i = 0; i < slider.images; i++) {
//         const indicator = document.createElement("div");
//         indicator.classList.add("indicator");
//         if (i === 0) indicator.classList.add("active");
//         indicator.onclick = () => changeSlide(slider.id, i - currentSlide);
//         indicatorsElement.appendChild(indicator);
//     }
//
//     window[`changeSlide${index + 1}`] = (step) => {
//         currentSlide += step;
//         if (currentSlide >= slider.images) currentSlide = 0;
//         if (currentSlide < 0) currentSlide = slider.images - 1;
//         const translateX = currentSlide * -100;
//         sliderElement.querySelector(".slider").style.transform = `translateX(${translateX}%)`;
//
//         const indicators = Array.from(indicatorsElement.querySelectorAll(".indicator"));
//         indicators.forEach((indicator, i) => {
//             indicator.classList.toggle("active", i === currentSlide);
//         });
//     };
// });
//
// function changeSlide(sliderId, step) {
//     const sliderIndex = sliders.findIndex(slider => slider.id === sliderId);
//     window[`changeSlide${sliderIndex + 1}`](step);
// }
const sliders = [
    { id: "slider1", images: 3 },
    { id: "slider2", images: 4 },
    { id: "slider3", images: 6 }
];

sliders.forEach((slider, index) => {
    let currentSlide = 0;
    const sliderElement = document.getElementById(slider.id);
    const indicatorsElement = document.getElementById(`indicators${index + 1}`);

    // Only create an automatic slide change and indicators for sliders other than slider 3.
    if (slider.id !== "slider3") {
        setInterval(() => changeSlide(slider.id, 1), 3000);

        for (let i = 0; i < slider.images; i++) {
            const indicator = document.createElement("div");
            indicator.classList.add("indicator");
            if (i === 0) indicator.classList.add("active");
            indicator.onclick = () => changeSlide(slider.id, i - currentSlide);
            indicatorsElement.appendChild(indicator);
        }
    }

    window[`changeSlide${index + 1}`] = (step) => {
        currentSlide += step;
        if (currentSlide >= slider.images) currentSlide = 0;
        if (currentSlide < 0) currentSlide = slider.images - 1;
        const translateX = currentSlide * -100;
        sliderElement.querySelector(".slider").style.transform = `translateX(${translateX}%)`;

        if (slider.id !== "slider3") {
            const indicators = Array.from(indicatorsElement.querySelectorAll(".indicator"));
            indicators.forEach((indicator, i) => {
                indicator.classList.toggle("active", i === currentSlide);
            });
        }
    };
});

function changeSlide(sliderId, step) {
    const sliderIndex = sliders.findIndex(slider => slider.id === sliderId);
    window[`changeSlide${sliderIndex + 1}`](step);
}
