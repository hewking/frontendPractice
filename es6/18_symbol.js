
let s1 = Symbol('foo1')

console.log(s1.toString())

const obj = {
    toString(){
        return 'abc'
    }
}

const sym = Symbol(obj)

console.log(sym.toString())

// symbol 作为对象属性值
let obj2 = {}
let s2 = Symbol()
obj2[s2] = 'hello'
obj2 = {
    [s2] : 'world'
}

Object.defineProperty(obj2,s2,{vale:'!'})

// 这样才会取值 symbol 否则直接写则是代表字符串的属性s2
obj2['s2']
