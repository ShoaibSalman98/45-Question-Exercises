let UserName:String[]= ["Zahid","Shoaib","Admin","FirstUser"]

UserName.forEach(User => {
    if (User == "Admin") {
        console.log(`Hello ${User}, would you like to see a status report?`);
        
    } else {
        console.log(`Hello ${User} thank you for logging in again `);
        
    }
});