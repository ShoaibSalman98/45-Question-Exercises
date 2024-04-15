var magicians = ["Harry Houdini", "David Copperfield", "David Blaine", "Uri Gelle"];
// for Each Methode
function magician_show(Magician) {
    Magician.forEach(function (name) { return console.log(name); });
}
function make_great(Magic) {
    magicians.map(function (item) { return console.log("The Great", item); });
}
;
make_great(magicians);
//Return Metode.
function make_great1(Magician) {
    return Magician.map(function (item) { return "The Great ".concat(item); });
}
;
var greatMagician = (make_great1(magicians));
console.log(greatMagician);
magician_show(greatMagician);
