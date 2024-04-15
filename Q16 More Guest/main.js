"use strict";
console.log("GREAT NEWS ! I found a bigger table at the hotel");
let guests = ["Amir", "Shoaib", "Junaid", "Jahanzaib"];
//Inform all we found a bigger table and invite more frends.
guests.forEach(item => console.log(`Hello ${item}, I arranged a bigger table so i invite more frends`));
// Add one frend begging of the Array.
guests.unshift("Faisal");
console.log(guests);
// Add friend in the end of the Array.
guests.push("Nasir");
console.log(guests);
// Get a middle index  of the Array.
//let middleIndex : number = Math.floor(guests.length / 2);
//Add a freind on a middle index of the Array.
//guests.splice(middleIndex, 0 , "Zahid");
//console.log(guests);
// 2nd Method to add person in middle of the arry.
guests.splice(Math.floor(guests.length / 2), 0, "Shafqat");
console.log(guests);
console.log("Updated List of Expected Guests");
guests.forEach(item => console.log(`Assalm o Allikum ${item}, "Please join us for a Dinner tonight`));
