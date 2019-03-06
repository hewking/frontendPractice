
// 判断一个字符是否由四个字节组成
function is32bit(ch) {
	return ch.codePointAt(0) > 0xffff;
}