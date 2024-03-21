// // Methode 1.

import { log } from "console";

// let personName = "shaoib Salman";
// console.log(personName. toLowerCase());

// console.log(personName. toUpperCase());

// console.log(personName. replace(/\b\w/g, (char) => char.toUpperCase()));

// Methode 2.

let personName:string = "muhammad Shoaib salman Khan";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());

let word: string [] = personName.split(" ");
let titleCase: string = ""
for (let i = 0; i < word.length; i++ ) {
    titleCase +=word[i].charAt(0).toUpperCase()+word[i].slice(1).toLowerCase()+ " ";    
}
console.log(titleCase);


