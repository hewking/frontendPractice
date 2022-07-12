
/**
 * 高级柯里化
 * @param {*} fn 
 * @returns 
 */
function curry(fn){

  return function curried(...args){
    if (args.length >= fn.length) {
      return fn.apply(this,args)
    } else {
      return function(...args2) {
        return curried.apply(this,args2.concat(args))
      }
    }
  }

}

/**
 * uncurry
 * @param {*} fn 
 * @returns 
 */
function uncurry(fn){
  return function(...args){
    return args.reduce((fn, arg) => fn(arg), fn);
  }
}

const sum = (a, b, c) => a + b + c;

const curriedSum = curry(sum);

console.log(curriedSum(1)(2)(3));

const uncurriedSum = uncurry(curriedSum);

console.log(uncurriedSum(1, 2, 3));

