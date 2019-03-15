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
// let user = {firstName:'tom',lastName:'chen'};
var user = new Student('tom', 'ai', 'chen');
// document.body.innerHTML = sayHello(user);
console.log(sayHello(user));
// 定义布尔值
var isDone = true;
//定义数字，都是浮点型
var dec = 6;
var hex = 0x00d;
var binary = 10;
var octal = 484;
// 定义字符串
var name = 'bbb';
name = "smith";
// 字符串模板
var sentence = "hell my name is " + name;
// 数组
// 两种方式定义
//1.
var list = [2, 3, 4];
var list2 = [3, 3, 3];
// 元组 Tuple
// 表示允许定义一个已知元素数量和类型的数组，个元素类型不必相同
var x;
x = ['tom', 19];
console.log(x[0] + " age : " + x[1]);
// 联合类型
x[3] = 'world';
console.log(x[5]);
