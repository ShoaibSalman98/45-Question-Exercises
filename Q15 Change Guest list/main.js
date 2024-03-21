var guests = ["Amir", "Shoaib", "Junaid", "Jahanzaib"];
var notAttend = "Junaid";
console.log(notAttend + " " + "Can not join the party");
var newGuest = "Nadeem";
guests[guests.indexOf(notAttend)] = newGuest;
console.log(guests);
guests.map(function (item) { return console.log("Dear ".concat(item, ", come to join us for a dinner")); });
