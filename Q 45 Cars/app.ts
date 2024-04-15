
function carDetail(manufacturer: string, model: string , ...additionalinfo){
    let cars = {manufacturer, model, ...Object.fromEntries(additionalinfo)};
return cars;
};

//call function and store in a veriable.
let mycar = carDetail("Honda","Civic",["colour","Grey"],["year","2024"],["sunroof","false"]);

// print veriable.
console.log(mycar);
