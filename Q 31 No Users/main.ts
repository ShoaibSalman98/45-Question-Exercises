let UserName:String[]= ["Zahid","Shoaib","FirstUser","Admin"]

if (UserName.length > 0) {
    console.log(" \n We need to find some users! \n");
    
}

UserName.forEach(User => {
    if (User == "Admin") {
        console.log(`Hello ${User}, would you like to see a status report? \n`);
        
    } else {
        console.log(`Hello ${User} thank you for logging in again  `);
        
    }
});
UserName= [];
console.log("Empty Arry" ,UserName);
