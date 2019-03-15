
// 模块之间的继承上面代码中的export *，表示再输出circle模块的所有属性和方法。注意，
// 命令会忽略circle模块的default方法。然后，上面代码又输出了自定义的e变量和默认方法。
export * from 'circle'
export var a = 2.71
export default function exp(argument) {
	return Math.exp(argument)
}

export {area as circleArea} from 'circle'