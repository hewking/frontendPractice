import { parse } from "@babel/parser";
import traverse from "@babel/traverse";
import generate from "@babel/generator";

// Sample code to analyze
const code = `
function greet(name) {
  console.log('Hello, ' + name + '!');
}

greet('World');
`;

// Parse the code into an AST
const ast = parse(code, {
  sourceType: "module",
});

// Traverse the AST
traverse(ast, {
  // Visit function declarations
  FunctionDeclaration(path) {
    console.log("Found function:", path.node.id.name);

    // Visit the function body
    path.traverse({
      // Find console.log calls
      CallExpression(path) {
        if (
          path.node.callee.object &&
          path.node.callee.object.name === "console" &&
          path.node.callee.property.name === "log"
        ) {
          console.log("Found console.log in function");
        }
      },
    });
  },

  // Visit variable declarations
  VariableDeclaration(path) {
    console.log("Found variable declaration");
    path.node.declarations.forEach((decl) => {
      console.log("Variable name:", decl.id.name);
    });
  },
});

// Generate code from the AST
const output = generate(ast, {}, code);
console.log("Generated code:", output.code);
