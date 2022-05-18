

/**
 * leetcode 70 , n 层楼梯，每一次可以爬1层，和2阶
 * @param {https://segmentfault.com/a/1190000040464134} n 
 * @returns 
 */
function climbStairs(n){
  if (n == 1) {
    return 1;
  }

  if (n == 2) {
    return 2;
  }

  return climbStairs(n - 2) + climbStairs(n - 1);

}

/**
 * 非递归写法
 * @param {} n 
 * @returns 
 */
function climbStairs2(n){
  if (n <= 2) return n;
  let result, n1 = 1, n2 = 2;
  for(let i = 3; i <= n ; i ++) {
    result = n1 + n2;
    n1  = n2;
    n2 = result;
  }

  return result;

}

(function(){
  let num1 = climbStairs(2);
  let num2 = climbStairs(6);

  console.log('num1 ',num1, "num2 ", num2);

  let num3 = climbStairs2(6);

  console.log("num3: ", num3);

})()
