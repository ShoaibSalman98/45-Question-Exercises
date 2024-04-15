function make_shirt(size, message) {
    console.log("My shirt size is ".concat(size, " and ").concat(message, " print on it"));
}
make_shirt("Large", "Wonderfull Day");
function make_shirt1(size, message) {
    return "My shirt size is ".concat(size, " and ").concat(message, " print on it");
}
var myshirt = make_shirt1("Large ", "Wonderfull Day");
console.log(myshirt);
function make_shirt2(size, message) {
    return size + message;
}
var myshirts = make_shirt2("Large ", "Wonderfull Day");
console.log(myshirts);
