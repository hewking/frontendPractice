

function makeIterator(array = []) {
    let nextID= 0
    return {
        next : function(){
            return nextID < array.length ? {value : array[nextID++],done : true}
            : {value : undefined,done:false}
        }
    }
}

let it = makeIterator([1,2])

console.log(it.next())
console.log(it.next())

let arr = ['1','2','3','4']
let it2 = arr[Symbol.iterator]()

console.log(it2.next())
console.log(it2.next())