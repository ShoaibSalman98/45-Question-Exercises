function city_countary(city:string, countary:string) {
    console.log(`"${city},${countary}"`);   
}
city_countary("Karaci" ,"Pakistan");

function city_countary1(city:string, countary:string="Pakistan") {
    console.log(`"${city},${countary}"`);       
}
city_countary1("Paris"," France");
city_countary1("Toranto", " Canada");
city_countary1("Melbourne"," Australia");

function describe_city2(city:string, countary:string) {
    return `"${city},${countary}"`   
}
console.log(describe_city2("Paris","France"));
console.log(describe_city2("Toranto","Canada"));
console.log(describe_city2("Melbourne","Australia"));

