

function idendity(arg : any) : any {
    return arg
}

function idendityGeneric<T>(arg : T) : T {
    return arg
}

function loggintIdentity<T>(arg : T[]) : T[]{
    console.log(arg.length)
    return arg
}

let myIdentity : <T>(arg : T) => T = idendity

let myIdentity2 : <U>(arg : U) => U = idendity

let myIdentity3 : {<T>(arg : T) : T} = idendity

interface GenericIdentityFn<T> {
    (arg : T) : T;
}

let myIdentity4 : GenericIdentityFn<number> = idendityGeneric

class GenericNumber<T> {
    zeroValue : T;
    add : (x : T,y : T) => T;
}

let myGenericNubmer = new GenericNumber<number>()
myGenericNubmer.zeroValue = 0
myGenericNubmer.add = (x : number,y : number) => {
    return x + y
}
let myGenericString = new GenericNumber<string>()
myGenericString.zeroValue =''
myGenericString.add = (x,y) => {
    return x + y
}

console.log(myGenericString.add('hello','world'))

interface LengthWise {
    length : number
}

function loggingIdentity<T extends LengthWise>(arg : T) : T {
    console.log(arg.length)
    return arg;
}

loggingIdentity({length:10,value : 3})

// 泛型类里使用类类型
function create<T>(c : {new() : T}) : T{
    return new c()
}




