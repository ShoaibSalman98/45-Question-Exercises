var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magicians = ["Harry Houdini", "David Copperfield", "David Blaine", "Uri Gelle"];
// copy of Arry.
var magicians2 = __spreadArray([], magicians, true);
function show_magician(Greet) {
    var withGreet = "";
    for (var _i = 0, magicians2_1 = magicians2; _i < magicians2_1.length; _i++) {
        var item = magicians2_1[_i];
        withGreet += "".concat(Greet, " ").concat(item, " \n");
    }
    return withGreet;
}
;
var myGreetings = show_magician("The Great");
var Makearry = myGreetings.split("\n");
console.log(Makearry);
