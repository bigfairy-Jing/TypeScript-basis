"use strict";
//变量的作用域,函数划分
function zhengxing() {
    var to = '刘德华';
    console.log(to);
}
console.log(zhengxing());
//这里转译有一个大坑 let转译变量作用域有问题的时候   转译会变成var  也就是没有问题
