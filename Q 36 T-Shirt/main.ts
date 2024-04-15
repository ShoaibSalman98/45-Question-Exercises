function make_shirt(size: string, message: string) {
     console.log(`My shirt size is ${size} and ${message} print on it`);  
    
}
make_shirt("Large", "Wonderfull Day");




function make_shirt1(size: string, message: string) {
    
    return `My shirt size is ${size} and ${message} print on it`

}
let myshirt=make_shirt1("Large ", "Wonderfull Day");
console.log(myshirt);



function make_shirt2(size: string, message: string) {
    return size + message 
    
}
let myshirts=make_shirt2("Large ", "Wonderfull Day");
console.log(myshirts);