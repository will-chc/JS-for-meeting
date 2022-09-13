// 发布订阅者模式

class MyEventEmitter {
    constructor() {
        // 初始化
        this.events = {}
    }
    // 订阅 绑定
    // eventName 事件名 cal 回调
    on(eventName, cal) {
        // 不存在事件，就初始化
        if (!this.events[eventName]) {
            this.events[eventName] = []
        }
        // 存在就收集订阅
        this.events[eventName].push(cal);

        //返回自身，方便链式调用
        return this;
    }

    // 发布 ，触发
    // eventName 事件名 args参数（回调的参数）
    emit(eventName, ...args) {
        if (!this.events[eventName]) {
            // 不存在改订阅。 返回
            return this;
        }
        const arg = Array.from(args);
        this.events[eventName].forEach(fn => {
            fn.call(this, ...arg);
        });
        return this;
    }

    // 移除订阅
    // eventName 事件名 fn订阅者
    remove(eventName, fn) {
        // 没有该事件 返回
        if (!this.events[eventName]) {
            return this;
        }
        // 不传入订阅者，移除所有订阅者
        if (!fn) {
            this.events[eventName] = null;
            return this;
        }
        const index = this.events[eventName].indexOf(fn);
        this.events[eventName].splice(index, 1);

    }
    // 单次订阅事件，执行完后，移除订阅
    once(eventName, fn) {
        const only = () => {
            fn.call(this, arguments)
        }
    }
    //单次绑定事件，执行完后解绑
    once(eventName, callback) {
        const only  = (...rest)=>{
            console.log(rest);
            callback.apply(this,rest);
            this.remove(eventName, only);
        };
        this.on(eventName, only);
        return this;
    }
}
const eventEmitter = new MyEventEmitter();

// 订阅
eventEmitter.on('sayHi', (name, b) => {
    console.log("hi " + name + b);
})
const age = (age) => {
    console.log('good ' + age);
}
eventEmitter.on('sayGood', age);

eventEmitter.on('sayHi', () => {
    console.log('hualihaudjf');
})

//取消订阅
// eventEmitter.remove('sayHi',age);
eventEmitter.remove('sayHi');
// 一次订阅
eventEmitter.once('hello',(a,b)=>{
    console.log('@@@@',a,b);
});
eventEmitter.emit('hello','111','11122');
eventEmitter.emit('hello','333')

// 发布
eventEmitter.emit('sayHi', 'jack', 'sy');
eventEmitter.emit('sayGood', 'boy');