"use strict";
let num = 2;
while (num <= 65536) {
    console.log(num);
    num *= 2;
}


let totalCones = Math.floor(Math.random() * 51) + 50;
let conesSold = 0;

console.log(`Starting amount of cones: ${totalCones}`);

do {
    let conesToBuy = Math.floor(Math.random() * 5) + 1;

    if (conesToBuy > totalCones) {
        console.log(`Cannot sell you ${conesToBuy} cones I only have ${totalCones}...`);
    } else {
        totalCones -= conesToBuy;
        conesSold += conesToBuy;
        console.log(`${conesToBuy} cones sold...`);
    }

} while (totalCones > 0);

console.log(`Yay! I sold them all! Sold a total of ${conesSold} cones.`);
