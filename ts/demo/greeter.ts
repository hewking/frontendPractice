//https://www.tslang.cn/docs/handbook/interfaces.html 官方文档
interface Person {
  firstName: string;
  lastName: string;
}

class Student {
  fullName: string;

  constructor(public firstName, public middleInitial, public lastName) {
    this.fullName = firstName + middleInitial + lastName;
  }
}

function sayHello(arg: Person) {
  return "hello" + arg.firstName + " lastName : " + arg.lastName;
}

let user = { firstName: "tom", lastName: "user" };
let student = new Student("tom", "jane", "gaoxiao");
console.log(sayHello(user));
console.log(sayHello(student));

let isDone: boolean = false;
console.log("isDone : " + isDone);

// 十进制
let decLiteral: number = 6;
//十六进制
let hexLiteral: number = 0xf00d;
// 二进制
let binaryLiteral: number = 0b1010;
// 八进制
let octalLiteral: number = 0o744;

console.log(
  `8进制 ： ${decLiteral} 十六进制： ${hexLiteral} 二进制: ${binaryLiteral} 八进制：${octalLiteral}`
);

// 字符串
let name2: string = "bob";
console.log(`name :${name2}`);

//数组
let list: number[] = [3, 3, 3, 3];
let list2: Array<number> = [2, 2, 2, 2];

// 元祖
let tupleX: [string, number];
tupleX = ["hello", 10];

// 访问一个越界元素时候，会使用联合类型替代
// tupleX[2] = 'world' //字符串可以是 string | number类型 但这里会检测报错，所以最好不要越界赋值

// 枚举enum
enum Color {
  Red = 1,
  Green,
  Blue,
}
let c: Color = Color.Red;

// 接口
function printLabel(labelObj: { label: string }) {
  console.log(labelObj.label);
}

printLabel({ label: "haahah" });

let color;
let themeColor;
let defaultColor;

const realColor = color || themeColor || defaultColor;

printLabel(realColor);
