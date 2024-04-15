let magicians:string[]= [ "Harry Houdini", "David Copperfield", "David Blaine", "Uri Gelle"];

function magician_show(Magician:string[]) {
    Magician.forEach(name=> console.log(name));   
}
// Function to modify Arry through .map().
function make_great1(Magician:string[]) {
   return  Magician.map(item=> `The Great ${item} `);
};
 //Making copy of magicians arry by slice methode.
 let copymagicians = magicians.slice();

 //MOdify the orignal Arry adding "The Great" before each name.
 let copy_make_great1=make_great1(copymagicians);

 //Orignal Arry,
 magician_show(magicians);

 // Modified Arry.
 magician_show(copy_make_great1);
 
 
 



