function throttle(func, ms) {
    let isThrottled = false;
    let savedThis, savedArgs;

    function wrapper(){
        if (isThrottled) {
            savedArgs = arguments;
            savedThis = this;
            return;
        }

        isThrottled = true;
        
        func.apply(this, arguments);

        setTimeout(() => { 
            isThrottled = false;
            if (savedThis) {
                wrapper.apply(savedThis, savedArgs);
                savedArgs = savedThis = null;
            }        
        }, ms);

    }
    return wrapper;
}