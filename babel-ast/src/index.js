const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generate = require('@babel/generator').default;
const t = require('@babel/types');

// Sample code to transform
const code = `
function greet(name) {
  console.log("Hello, " + name + "!");
}
`;

// Parse the code into an AST
const ast = parser.parse(code);

// Transform the AST
// 这段代码演示了使用Babel解析、转换和生成JavaScript代码的过程。

// 1. 解析：
// 使用@babel/parser将输入的代码解析成抽象语法树（AST）。
// AST以树状结构表示代码的结构。

// 2. 转换：
// 使用@babel/traverse遍历并修改AST。
// 在这个例子中，我们查找带有'+'运算符的二元表达式。
// 这些表达式被替换为对String.prototype.concat方法的调用。

// 3. 代码生成：
// 转换后，使用@babel/generator将修改过的AST转换回代码。
// 输出选项确保生成的代码格式与输入相似。

// 这个转换将字符串连接从使用'+'运算符
// 改为使用String.prototype.concat方法，两者在功能上是等价的。


traverse(ast, {
  BinaryExpression(path) {
    if (path.node.operator === '+') {
      path.replaceWith(
        t.callExpression(
          t.memberExpression(t.identifier('String'), t.identifier('prototype.concat')),
          [path.node.left, path.node.right]
        )
      );
    }
  }
});

// Generate code from the transformed AST
const output = generate(ast, {
  retainLines: true,
  compact: false,
  concise: false,
}, code);

console.log('Transformed code:');
console.log(output.code);
