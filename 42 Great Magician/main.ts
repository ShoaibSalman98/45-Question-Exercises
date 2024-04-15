let magicians:string[]= [ "Harry Houdini", "David Copperfield", "David Blaine", "Uri Gelle"];

 // for Each Methode
// function magician_show(Magician:string[]) {
//     Magician.forEach(name=> console.log(name));   
// }
//   function make_great(Magic:string[]) {
//      magicians.map(item=> console.log("The Great", item));
       
//  };
// make_great(magicians);


// //Return Metode.
// function make_great1(Magician:string[]) {
//    return  Magician.map(item=> `The Great ${item}`);
// };
// let greatMagician=( make_great1(magicians));
// console.log(greatMagician);

// magician_show(greatMagician);

function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}

function make_great(magician) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] += " the Great";
    }
}
// Call make_great function to modify the magicians array
make_great(magicians);
show_magicians(magicians);
