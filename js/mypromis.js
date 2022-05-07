function MyPromise(executor){
    this.status = 'pending';
    this.value = undefined;
    this.reason = undefined;

    this.resolve = (value) =>{
      console.log('resolve called status', this.status);
        if(this.status === 'pending') {
            this.status = 'resolved';
            this.value = value;
            console.log('resolve called value', value);
        }
    }

    this.reject = (reason) => {
        if(this.status === 'pending') {
          this.reason = 'rejected';
        }
    }

    this.then = function(onResolved, onRejected) {
        onResolved = typeof onResolved === 'function' ? onResolved : v => v;
        onRejected = typeof onRejected === 'function' ? onRejected : v => v;
        console.log('then called', this.value);
        if (this.status === 'resolved') {
            return onResolved(this.value);
        } else {
            return onRejected(this.reason);
        }

    }

    // resolve.bind(this);
    executor.call(this, this.resolve, this.reject);

}

let promise = new MyPromise((resolve, reject) => {
  console.log('Promise created');
    setTimeout(() => {
        resolve('resolved value haha');
        console.log('resolved');
    }, 1000);
}).then(value => {
  console.log(value);
});