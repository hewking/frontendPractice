//接口
interface Person {
    name : string,
    age : number
}

function printPerson(person : Person) {
    console.log(person.name)
}

// 接口可选属性
interface SquareConfig {
    color? : string
    width? : number
}

function createSqurare(config : SquareConfig) : {color : string,area : number} {
    let newSqure = {color:'white',area : 100}
    if (config.color) {
        newSqure.color = config.color
    }
    return newSqure
}

let mysqure = createSqurare({color:'black'})

// 只读属性
interface Point {
    readonly x : number
    readonly y : number
}

// ReadonlyArray<T> 类型
let a : Array<number> = [1,2,2]
// ro 不能修改元素值
let ro : ReadonlyArray<number> = a
// 不能赋值给普通数组 除非端元
a = ro as number[]
a = <number[]> ro

// 函数类型
interface SearchFunc {
    (source :string, substring : string) : boolean
}

let mySearch : SearchFunc
mySearch = function(source:string,substring : string) {
    let res = source.search(substring)
    return res > -1
}
