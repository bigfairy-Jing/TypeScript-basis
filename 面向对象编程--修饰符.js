"use strict";
//public  公有的
//protected  受保护的（八块腹肌） 我的子类   家人女朋友可以看到
//private  私有 只有自己可以看到  舌苔下面的东西
var XiaoJieJie = /** @class */ (function () {
    function XiaoJieJie(sex, name, age) {
        this.sex = sex;
        this.name = name;
        this.age = age;
    }
    XiaoJieJie.prototype.sayHello = function () {
        console.log('你好，大帅哥，黄靖阳');
    };
    XiaoJieJie.prototype.sayLove = function () {
        console.log('我爱你，靖哥哥');
    };
    return XiaoJieJie;
}());
var jiejie = new XiaoJieJie('weman', 'liuyifei', 18);
console.log(jiejie.sex);
console.log(jiejie.name);
console.log(jiejie.age);
console.log(jiejie.sayHello());
console.log(jiejie.sayLove());
//readonly  只读修饰符
var Man = /** @class */ (function () {
    function Man() {
        this.sex = '男'; //只读属性必须在类上面直接赋值
    }
    return Man;
}());
var man = new Man();
man.sex = '女';
