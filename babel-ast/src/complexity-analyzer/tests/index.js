const analyzeComplexity = require('../complexity-analyzer');

const code = `
function example(x, y) {
  if (x > 0) {
    for (let i = 0; i < y; i++) {
      console.log(i);
    }
  } else {
    return x && y ? x : y;
  }
}
`;

const complexity = analyzeComplexity(code);
console.log(`代码复杂度: ${complexity}`);