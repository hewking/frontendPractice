function matchPassword(value) {
  // 正则
  var reg =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[`~!@#$%^&*()_+<>?:"{},./\\;'[\]])[A-Za-z\d`~!@#$%^&*()_+<>?:"{},./\\;'[\]]{8,}$/;
  // 可用 test 方法验证
  return reg.test(value);
}

(function () {
  console.log(matchPassword("sd!@$7"));
  console.log(matchPassword("sd!@$7ss "));
  console.log(matchPassword("sd!@$7ss"));
  console.log(matchPassword("sd!@$7ss中"));
  console.log(matchPassword("asd1aaa11ff."));
  console.log(matchPassword("asd1aaa11ff_"));
  console.log(matchPassword("asd1aaa11ff+"));
})();
