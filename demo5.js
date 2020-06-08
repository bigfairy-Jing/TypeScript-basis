"use strict";
//
var arr1; //数组类型 ---> 数字类型
var arr2; //数组类型 ---> 字符串
var arr3; //数组类型 ---> 布尔
//字面量赋值法则
var arr14 = [];
var arr5 = [1, 2, 3, 4, 5];
var arr6 = ['1', '2', '3'];
var arr7 = [true, false];
//构造函数赋值法则
var arr18 = new Array(18, 16);
var arr19 = new Array('19', '19');
var arr20 = new Array(false, true);
console.log(arr18, arr19, arr20);
//坑---->元祖  可以在数组中有两种或者多种数据类型   //元祖是有顺序的
var x;
x = ['hello', 10];
var y;
y = ['string', 1];
