"use strict";
function search(age) {
    return "\u627E\u5230\u4E86" + age + "\u5C0F\u59D0\u59D0";
}
var age = 18;
console.log(search(age));
//有可选参数的函数 在后面加一个?   
function search2(age, fun) {
    return "\u627E\u5230\u4E86" + age + "\u5C0F\u59D0\u59D0,\u8EAB\u6750";
}
console.log();
function search3(age, fun) {
    if (age === void 0) { age = 18; }
    return "\u627E\u5230\u4E86" + age + "\u5C0F\u59D0\u59D0,\u8EAB\u6750" + (fun ? fun : '水桶腰');
}
console.log(search3(18));
//用  ...xuqiu:string[] 传入多个是字符串的数组
function search4() {
    var xuqiu = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        xuqiu[_i] = arguments[_i];
    }
    var yy = 'hjy媳妇';
    for (var i = 0; i < xuqiu.length; i++) {
        yy = yy + xuqiu[i];
    }
    return yy;
}
console.log(search4('刘亦菲', '舒畅'));
