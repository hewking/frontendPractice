
export firstname = 'zhangsan'

export function getAge(argument) {
	return 18
}

// 输出变量可以用as 作为关键字重命名
export {
	x1 as stream1,
	x2 as stream2,
	x2 as steramLatest
}