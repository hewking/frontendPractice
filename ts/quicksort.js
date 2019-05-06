/**
 *
 * @param arr 快速排序
 * 思路:
 * 1.分治的思想
 * 2.取一个值，一般是数组第一个值，作为比较数字
 * 比它大的排列数组在它右边，比它小的在它左边
 * 然后找到中间位置，
 * 在重复这个过程
 */
function quickSort(arr, l, r) {
    if (l > r) {
        return;
    }
    var index = partiction(arr, l, r);
    quickSort(arr, l, index - 1);
    quickSort(arr, index + 1, r);
}
function partiction(arr, l, r) {
    var k = arr[l];
    while (l < r) {
        while (l < r && arr[r] >= k) {
            r--;
        }
        arr[l] = arr[r];
        while (l < r && arr[l] <= k) {
            l++;
        }
        arr[r] = arr[l];
    }
    arr[l] = k;
    return l;
}
(function () {
    var arr = [2, 43, 1, 54, 32, 22];
    quickSort(arr, 0, arr.length - 1);
    console.log(arr);
})();
