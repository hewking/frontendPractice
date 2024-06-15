// 拦截console.log

const _error = console.error;
console.error = (...args) => {
  _error.apply(console, args);

  console.info('在此处上报错误信息...');
};

// 其它代码打印错误
console.error('error message');