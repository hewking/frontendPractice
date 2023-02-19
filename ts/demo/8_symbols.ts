
// let sym1 = Symbol(1)

// let obj = {
//     [sym1] : 'value'
// }

// console.log(obj[sym1])

let arr = [3,4,5]

for (let i in arr) {
    console.log(i + " ")
}

for (let i of arr) {
    console.log(i + " ")
}

let pets = new Set(['dog','cat','pig'])
pets['hello'] = 'world'

for (let prop in pets) {
    console.log(prop)
}

for (let v of pets) {
    console.log(v)
}