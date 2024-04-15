//Make function with rest perameters that accept argument of our sandwich.
function Sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\n Order A Sandwich \n");
    items.forEach(function (additem) { return console.log(additem); });
    console.log("\nSir Your Sandwich is ready Keep Enjoy it\n");
}
;
// call function 3 times with 3 diffrent arguments.
Sandwich("Egg", "Ketchup", "Chicken");
Sandwich("Egg", "Mioneiz", "Chicken", "Fries");
Sandwich("Cheese", "Cucumber", "Chicken", "Fries", "Tommato", "Chilli");
