/**
 * 打印一个页面中的所有标签类型
 */

function printTagsType(){
    let tags = [];
    let root = document.body;
    print(root, tags);
    console.log(tags);
}

function print(element, tags) {
    if (!element) return;
    if (!tags.includes(element.nodeName)) {
        // console.log("element: ", element);
        tags.push(element.nodeName);
    }
    let childs = element.childNodes
    for(let i = 0 ; i < childs.length; i ++) {
        print(childs[i], tags);
    }
}

printTagsType();