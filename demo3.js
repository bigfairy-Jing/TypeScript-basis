"use strict";
//函数声明法
function add(add1, add2) {
    return add1 + add2;
}
console.log(add(1, 1));
//函数表达式法
var add2 = function (yuhou) {
    return 1;
};
console.log(add2);
console.log(add2('fasdf'));
//箭头函数表达式
var add3 = function (n1, n2) { return n1 + n2; };
console.log(add3(1, 2));
