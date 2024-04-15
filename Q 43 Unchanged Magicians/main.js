var magicians = ["Harry Houdini", "David Copperfield", "David Blaine", "Uri Gelle"];
function magician_show(Magician) {
    Magician.forEach(function (name) { return console.log(name); });
}
// Function to modify Arry through .map().
function make_great1(Magician) {
    return Magician.map(function (item) { return "The Great ".concat(item, " "); });
}
;
//Making copy of magicians arry by slice methode.
var copymagicians = magicians.slice();
//MOdify the orignal Arry adding "The Great" before each name.
var copy_make_great1 = make_great1(copymagicians);
//Orignal Arry,
magician_show(magicians);
// Modified Arry.
magician_show(copy_make_great1);
