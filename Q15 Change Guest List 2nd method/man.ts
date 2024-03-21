let guests: string[] = ["Amir", "Shoaib", "Junaid", "Jahanzaib"];

let notCome = guests[0];
console.log(notCome, "will not join us");

guests.splice(0,1, "Rashid");

guests.forEach(item => console.log(`Hello ${item}, Will you join me for dinner?`));