function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love TypeScript."; }
    console.log("My shirt size is ".concat(size, " and ").concat(message));
}
make_shirt();
make_shirt("Medium");
make_shirt("XL");
function make_shirt1(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    return "My shirt size is ".concat(size, " and ").concat(message, " print on it");
}
console.log(make_shirt1());
console.log(make_shirt1("Medium"));
console.log(make_shirt1("XL"));
function make_shirt2(message, size) {
    if (size === void 0) { size = "Large "; }
    return size + message;
}
var myfunc = make_shirt2("I love TypeScript");
console.log(myfunc);
