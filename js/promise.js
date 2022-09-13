// 手写实现一个promise

// 状态常量
const PENDDING = 'pendding';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class MyPromise {
    //exe执行器
    constructor(exe) {
        // 立即执行
        try{
            exe(this.resolve, this.reject);
        }catch(err){
            // 发生错误直接reject
            this.reject(err);
        }
    }
    status = PENDDING;
    value = null;
    reason = null;
    onFullfilled = [];
    onRejected = [];
    resolve(value) {
        // 只有状态为pendding，才能改变状态
        if (this.status === PENDDING) {
            this.status = FULFILLED;
            // 拿到成功的值
            this.value = value;
            // 执行所有的回调
            while(this.onFullfilled.length){
                this.onFullfilled.shift()(value);
            }
        }
    }
    reject(reason) {
        if (this.status === PENDDING) {
            this.status = REJECTED;
            // 拿到失败的原因
            this.reason = reason;
            // this.onRejected && this.onRejected(value);
            // 执行所有的回调
            while(this.onRejected.length){
                this.onRejected.shift()(value);
            }
        }
    }
    // then(onFullfilled,onRejected){
    //     //判断状态
    //     if(this.status === FULFILLED){
    //         //执行resolve的回调
    //         onFullfilled(this.value);
    //     }
    //     if (this.status === REJECTED) {
    //         // 执行reject的回调
    //         onRejected(this.reason);
    //     }
    //     //状态未改变时，暂存回调函数
    //     if(this.status === PENDDING){
    //         this.onFullfilled = onFullfilled;
    //         this.onRejected = onRejected;
    //     }
    // }
    // 实现链式调用改写then方法
    then(onFullfilled, onRejected) {
        //创建一个MyPromise对象
        const promise = new MyPromise((resolve, reject) => {
            if (this.status === FULFILLED) {
                // 获取回调函返回的结果
                const res = onFullfilled(this.value);
                resolvePromise(promise,res, resolve, reject);
            }
            if (this.status === REJECTED) {
                reject(this.reason);
            }
            // 状态未改变时，暂存回调函数
            if (this.status === PENDDING) {
                this.onFullfilled.push(onFullfilled) ;
                this.onRejected.push(onRejected);
            }
            return promise;
        })
    }
    resolvePromise(promise,res, resolve, reject) {
        // 返回时是原promise时 抛出错误
        if (res === promise) {
            return reject(new TypeError('Chaining cycle detected for promise #<Promise>'))
          }
        if (res instanceof MyPromise) {
            res.then(resolve, reject);
        }
        else {
            resolve(res);
        }
    }

}
const promise = new MyPromise((resolve, reject) => {
    // resolve('success')
    throw new Error('执行器错误')
})
 
promise.then(value => {
  console.log(1)
  console.log('resolve', value)
}, reason => {
  console.log(2)
  console.log(reason.message)
})
