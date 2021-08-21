// 启用严格模式
'use strict'

const switcher = document.querySelector('.btn');

function toogleTheme() {
    // 切换类选择器
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    if (className == "light-theme") {
        // this 表示调用这个函数的对象, addEventListener 中， 函数this 指向
        // 出发事件的元素
        this.textContent = "Dark";
    } else {
        this.textContent = "Light";
    }

    console.log('current class name: ' + className);

}

switcher.addEventListener('click', toogleTheme);