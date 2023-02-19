# ts-2023

2023 年如何配置 typescript

## 步骤

1. 配置 package.json
   1. npm init -y
   2. set type to "module"
2. 安装 typescript
   1. npm install -D typescript
   2. npm i -D @types/node

## tsconfig 配置

1. module 配置 `NodeNext`

## 导入代码

index 导入 helper 使用了 nodenext 就不能使用 `import { hello } from "./helper";` 这种方式了，需要使用 `import { hello } from "./helper.js";`

```js
import { hello } from "./helper.js";
import { yo } from "./helper.cjs";
```

## 参考

1. [How to Setup Node.js with TypeScript in 2023](https://www.youtube.com/watch?v=H91aqUHn8sE)
