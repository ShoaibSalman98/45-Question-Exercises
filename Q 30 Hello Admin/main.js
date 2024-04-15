var UserName = ["Zahid", "Shoaib", "Admin", "FirstUser"];
UserName.forEach(function (User) {
    if (User == "Admin") {
        console.log("Hello ".concat(User, ", would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(User, " thank you for logging in again "));
    }
});
