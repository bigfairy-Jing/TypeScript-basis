"use strict";
var type;
console.log(type);
var age = 18;
var stature = 178.5;
var age = NaN;
console.log(age);
console.log(stature);
console.log('------------');
var hjy = 'huangjingyang';
console.log(hjy);
var flag = false;
console.log(flag);
//enum 类型 枚举 
var REN;
(function (REN) {
    REN["man"] = "\u5E05\u7684";
    REN["women"] = "\u6F02\u4EAE\u7684";
    REN["ts"] = "gaygay\u7684";
})(REN || (REN = {}));
;
var REN2;
(function (REN2) {
    REN2[REN2["MAN"] = 0] = "MAN";
    REN2[REN2["WOMEN"] = 1] = "WOMEN";
    REN2[REN2["ts"] = 2] = "ts";
})(REN2 || (REN2 = {}));
;
console.log(REN); //这里打印出来的是索引.
console.log(REN.ts); //这里打印出来
console.log(REN2);
console.log(REN2.ts);
//any 类型 万能类型  
var any1 = 1000;
any1 = 'jingyang';
any1 = {};
console.log(any1);
function warnUser() {
    alert("This is my warning message");
}
//null 
