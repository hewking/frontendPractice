
const getLastPath = (path) => path.split("?").shift().split("/").pop();

console.log(getLastPath("www.baidu.com"));
console.log(getLastPath("www.baidu.com?param=1"));
console.log(getLastPath("www.baidu.com/c3?param=1"));
console.log(getLastPath("www.baidu.com/c2/c3?param=1"));
console.log(getLastPath("www.baidu.com/c2/c3?param=1&param2=http://www.bing.com?param=2"));