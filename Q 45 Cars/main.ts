
//Creat a function to creat a car with additional options.
function cars(manufacturer, model , ...options) {
 // Creat object with manufacturer and modeel.
 let car= {
    manufacturer: manufacturer,
    model: model,

 };
 // Add additional options to the car object. 
 options.forEach(option=> {
    let [key , value]= option.split(":");
    car[key.trim()]= value.trim();

 });
 return car;
};

// Call the function to create a car.
let my_car= cars("Toyota","corrolla", "colour:Silver", "sunroof: true", "year : 2022");
console.log(my_car);
