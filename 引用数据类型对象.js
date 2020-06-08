"use strict";
//不传递参数
var d = new Date();
console.log(d); //这里打印出
//传递参数
var d2 = new Date(1000); //1970-01-01 00:00:00 开始之后往后数1000
var d3 = new Date(2000); //1970-01-01 00:00:00 开始之后往后数1000
console.log(d2, d3);
//传递字符串
var d4 = new Date('2018/12/19 12:28:00');
var d5 = new Date('2018-12-19 12:28:00');
var d6 = new Date('2018-12-19T12:28:00');
console.log(d4, d5, d6);
//
// let d7:Date = new Date('year',,,,,,,,,,,,,,,,,,,,,,,,,,,,,)
