const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;

function analyzeComplexity(code) {
  let complexity = 1;
  
  // 解析代码生成AST
  const ast = parser.parse(code);
  
  // 遍历AST
  traverse(ast, {
    // 检测if语句
    IfStatement() {
      complexity++;
    },
    // 检测循环
    ForStatement() {
      complexity++;
    },
    WhileStatement() {
      complexity++;
    },
    // 检测switch语句
    SwitchCase() {
      complexity++;
    },
    // 检测逻辑运算符
    LogicalExpression() {
      complexity++;
    },
    // 检测三元运算符
    ConditionalExpression() {
      complexity++;
    }
  });
  
  return complexity;
}

module.exports = analyzeComplexity;
