"use strict";
//类是对象事务的一个抽象，对象是类的具体表现
var Jy = /** @class */ (function () {
    function Jy(name, age) {
        this.name = name;
        this.age = age;
    }
    Jy.prototype.say = function () {
        console.log(this.name);
    };
    return Jy;
}());
var jy = new Jy('huangjingyang', 18);
console.log(jy.say());
