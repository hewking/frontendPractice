//https://www.tslang.cn/docs/handbook/interfaces.html 官方文档
interface Person{
	firstName : string;
	lastName : string;
}

class Student {

	fullName : string;

	constructor(public firstName,public middleInitial,public lastName){
		this.fullName = firstName + middleInitial + lastName
	}

}

function sayHello(arg : Person) {
	return 'hello' + arg.firstName + " lastName : " + arg.lastName
}

// let user = {firstName:'tom',lastName:'chen'};
let user = new Student('tom','ai','chen')
// document.body.innerHTML = sayHello(user);
console.log(sayHello(user))

// 定义布尔值
let isDone : boolean = true;

//定义数字，都是浮点型
let dec : number = 6
let hex : number = 0x00d
let binary : number = 0b1010
let octal : number = 0o744

// 定义字符串
var name : string = 'bbb'
name = "smith"

// 字符串模板
let sentence : string = `hell my name is ${name}`

// 数组
// 两种方式定义
//1.
let list : number[] = [2,3,4]

let list2 : Array<number> = [3,3,3]

// 元组 Tuple
// 表示允许定义一个已知元素数量和类型的数组，个元素类型不必相同
let x : [string,number];
x = ['tom',19]

console.log(x[0] + " age : " + x[1])
// 联合类型
// x[3] = 'world'
// console.log(x[5])

// 枚举类型 enum
enum Color {Red,Green,Blue}

let c : Color = Color.Red

let colorName : string = Color[2]

// Any
//我们会想要为那些在编程阶段还不清楚类型的变量指定一个类型,这些值可能来自于动态的内容，
//比如来自用户输入或第三方代码库。 这种情况下，我们
//不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查。 那么我们可以使用 any类型来标记这些变量：

let notSure : any = 4
notSure = 'maybby a string instead' //ok
notSure = false // okay ,defninta a boolean

// Any 与 Object 区别
//在对现有代码进行改写的时候，any类型是十分有用的，它允许你在编译时可选择地包含或移除类型检查。
// 你可能认为 Object有相似的作用，就像它在其它语言中那样。 
//但是 Object类型的变量只是允许你给它赋任意值 - 但是却不能够在它上面调用任意的方法，即便它真的有这些方法：

notSure.toFixed()// ok

let prettySure : Object = 4
prettySure.toFixed() // error

let list : any[] = [1.true,'false']

list[1] = 100 //ok

//Void
// 某种程度上说void与any 正好相反，表示没有任何类型，当一个函数没有返回值时，通常会见到
// 返回值类型是Void
function warnUser (){
	console.log(('this is my warning message'))
}

// 没什么用只能赋值，undefined ,null
let unusable: void = warnUser()

// Null and Undefined
// typescript中，undefined ,null有各自的值undefined,null，和void相似，没多大用处
let u : Undefined = undefined;
let n : null = null;

// 默认情况下null，undefined是所有类型的子类型，可以把Null,undefined赋值给number ,string
// 当指定--strictNullChecks ，null和undefined只能赋值给void和他们各自，或者使用联合类型string|null"undefined

// Never
// 表示永远不存在值的类型，never总是那些会抛出异常挥着不会有返回值的函数表达式，或箭头函数的返回值类型
// 变量也可能是never，当他们永不为真的类型锁保护约束时候，什么意思?

// Object
// 表示非原始类型 也就是除number，string，boolean，symbol，null或undefined之外的类型。
declare function create(object | null) : void
create({prop : 0}) //ok
create(null) // ok

create(1) // error
create(false) // error

// 类型断言
//有时候你会遇到这样的情况，你会比TypeScript更了解某个值的详细信息。 通常这会发生在你清楚地知道一个实体具有比它现有类型更确切的类型。
// 对运行期没有影响，只在编译器起作用
let someValue : any = 'this is a string'
// 第一种
let strLen : number = (<string>someValue).length;
// 第二种
let strLen2 :number = (someValue as string).length
//然而，当你在TypeScript里使用JSX时，只有 as语法断言是被允许的。
