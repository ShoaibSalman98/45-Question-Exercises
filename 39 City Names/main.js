function city_countary(city, countary) {
    console.log("\"".concat(city, ",").concat(countary, "\""));
}
city_countary("Karaci", "Pakistan");
function city_countary1(city, countary) {
    if (countary === void 0) { countary = "Pakistan"; }
    console.log("\"".concat(city, ",").concat(countary, "\""));
}
city_countary1("Paris", " France");
city_countary1("Toranto", " Canada");
city_countary1("Melbourne", " Australia");
function describe_city2(city, countary) {
    return "\"".concat(city, ",").concat(countary, "\"");
}
console.log(describe_city2("Paris", "France"));
console.log(describe_city2("Toranto", "Canada"));
console.log(describe_city2("Melbourne", "Australia"));
