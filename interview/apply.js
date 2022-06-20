Object.prototype.apply = function(context, args) {
    if (context == null) {
        context = window;
    }
    context.fn = this;
    var result = context.fn(args);
    delete context.fn;
    return result;
}

Object.prototype.call = function(context, ...args) {
    if (context == null) {
        context = window;
    }
    context.fn = this;
    var result = context.fn(...args);
    delete context.fn;
    return result;
}

Object.prototype.bind = function(context, ...args) {
    var self = this;
    return function(...args2) {
        return self.apply(context, args.concat(args2));
    }
}