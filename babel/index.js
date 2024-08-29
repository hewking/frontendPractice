import * as types from "@babel/types";
import generator from "@babel/generator";

const log = (node) => {
  console.log(generator.default(node).code);
};

log(types.stringLiteral("Hello World")); // output: Hello World
