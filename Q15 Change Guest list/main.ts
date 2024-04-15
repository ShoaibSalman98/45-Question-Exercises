


//First Mehtode.
let guests: string[] = ["Amir", "Shoaib", "Junaid", "Jahanzaib"];
let notAttend : string = "Junaid";
console.log(notAttend +" "+ "Can not join the party");
let newGuest : string = "Nadeem";
guests [guests.indexOf(notAttend)] = newGuest;
console.log(guests);
guests.map((item) => console.log(`Dear ${item}, come to join us for a dinner`));



//2nd Methode.
let guest: string[] = ["Amir", "Shoaib", "Junaid", "Jahanzaib"];

let notCome = guest[0];
console.log(notCome, "will not join us");

guest.splice(0,1, "Rashid");

guest.forEach(item => console.log(`Hello ${item}, Will you join me for dinner?`));

// 3rd Methode.
let Guest:string[] = ["Amir", "Shoaib", "Junaid", "Jahanzaib"];
let UnableAttend =Guest.splice(0,1)[0];
console.log(`${UnableAttend} Unable to attend us `);
Guest.push ("Rubab Khan");
console.log(Guest);
Guest.forEach(item => {
    console.log(`Hello ${item}, You are invited for a dinner?`);
});

