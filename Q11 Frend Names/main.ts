let friend:string []= ["Amir","Faisal","Junaid","Shoaib"];

// For Each Methode
friend.forEach (friendName => console.log(friendName));


// // for loop methode
for (let friendName of friend) {
console.log(friend);
};

// // index Methode
console.log(friend[0]);
console.log(friend[1]);
console.log(friend[2]);
console.log(friend[3]);


for (let i = 3; i < friend.length; i++) {
    let element = friend[i];
    console.log(friend);
}

// for Methode
let friends = ["Amir","Alina","Junaid","Shoaib"];
for (let i = 0 ; i < friends.length; i++){
    console.log(friends[i]);
}