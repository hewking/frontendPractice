const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;

function parseTypeScriptImports(code) {
  const ast = parser.parse(code, {
    sourceType: "module",
    plugins: ["typescript", "jsx"],
  });
  const t = require("@babel/types");

  function extractImportInfo(specifier, source) {
    if (t.isImportSpecifier(specifier)) {
      // Case 1 and 2: Named imports
      return {
        name: specifier.imported.name,
        alias: specifier.local.name,
        source: source,
      };
    } else if (t.isImportDefaultSpecifier(specifier)) {
      // Case 3: Default import
      return {
        name: specifier.local.name,
        alias: null,
        source: source,
      };
    }
    return null;
  }

  const imports = [];
  const usageCounts = {};
  const aliasMap = {};

  traverse(ast, {
    ImportDeclaration(path) {
      const source = path.node.source.value;

      path.node.specifiers.forEach((specifier) => {
        const importInfo = extractImportInfo(specifier, source);
        if (importInfo) {
          imports.push(importInfo);
          if (importInfo.alias && importInfo.alias !== importInfo.name) {
            aliasMap[importInfo.alias] = importInfo.name;
          }
        }
      });
    },

    JSXIdentifier(path) {
      const name = path.node.name;
      const originalName = aliasMap[name] || name;
      usageCounts[originalName] = (usageCounts[originalName] || 0) + 1;
    },

    MemberExpression(path) {
      if (t.isIdentifier(path.node.object)) {
        const name = path.node.object.name;
        const originalName = aliasMap[name] || name;
        usageCounts[originalName] = (usageCounts[originalName] || 0) + 1;
      }
    },
  });

  // Combine import info with usage counts
  const result = imports.map((imp) => ({
    ...imp,
    usageCount: usageCounts[imp.name] || 0,
  }));

  return result;
}

// Example usage
const exampleCode = `
import { Text } from "react-native";
import { Button as RNButton } from "react-native";
import Toast from "@nirvana/ui-toast";
import Image from "react-native";

function MyComponent() {
  return (
    <View>
      <Text>hahah</Text>
      <RNButton text="xx" onPress={() => {}} />
      <Text>Another text</Text>
      <Image src={{ uri: 'xxx'}}/>
    </View>
  );
}

Toast.success("");
`;

const result = parseTypeScriptImports(exampleCode);
console.log(result);
// Output will now include usageCount for each import

module.exports = parseTypeScriptImports;
