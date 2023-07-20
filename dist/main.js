export default class TsEventEmitter {
    constructor() {
        this.events = {};
    }
    emit(event, ...args) {
        const callbacks = this.events[event] || [];
        callbacks.forEach(cb => cb(...args));
    }
    on(event, cb) {
        if (!this.events[event])
            this.events[event] = [];
        this.events[event].push(cb);
    }
}
