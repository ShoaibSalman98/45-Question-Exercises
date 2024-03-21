let guests: string[] = ["Amir", "Shoaib", "Junaid", "Jahanzaib"];
let notAttend : string = "Junaid";
console.log(notAttend +" "+ "Can not join the party");
let newGuest : string = "Nadeem";
guests [guests.indexOf(notAttend)] = newGuest;
console.log(guests);
guests.map((item) => console.log(`Dear ${item}, come to join us for a dinner`));