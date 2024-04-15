let magicians:string[]= [ "Harry Houdini", "David Copperfield", "David Blaine", "Uri Gelle"];

// copy of Arry.
let magicians2 = [...magicians];
function show_magician(Greet:string) {
    let withGreet="";

    for (let item of magicians2) {
        withGreet += `${Greet} ${item} \n`;

    }
    return withGreet;
        
    };
let myGreetings = show_magician("The Great");
let Makearry = myGreetings.split(`\n`);
console.log(Makearry);
