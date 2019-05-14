function idendity(arg) {
    return arg;
}
function idendityGeneric(arg) {
    return arg;
}
function loggintIdentity(arg) {
    console.log(arg.length);
    return arg;
}
var myIdentity = idendity;
var myIdentity2 = idendity;
var myIdentity3 = idendity;
var myIdentity4 = idendityGeneric;
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var myGenericNubmer = new GenericNumber();
myGenericNubmer.zeroValue = 0;
myGenericNubmer.add = function (x, y) {
    return x + y;
};
var myGenericString = new GenericNumber();
myGenericString.zeroValue = '';
myGenericString.add = function (x, y) {
    return x + y;
};
console.log(myGenericString.add('hello', 'world'));
