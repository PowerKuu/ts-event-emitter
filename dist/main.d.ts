export declare type EmittedEvents = Record<string | symbol, (...args: any) => any>;
export default class TsEventEmitter<Events extends EmittedEvents> {
    events: {
        [K in keyof Events]?: Events[K][];
    };
    emit<E extends keyof Events>(event: E, ...args: Parameters<Events[E]>[]): void;
    on<E extends keyof Events>(event: E, cb: Events[E]): void;
}
