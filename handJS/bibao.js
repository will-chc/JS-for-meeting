//每一个函数都会有一个闭包。闭包会保存该函数读取的上层作用域的变量。
//let fn = function() {} fn保存了function 的函数声明和该函数的闭包
function outter(){
    let num =10;
    function inner(){
        console.log(++num);
    }
    return inner;
}
let test1 = outter();
test1 ();//11
test1 ();//12
let test2 = outter();
test2();//11
