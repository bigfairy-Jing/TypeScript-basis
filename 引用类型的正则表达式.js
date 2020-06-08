"use strict";
//RegExp   string
//构造函数声明法
var reg1 = new RegExp('huangjingyang');
console.log(reg1);
var reg2 = new RegExp('huangjingyang', 'g');
console.log(reg2);
//字面量声明法则
var reg3 = /huangjingyang/i;
var reg4 = /huangjingyang/gi;
var reg5 = /huangjingyang/g;
//test(string)  exec(string);
var reg6 = /huangjingyang/i;
var web = 'huangjingyanghenshuai';
console.log(reg6.test(web));
console.log(reg6.exec(web)); //成功返回对应[ 'huangjingyang', index: 0, input: 'huangjingyanghenshuai' ],不成功返回null
