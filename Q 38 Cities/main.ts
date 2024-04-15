function describe_city(city:string, countary:string) {
    console.log(`${city} is in ${countary}`);   
}
describe_city("Karaci", "Pakistan");

function describe_city1(city:string, countary:string="Pakistan") {
    console.log(`${city} in ${countary}`);      
}
describe_city1("KARACHI");
describe_city1("LAHORE");
describe_city1("LONDON not");

function describe_city2(city:string, countary:string="Pakistan") {
    return `${city} is in ${countary}`   
}
let mycity= describe_city2("KARACHI");
let mycity1=describe_city2("LAHORE");
let mycity2=describe_city2("LAHORE");
let mycity3=describe_city2("LONDON NOT");
console.log(mycity);
console.log(mycity1);
console.log(mycity2);
console.log(mycity3);

