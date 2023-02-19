import fs from "fs";
import { hello } from "./helper.js";
import { yo } from "./helper.cjs";

declare let foo: number;

declare global {
}

foo = 12;
bar = 22;

console.log(hello);
console.log(yo);

Math.floor
