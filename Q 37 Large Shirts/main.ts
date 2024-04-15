function make_shirt(size: string ="Large", message: string= "I love TypeScript.") {
    console.log(`My shirt size is ${size} and ${message}`);  
   
}
make_shirt();
 make_shirt("Medium");
 make_shirt("XL" );



function make_shirt1(size: string ="Large", message: string= "I love TypeScript") {
   
   return `My shirt size is ${size} and ${message} print on it`

}
console.log(make_shirt1());
console.log(make_shirt1("Medium"));
console.log(make_shirt1("XL" ));



function make_shirt2(message:string, size:string="Large ") {
   return size + message 
   
}
let myfunc= make_shirt2("I love TypeScript");
console.log(myfunc);
