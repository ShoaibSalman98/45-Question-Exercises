//   Methode 1.Replace Methode.

//  let personName1 = "shaoib Salman";
//  console.log("Lower Case:-" , personName1. toLowerCase());

//  console.log("Upper Case:-" , personName1. toUpperCase());

//  console.log("Tittle Case:-" , personName1. replace(/\b\w/g,
//   (Tittle) => Tittle.toUpperCase()));

// Methode 2.For Loop Methode.

// let personName:string = "muhammad Shoaib salman Khan";
// console.log("Lower Case :- " ,personName.toLowerCase());
// console.log("Upper Case :- " ,personName.toUpperCase());

// let word = personName.split(" ");
// let titleCase: string = ""
// for (let i = 0; i < word.length; i++ ) {
//     titleCase +=word[i].charAt(0).toUpperCase()+word[i].slice(1).toLowerCase()+ " ";    
// }
// console.log("Tittle Case :- " , titleCase);

//  Methode 3 CharAt & Slice Methode Tittle Case only

// let personName:string = "muhammad Shoaib salman Khan";
// let Title =personName.charAt(0).toUpperCase();
// let Case = personName.slice(1).toLowerCase();
// console.log(Title + Case);

// Methode 4 map & Split Methode Tittle Case only

// let personName:string = "muhammad Shoaib salman Khan";
// let words = personName.split(" ");
// let titleCase = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
// console.log(titleCase);


