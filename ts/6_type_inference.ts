
// 类的比较
class Animal {
    feet : number
    constructor(numFeet : number){}
}

class Size {
    feet : number
    constructor(){}
}

let a : Animal
let b : Size

a = b
b = a

// 泛型的影响
class Empty<T> {
    // data : T 增加一个成员编译失败
}

let a1 : Empty<number>
let b1 : Empty<string>

a1 = b1

