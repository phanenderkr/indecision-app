"use strict";

//arguments no longer bound

var add = function add(a, b) {
    return a + b;
};

//this keyword--- no longer bound
// const user = {
//     name: "Phani",
//     cities: ["Hyd", "Nyc", "VA"],
//     printPlacesLived() {
//         this.cities.forEach((city)=> {
//             console.log(`${this.name} lived in ${city}`)
//         });
//     }
// };
//
// user.printPlacesLived();

// challenge
var multiplier = {
    numbers: [1, 2, 3, 4, 5, 5],
    multiplyBy: 3,
    multiply: function multiply() {
        var _this = this;

        return this.numbers.map(function (number) {
            return number * _this.multiplyBy;
        });
    }
};

console.log(multiplier.multiply());
//# sourceMappingURL=es6-arrow-functions-2.js.map