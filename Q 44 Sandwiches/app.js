function Sandwiches() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    return "I want Sandwich of ".concat(items);
}
;
var collection1 = Sandwiches("Egg", "Ketchup", "Chicken");
var collection2 = Sandwiches("Egg", "Mioneiz", "Chicken", "Fries");
var collection3 = Sandwiches("Cheese", "Cucumber", "Chicken", "Fries", "Tommato", "Chilli");
console.log(collection1);
console.log(collection2);
console.log(collection3);
