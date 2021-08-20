// 启用严格模式
'use strict'

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function () {
    // 切换类选择器
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    if (className == "light-theme") {
        this.textContent = "Dark";
    } else {
        this.textContent = "Light";
    }

    console.log('current class name: ' + className);

});