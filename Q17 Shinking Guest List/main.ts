
let guestList: string[]= ["Amir","Shoaib","Shafqat","Jhanzaib","Junaid","Nasir"];
console.log(guestList);

console.log(" Sorry due to the non arrangment of bigger table  I can only invite two perosns for a dinner \n")

 
// Remove three guest from the arry via While Methode.
    // while (guestList.length > 2) {
    //     let removed = guestList.pop();
    //     if(removed)
    //         console.log(`Sorry ${removed} Due to some of my personl resons tonights dinner programe is cancilled`)
    //     };
    //    console.log(guestList);

    // Remove guets using pop one by one.
    let friend1 = guestList.pop();
    console.log(`Sorry Mr ${friend1} You are not invited for dinner`)

    let friend2 = guestList.pop();
    console.log(`Sorry Mr ${friend2} You are not invited for dinner`)

    let friend3 = guestList.pop();
    console.log(`Sorry Mr ${friend3} You are not invited for dinner`)

    let friend4 = guestList.pop();
    console.log(`Sorry Mr ${friend4} You are not invited for dinner\n`)
       // Invite remaing list of arry guets.
       guestList.forEach(item=> {
        console.log(`Hello Mr ${item} you are still invited for a dinner`);
       });
       //Remove remaining two guest for the arry via splice Methode
    // guestList.splice(0, guestList.length);

       //Remove remaining two guest for the arry via pop  Methode.
       guestList.pop();
       guestList.pop();

       // Print updated empty erry list.
       console.log("Updated list of" ,guestList);