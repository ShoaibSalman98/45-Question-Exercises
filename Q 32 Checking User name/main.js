"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let current_users = ["Zahid", "faisal", "Rashid", "Waqas", "Ashok"];
let New_users = ["Shoaib", "Faisal", "Rashid", "Amir", "Ashok"];
New_users.forEach(NewOne => {
    let myWork = current_users.some(CurrentNewOne => CurrentNewOne.toLocaleLowerCase() === NewOne.toLocaleLowerCase());
    if (myWork) {
        console.log(`${NewOne} User name already taken you will need to enter a new username`);
    }
    else {
        console.log(`${NewOne} username is available`);
    }
});
