
/**
 * sum(1)(2) == 3; // 1 + 2
  sum(1)(2)(3) == 6; // 1 + 2 + 3
  sum(5)(-1)(2) == 6
  sum(6)(-1)(-2)(-3) == 0
  sum(0)(1)(2)(3)(4)(5) == 15
 * @param {*} a 
 * @returns 
 */
function sum(a) {
  let currentSum = a;
  function f(b){
    currentSum += b;
    return f;
  }
  f.toString = function(){
    return currentSum;
  }
  return f;
}

// console.log(sum(1)(2));

/**
 * 编写一个函数 printNumbers(from, to)，使其每秒输出一个数字，数字从 from 开始，到 to 结束。

使用以下两种方法来实现。

使用 setInterval。
使用嵌套的 setTimeout。
 * @param {*} from 
 * @param {*} to 
 */
function printNumbers(from, to){
  let timerId = setInterval(() => {
    if (from <= to) {
      console.log(from);
      from++;
    } else {
      clearInterval(timerId);
    }
  }, 1000);
}

function printNumbers2(from, to){
  let timerId = setTimeout(() => {
    if (from <= to) {
      console.log(from);
      from++;
      printNumbers2(from, to);
    }
  }, 1000);
}

// printNumbers(2,5);
// printNumbers2(2,5);

/**
 * function work(a, b) {
  alert( a + b ); // work 是一个任意的函数或方法
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
  alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}
 */

function spy(func){
  spy.calls = [];
  return function(...args){
    spy.calls.push(args);
    return func.apply(this, args);
  }
}

/**
 * function f(x) {
  alert(x);
}

// create wrappers
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test"); // 在 1000ms 后显示 "test"
f1500("test"); // 在 1500ms 后显示 "test"
 */

// function delay(func, ms) {
//   return function(...args){
//     setTimeout(() => {
//       func.apply(this, args);
//     }, ms);
//   }
// }


function delay(f, ms) {

  // return function() {
  //   setTimeout(() => f.apply(this, arguments), ms);
  // };
  return function(...args){
    setTimeout(f, ms, ...args);
  };

}

function time(f){
  let start = Date.now();
  return function(...args){
    let end = Date.now();
    console.log(end - start);
    start = end;
    return f.apply(this, args);
  };
}

let log = time(console.log);

let f1000 = delay(log, 1000);

f1000('test');

console.log('test2','test3');