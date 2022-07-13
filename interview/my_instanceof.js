/**
 * instanceof
 */
function myInstanceof(left, right){
  if (typeof left != "object" || typeof right != "function") {
    return new TypeError("参数类型错误!");
  }

  let protoType = Object.getPrototypeOf(left);
  while(protoType != null) {
    if (protoType === right.prototype) {
      return true;
    }
    protoType = protoType.__proto__;
  }
  return false;

}

console.log(myInstanceof(Object.create({}), Function));
console.log(myInstanceof(Object.create({}), Object));