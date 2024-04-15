var magicians = ["Harry Houdini", "David Copperfield", "David Blaine", "Uri Gelle"];
// for Each Methode
function magician_show(Magician) {
    magicians.forEach(function (name) { return console.log(name); });
}
magician_show(magicians);
//For Loop Methode
function magiciannames() {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
;
magiciannames();
