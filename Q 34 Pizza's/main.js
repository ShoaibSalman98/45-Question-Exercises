let Pizza = ["Fajita", "Creamy", "Chease"];
for (let i = 0; i < Pizza.length; i++) {
    console.log(Pizza[i]);
}
for (let i = 0; i < Pizza.length; i++) {
    console.log("I like", Pizza[i], "Pizza");
}
console.log("I love to eat Pizza becasue of its \n unique taste adding more toppings makes it a more delicious\n");
// 2nd Methode.
console.log(Pizza);
for (let Pizzas of Pizza) {
    console.log(`I like ${Pizzas} Pizza`);
}
console.log("I love to eat Pizza becasue of its \n unique taste adding more toppings makes it a more delicious");
export {};
