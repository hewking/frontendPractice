// let sym1 = Symbol(1)
// let obj = {
//     [sym1] : 'value'
// }
// console.log(obj[sym1])
var arr = [3, 4, 5];
for (var i in arr) {
    console.log(i + " ");
}
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var i = arr_1[_i];
    console.log(i + " ");
}
var pets = new Set(['dog', 'cat', 'pig']);
pets['hello'] = 'world';
for (var prop in pets) {
    console.log(prop);
}
for (var _a = 0, pets_1 = pets; _a < pets_1.length; _a++) {
    var v = pets_1[_a];
    console.log(v);
}
