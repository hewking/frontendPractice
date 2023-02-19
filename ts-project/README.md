# README

```js
# 创建项目目录
mkdir my-project
cd my-project

# 创建源码文件
mkdir src
touch src/main.ts src/main.test.ts src/cli.ts

# 创建package.json
yarn init

# 安装TypeScript, linter,  Jest
yarn add -D typescript @types/node ts-node
yarn add -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
yarn add -D jest ts-jest @types/jest

# 获取.gitignore
wget https://raw.githubusercontent.com/metachris/typescript-boilerplate/master/.gitignore

# 获取tsconfig.json
// mac 上wget 替换为 curl -O 进行下载
wget https://raw.githubusercontent.com/metachris/typescript-boilerplate/master/tsconfig.json

# 也可以自己生成一个tsconfig.json
tsc --init

# 获取.eslintrc.js
wget https://raw.githubusercontent.com/metachris/typescript-boilerplate/master/.eslintrc.js

# 获取jest.config.json, 可提供给ts-jest在不需要单独对typescript编译的情况下做测试
wget https://raw.githubusercontent.com/metachris/typescript-boilerplate/master/jest.config.js

# 初始化git并提交
git init
git add .
git commit -am "initial commit"
```

## esbuild

esbuild 是一个执行贼快的 JavaScript 打包工具，它主打性能这块，也可用于编译 TypeScript 代码， 为不同运行环境 (浏览器 / Node) 进行打包。esbuild 现在还比较年轻而且还在积极开发中，可以到 esbuild on GitHub 详细了解。

为什么要用 esbuild 而不直接用 tsc？是因为 esbuild 不能很好的为浏览器环境做打包 (所以常借助额外的打包工具，例如 webpack,parcel,rollup)，而且 tsc 特别慢。

安装 esbuild:

```s
yarn add -D esbuild
```

Node.js 环境打包
除了 tsc，还可以使用 esbuild 为目标环境为 Node.js 做打包，例如：

## 打包

yarn esbuild src/cli.ts --bundle --platform=node --outfile=dist/esbuild/cli.js

## 打包&minify&sourcemap

yarn esbuild src/cli.ts --bundle --platform=node --minify --sourcemap=external --outfile=dist/esbuild/cli.js

## 执行&输出

node dist/esbuild/cli.js

## 参考

1. [2021 年如何从零创建一个 TypeScript 项目](https://wangwl.net/static/pages/starting_ts_project.html)
2. [typescript-boilerplate](https://github.com/metachris/typescript-boilerplate)
