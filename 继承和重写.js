"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Jypang = /** @class */ (function () {
    function Jypang(name, age, skill) {
        this.name = name;
        this.age = age;
        this.skill = skill;
    }
    Jypang.prototype.user = function () {
        console.log('找小姐姐');
    };
    return Jypang;
}());
var jspangObj = new Jypang('jingyang', 18, 'shuai');
var jyShuai = /** @class */ (function (_super) {
    __extends(jyShuai, _super);
    function jyShuai() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.xingxiang = "帅气";
        return _this;
    }
    jyShuai.prototype.interst = function () {
        _super.prototype.user.call(this);
        console.log('建立公司平台');
    };
    jyShuai.prototype.zhengqian = function () {
        console.log('一天挣一个亿');
    };
    return jyShuai;
}(Jypang));
var shuai = new jyShuai('jingyang', 18, 'shuai');
// TypeScript 不支持多重继承
