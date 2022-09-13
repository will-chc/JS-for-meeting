// 手写一个深拷贝

function deepClone(obj,map = new Map()){
    // 基本类型直接返回
    if(typeof obj !=='object'){
        return obj;
    }
    let res  = {};
    // 检测是否有循环引用，有则返回
    if(map.get(obj)){
        return map.get(obj);
    }
    // 判断是否是数组
    if(obj instanceof Array || Object.prototype.toString(obj) === '[Object Array]'){
        res = []
    }
    // 存入map中，用于循环应用的检测
    map.set(obj,res);
    for(let key in obj){
        // 排除原型链上的属性
        if(obj.hasOwnProperty(key)){
            // 递归调用
           res[key] = deepClone(obj[key],map);
        }
    }
    return res;
}

// let obj = {
//     a : 1,
//     b:{
//         c:2,
//         d:undefined
//     }
// }

// 循环引用
// let obj = {
//     a:{name:'hhh',age:'18'},
// }
// obj.obj = obj;

//数组
let obj = [1,[1,2],{a:'12313'}]

let cloneObj = deepClone(obj);
console.log(cloneObj);