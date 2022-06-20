function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

function throttle(func, wait){
    var timeout;
    return function(){
        var context = this, args = arguments;
        if(!timeout){
            func.apply(context, args);
            timeout = setTimeout(function(){
                timeout = null;
            }, wait);
        }
    }
}