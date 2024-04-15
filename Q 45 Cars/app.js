var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function carDetail(manufacturer, model) {
    var additionalinfo = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        additionalinfo[_i - 2] = arguments[_i];
    }
    var cars = __assign({ manufacturer: manufacturer, model: model }, Object.fromEntries(additionalinfo));
    return cars;
}
;
var mycar = carDetail("Honda", "Civic", ["colour", "grey"], ["year", "2024"], ["sunroof", "false"]);
console.log(mycar);
