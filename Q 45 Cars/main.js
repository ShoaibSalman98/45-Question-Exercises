//Creat a function to creat a car with additional options.
function cars(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    // Creat object with manufacturer and modeel.
    var car = {
        manufacturer: manufacturer,
        model: model,
    };
    // Add additional options to the car object. 
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
;
// Call the function to create a car.
var my_car = cars("Toyota", "corrolla", "colour:Silver", "sunroof: true", "year : 2022");
console.log(my_car);
