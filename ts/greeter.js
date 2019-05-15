var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + middleInitial + lastName;
    }
    return Student;
}());
function sayHello(arg) {
    return 'hello' + arg.firstName + " lastName : " + arg.lastName;
}

console.log(sayHello({
    firstName:'cheng',
    lastName:'jianhao'
}))

var user = { firstName: 'tom', lastName: 'user' };
var student = new Student('tom', 'jane', 'gaoxiao');
console.log(sayHello(user));
console.log(sayHello(student));
var isDone = false;
console.log('isDone : ' + isDone);
// 十进制
var decLiteral = 6;
//十六进制
var hexLiteral = 0xf00d;
// 二进制
var binaryLiteral = 10;
// 八进制
var octalLiteral = 484;
console.log("8\u8FDB\u5236 \uFF1A " + decLiteral + " \u5341\u516D\u8FDB\u5236\uFF1A " + hexLiteral + " \u4E8C\u8FDB\u5236: " + binaryLiteral + " \u516B\u8FDB\u5236\uFF1A" + octalLiteral);
// 字符串
var name2 = 'bob';
console.log("name :" + name2);
//数组
var list = [3, 3, 3, 3];
var list2 = [2, 2, 2, 2];
// 元祖
var tupleX;
tupleX = ['hello', 10];
// 访问一个越界元素时候，会使用联合类型替代
// tupleX[2] = 'world' //字符串可以是 string | number类型 但这里会检测报错，所以最好不要越界赋值
// 枚举enum
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var c = Color.Red;
// 接口
function printLabel(labelObj) {
    console.log(labelObj.label);
}
printLabel({ label: 'haahah' });
