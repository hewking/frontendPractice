const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;

function analyzeComplexity(code) {
  let complexity = 1;
  
  // 定义权重
  const weights = {
    IfStatement: 2,
    ForStatement: 3,
    WhileStatement: 3,
    SwitchCase: 2,
    LogicalExpression: 1,
    ConditionalExpression: 2
  };
  
  // 解析代码生成AST
  const ast = parser.parse(code);
  
  // 遍历AST
  traverse(ast, {
    enter(path) {
      const type = path.node.type;
      if (weights.hasOwnProperty(type)) {
        complexity += weights[type];
      }
    }
  });
  
  return complexity;
}

module.exports = analyzeComplexity;
