//原型和原型链
//所有的函数对象都有一个属性prototype，指向一个对象（原型对象），由该函数创建的实例的原型对象，原型对象的构造器指向函数
function Person(){
    this.name = 'jack';
    
}
let p = new Person();

// 实例对象的隐式原型对象（__proto__）指向构造函数的显示原型对象(prototype)
p.__proto__===Person.prototype
//构造函数的原型对象的构造器（constructor）指向构造函数本身
Person.prototype.constructor === Person
//所有对象都有__protp__属性
//函数对象本质是由 new Function()创建，Function是所有函数对象的构造函数
Person.__proto__===Function.prototype
//原型对象也是一个对象，也有__proto__,原型对象是一个普通对象，其构造函数时Object()
Person.prototype.__proto__ === Object.prototype
//Object()是个对象,其构造函数是Function（）
Object.__proto__===Function.prototype
//Function()也是一个对象，有__proto__属性
Function.__proto__ === Function.prototype

//Function的原型对象的隐式原型
Function.prototype.__proto__===Object.prototype

//Object.protptype.__proto__null

