/**
 * 第一部分

Please implement a function simplePoller that does the following:

simplePoller function accepts two arguments: queryFn and callback
queryFn is a function that returns true or false
callback is a function that should be invoked when queryFn returns true
simplePoller should invoke queryFn periodically
When queryFn returns false, it waits for some time and invokes queryFn again until queryFn returns true
The waiting interval between queryFn calls increases by 1.5 times each time, starting from 1 second
When queryFn returns true, invokes callback and exit the function
For example:

1st time: wait for 1 second
2nd time: invoke queryFn and it returns false, wait for 1.5 second
3rd time: invoke queryFn and it returns false, wait for 2.25 second
4th time: invoke queryFn and it returns true, execute callback and exit
Make sure simplePoller passes the following test cases:

simplePoller should wait for 1 second before it invokes queryFn the first time
The waiting interval is 1.5 times of the previous one, except for the first (1 second)
simplePoller should be allowed to be invoked concurrently and invocations of the function won't interfere with each other
Note: You don't have to implement queryFn and callback in your solution. You can assume they are given. However your implementation of simplePoller should be able to take different implementation of queryFn and callback without problem and to achieve that you are encouraged to implement a few versions of queryFn and callback for testing purposes.

评分标准
请使用 Javascript (ES6+) 来编写代码完成以上测试题，但不能使用伪代码，提交的代码必须是可执行的代码。

 

请确保该代码充分体现了阁下对现代 JavaScript 语法、特性以及编码规范的熟练掌握，以及对于代码模块化设计、代码可读性的理解。

 

我们会通过以下评分标准来评估阁下的解答，请在提交之前按照该标准检查：

  正确完整地实现了测试题要求的业务逻辑 - 50%
  合理运用现代 Javascript 的特性 - 15% 
  合理的抽象和封装，最大化代码的可复用性 - 15%
  方法和变量命名清晰合理，并符合该语言的编码规范 - 10%
  代码格式和条理清晰，并包含合理的注释 - 10%
 */
/**
 * 简单轮训器
 * @param {*} queryFn is a function that returns true or false
 * @param {*} callback is a function that should be invoked when queryFn returns true
 */
function simplePoller(queryFn, callback) {
  if (typeof queryFn !== "function") {
    throw new Error("queryFn must be a function");
  }

  if (typeof callback !== "function") {
    throw new Error("callback must be a function");
  }

  let lastDelayTimeout = 0;
  function executor() {
    if (lastDelayTimeout > 0 && queryFn()) {
      callback();
    } else {
      lastDelayTimeout = lastDelayTimeout === 0 ? 1 : lastDelayTimeout * 1.5;
      setTimeout(executor, lastDelayTimeout * 1000);
    }
  }
  executor();
}
