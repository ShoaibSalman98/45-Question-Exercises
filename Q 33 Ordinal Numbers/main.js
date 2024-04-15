"use strict";
let Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
// for loop Methode.
// for( let Num of Numbers) {
//     let ordinal: string;
//     if (Num === 1) {
//         ordinal ="st";
//     } else if (Num === 2) {
//         ordinal ="nd";  
// } else if (Num === 3){
//     ordinal= "rd";
// }else {
//     ordinal= "th";
// }
// console.log(`${Num}${ordinal}`);
// };
// For Methode. 
for (let i = 0; i < Numbers.length; i++) {
    if (Numbers[i] === 1) {
        console.log(`${Numbers[i]}st`);
    }
    else if (Numbers[i] === 2) {
        console.log(`${Numbers[i]}nd`);
    }
    else if (Numbers[i] === 3) {
        console.log(`${Numbers[i]}rd`);
    }
    else {
        console.log(`${Numbers[i]}th`);
    }
}
;
// // for Each Methode.
// Numbers.forEach(Num =>  {
//     let ordinal: string;
//     if (Num === 1) {
//         ordinal ="st";
//     } else if (Num === 2) {
//         ordinal ="nd";  
//     } else if (Num === 3){
//         ordinal= "rd";
//     }else {
//         ordinal= "th";
//     }
//     console.log(`${Num}${ordinal}`);
// });
