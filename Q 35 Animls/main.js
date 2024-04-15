var animls = ["Cat", "Dog", "Rabbit"];
// for(let i=0; i < animls.length; i++) {
//     console.log(animls[i])
// } 
// for(let i=0; i < animls.length; i++) {
//     console.log(`A ${animls[i]} would make a great pet`);
// console.log(`A ${animls[i]} is a usefull domestic pet`);
// };
for (var _i = 0, animls_1 = animls; _i < animls_1.length; _i++) {
    var A = animls_1[_i];
    console.log(A);
}
for (var _a = 0, animls_2 = animls; _a < animls_2.length; _a++) {
    var D = animls_2[_a];
    console.log("A ".concat(D, " would make a great pet"));
}
console.log("\n All animls like ".concat(animls, " are a usefull domestic pets"));
