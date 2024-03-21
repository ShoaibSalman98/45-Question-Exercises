var guests = ["Amir", "Shoaib", "Junaid", "Jahanzaib"];
// Guest not come.
var notCome = guests[0];
console.log(notCome, "will not join us");
//Replacing a guest.
guests.splice(0, 1, "Rashid");
//Inform all we found a bigger table and invite more frends.
guests.forEach(function (item) { return console.log("Hello ".concat(item, ", I arranged a bigger table so i invite more frends")); });
// Add one frend begging of the Array.
guests.unshift("Faisal");
// Add friend in the end of the Array.
guests.push("Nasir");
// Get a middle index  of the Array.
var middleIndex = Math.floor(guests.length / 2);
//Add a freind on a middle index of the Array.
guests.splice(middleIndex, 0, "Zahid");
console.log("UPdated List of Expected Guests");
guests.forEach(function (item) { return console.log("Assalm o Allikum ".concat(item, ", \"Please join us for a Dinner tonight")); });
