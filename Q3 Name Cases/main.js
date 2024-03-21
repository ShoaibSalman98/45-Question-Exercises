"use strict";
// // Methode 1.
Object.defineProperty(exports, "__esModule", { value: true });
// let personName = "shaoib Salman";
// console.log(personName. toLowerCase());
// console.log(personName. toUpperCase());
// console.log(personName. replace(/\b\w/g, (char) => char.toUpperCase()));
// Methode 2.
let personName = "muhammad Shoaib salman Khan";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
let word = personName.split(" ");
let titleCase = "";
for (let i = 0; i < word.length; i++) {
    titleCase += word[i].charAt(0).toUpperCase() + word[i].slice(1).toLowerCase() + " ";
}
console.log(titleCase);
