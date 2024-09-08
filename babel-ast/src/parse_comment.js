const parser = require("@babel/parser");

function hasBrickComponentComment(code) {
  // 解析代码生成 AST
  const ast = parser.parse(code, {
    sourceType: "module",
    plugins: ["jsx", "typescript"],
  });

  let foundBrickComponent = false;

  // 遍历 AST
  for (const node of ast.program.body) {
    // 检查是否是 export 语句
    if (
      node.type === "ExportNamedDeclaration" ||
      node.type === "ExportDefaultDeclaration"
    ) {
      // 检查该节点的前导注释
      const comments = node.leadingComments || [];
      for (const comment of comments) {
        // 检查是否是多行注释且包含 @BrickComponent
        if (
          comment.type === "CommentBlock" &&
          comment.value.includes("@BrickComponent")
        ) {
          foundBrickComponent = true;
          break;
        }
      }
    }
    if (foundBrickComponent) break;
  }

  return foundBrickComponent;
}

function hasBrickComponentCommentAnywhere(code) {
  // 解析代码生成 AST
  const ast = parser.parse(code, {
    sourceType: "module",
    plugins: ["jsx", "typescript"],
  });

  // 遍历 AST
  for (const node of ast.program.body) {
    // 检查节点的所有注释（包括前导注释和内部注释）
    const comments = [
      ...(node.leadingComments || []),
      ...(node.innerComments || []),
      ...(node.trailingComments || []),
    ];

    for (const comment of comments) {
      // 检查是否是多行注释且包含 @BrickComponent
      if (
        comment.type === "CommentBlock" &&
        comment.value.includes("@BrickComponent")
      ) {
        return true;
      }
    }
  }

  return false;
}

// 示例和测试
if (require.main === module) {
  // 示例 1: 包含 @BrickComponent 的有效代码
  const validCode1 = `
    /**
     * @BrickComponent
     */
    export const MyComponent = () => {
      return <div>Hello World</div>;
    };
  `;
  console.log("Example 1 result:", hasBrickComponentComment(validCode1)); // 预期输出: true

  // 示例 2: 包含 @BrickComponent 但不在 export 语句上方的代码
  const invalidCode = `
    /**
     * @BrickComponent
     */
    const MyComponent = () => {
      return <div>Hello World</div>;
    };
    export { MyComponent };
  `;
  console.log("Example 2 result:", hasBrickComponentComment(invalidCode)); // 预期输出: false

  // 示例 3: 不包含 @BrickComponent 的代码
  const validCode2 = `
    /**
     * Just a regular comment
     */
    export const MyComponent = () => {
      return <div>Hello World</div>;
    };
  `;
  console.log("Example 3 result:", hasBrickComponentComment(validCode2)); // 预期输出: false

  // 示例 4: 包含 @BrickComponent 的默认导出
  const validCode3 = `
    /**
     * @BrickComponent
     */
    export default function MyComponent() {
      return <div>Hello World</div>;
    }
  `;
  console.log("Example 4 result:", hasBrickComponentComment(validCode3)); // 预期输出: true

  // 新增示例，测试 hasBrickComponentCommentAnywhere 函数
  console.log("\nTesting hasBrickComponentCommentAnywhere function:");

  // 示例 5: @BrickComponent 注释不在 export 语句上方
  const code5 = `
    /**
     * @BrickComponent
     */
    const MyComponent = () => {
      return <div>Hello World</div>;
    };
    export { MyComponent };
  `;
  console.log("Example 5 result:", hasBrickComponentCommentAnywhere(code5)); // 预期输出: true

  // 示例 6: @BrickComponent 注释在函数内部
  const code6 = `
    export function MyComponent() {
      /**
       * @BrickComponent
       */
      return <div>Hello World</div>;
    }
  `;
  console.log("Example 6 result:", hasBrickComponentCommentAnywhere(code6)); // 预期输出: true

  // 示例 7: 不包含 @BrickComponent 的代码
  const code7 = `
    /**
     * Just a regular comment
     */
    export const MyComponent = () => {
      return <div>Hello World</div>;
    };
  `;
  console.log("Example 7 result:", hasBrickComponentCommentAnywhere(code7)); // 预期输出: false
}

module.exports = {
  hasBrickComponentComment,
  hasBrickComponentCommentAnywhere,
};
