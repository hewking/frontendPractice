/**
 * 求给定数组的最长公共前缀
 * ['aaafsd', 'aawwewer', 'aaddfff'] => 'aa'
 */

const maxCommonPrefix = (arr) => {
    if (!arr) {
        return '';
    }
    const targetStr = arr.reduce((pre, cur) => {
        return pre.length > cur.length ? cur : pre
    });
    let maxPrefix = '';
    let flag = true;
    for (let i = 1; i < targetStr.length; i++) {
        const str = targetStr.substring(0,i);
        flag = true;
        for (let j = 0 ; j < arr.length ; j ++) {
            if (arr[j].indexOf(str) === -1) {
                flag = false;
                break;
            }
        }
        if (flag) {
            maxPrefix = str;
        }

    }
    return maxPrefix;
}

const prefix = maxCommonPrefix(['aaafsd', 'aawwewer', 'aaddfff']);
console.log(prefix);