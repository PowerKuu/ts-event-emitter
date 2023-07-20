type EmittedEvents = Record<string | symbol, (...args: any) => any>

export default class TsEventEmitter<Events extends EmittedEvents> {
    private events: {
        [K in keyof Events]?: Events[K][]
    } = {}

    emit<E extends keyof Events>(event: E, ...args: Parameters<Events[E]>[]) {
        const callbacks = this.events[event] || []

        callbacks.forEach(cb => cb(...args))
    }
    
    on<E extends keyof Events>(event: E, cb: Events[E]) {
        if (!this.events[event]) this.events[event] = []

        this.events[event].push(cb)
    }
}