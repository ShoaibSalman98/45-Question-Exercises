function describe_city(city, countary) {
    console.log("".concat(city, " is in ").concat(countary));
}
describe_city("Karaci", "Pakistan");
function describe_city1(city, countary) {
    if (countary === void 0) { countary = "Pakistan"; }
    console.log("".concat(city, " in ").concat(countary));
}
describe_city1("KARACHI");
describe_city1("LAHORE");
describe_city1("LONDON not");
function describe_city2(city, countary) {
    if (countary === void 0) { countary = "Pakistan"; }
    return "".concat(city, " is in ").concat(countary);
}
var mycity = describe_city2("KARACHI");
var mycity1 = describe_city2("LAHORE");
var mycity2 = describe_city2("LAHORE");
var mycity3 = describe_city2("LONDON NOT");
console.log(mycity);
console.log(mycity1);
console.log(mycity2);
console.log(mycity3);
