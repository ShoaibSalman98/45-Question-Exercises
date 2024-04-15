"use strict";
let places = ["Saudiarabia", "England", "Newzeland", "Canada"];
console.log("Orignal Order:-", places, "\n");
// print array in Alphbetical order without wthout modify original order
console.log("Alphabetical Order:-", places.slice().sort());
//Print Arry in original order.
console.log("Orignal Order:-", places, "\n");
//Reverse the order of your list. Print the array to show that its order has changed.
console.log("Methode -1 of Reverse Order");
console.log("Orignal Order:-", places);
console.log("Reverse Order:-", places.slice().reverse());
let places1 = places.slice();
console.log("Reverse the reversed Order and its back to orignal order", places1, "\n");
//Methode-2 of Reverse Order.
console.log("Methode -2 of Reverse Order");
console.log("Orignal Order:-", places);
let Arrycopy2 = places.slice();
let ArryReverse = Arrycopy2.reverse();
console.log(" Reverse Order :-", ArryReverse);
let reverseaggain = ArryReverse.reverse();
console.log("Reverse the reversed Order and its back of Orignal:-", ArryReverse, "\n");
// Sort your array so it’s stored in alphabetical order.
let SortedList1 = places.sort();
console.log("Alphabetical Order;-", SortedList1);
// Sort to change your array so it’s stored in reverse alphabetical order.
let reverseSorted = SortedList1.reverse();
console.log("Reverse Alphabetical Order :-", reverseSorted);
