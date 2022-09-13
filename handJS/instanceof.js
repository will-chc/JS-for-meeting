//实现 instanceof
// 实现instanceof本质上只要只要遍历实例对象的原型链，挨个往上查找看是否有与Fn的prototype相等的原型，直到最顶层Object还找不到，那么就返回false，否则结果就是true
function myInstanceof(obj,fnc){
    if(!(obj && ['object','function'].includes(typeof obj))){
        return false;
    }

    //获取obj的原型
    let proto = Object.getPrototypeOf(obj);

     //使用递归或者遍历
    //递归
    if(proto === fnc.prototype){
        return true;
    }
    else if(proto === null ){
        return false
    }
    else {
        return myInstanceof(proto,fnc)
    }

}

// 测试
let Fn = function () { }
let p1 = new Fn()

console.log(myInstanceof({}, Object)) // true
console.log(myInstanceof(p1, Fn)) // true
console.log(myInstanceof({}, Fn)) // false
console.log(myInstanceof(null, Fn)) // false
console.log(myInstanceof(1, Fn)) // false

