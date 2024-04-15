let magicians:string[]= [ "Harry Houdini", "David Copperfield", "David Blaine", "Uri Gelle"];

// for Each Methode
function magician_show(Magician:string[]) {
    magicians.forEach(name=> console.log(name));   
}

magician_show(magicians);

//For Loop Methode
function magiciannames() {
    for(let magician of magicians) {
        console.log(magician);
        
    }
    
};
magiciannames();