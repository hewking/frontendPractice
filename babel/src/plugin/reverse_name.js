export default function (babel) {
    // 即@babel/types，用于生成AST节点
    const { types: t } = babel;
  
    return {
      name: "ast-transform", // not required
      visitor: {
        Identifier(path) {
          path.node.name = path.node.name.split("").reverse().join("");
        },
      },
    };
  }
  