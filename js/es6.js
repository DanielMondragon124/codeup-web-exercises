function singleFurColor(objects) {
    return objects.filter((obj) => obj.fur.length === 1);
}



const hamsters = [
    { name: "Fluffy", heightInMM: 100, fur: ['brown', 'white'], gender: "female", dateOfBirth: "June 15" },
    { name: "Snowball", heightInMM: 90, fur: ['white'], gender: "male", dateOfBirth: "April 10" },
    { name: "Bijou", heightInMM: 75, fur: ['white'], gender: "female", dateOfBirth: "July 10" },
    { name: "Nibbles", heightInMM: 110, fur: ['gray'], gender: "female", dateOfBirth: "November 3" }
];

console.log(singleFurColor(hamsters));
