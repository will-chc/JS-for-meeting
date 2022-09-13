//模拟new
function creatObject(Con) {
    //创建新对象
    let obj = {};

    //将obj的__proto__绑定构造函数的原型
    //不推荐使用 ob.__protp__ = Con.constructor;
    Object.setPrototypeOf(obj, Con.constructor);

    // 执行构造函数并接受返回值
    const res = Con.apply(obj, [].slice.call(arguments, 1));

    //若构造函数的返回值为对象，返回构造函数的返回值
    // 否则返回obj对象    
    return typeof res === 'object' ? res : obj

}