class EventEmitter{

  constructor(){
    this.eventMap = {};
  }

  on(type, handler) {
    if (!handler instanceof Function) {
      throw new Error('Handler must be a function');
    }

    if (!this.eventMap[type]) {
      this.eventMap[type] = [];
    }
    this.eventMap[type].push(handler);
  }

  emit(type, ...args) {
    if (!this.eventMap[type]) {
      return;
    }

    this.eventMap[type].forEach(handler => handler(...args));
  }

  off(type, handler) {
    if (!this.eventMap[type]) {
      return;
    }

    if (!handler) {
      delete this.eventMap[type];
      return;
    }

    this.eventMap[type] = this.eventMap[type].filter(item => item !== handler);
  }

}

let emitter = new EventEmitter();

emitter.on('login', (user, pass) => {
  console.log(`${user} logged in with ${pass}`);
}
);

emitter.emit('login', 'admin', '123456');