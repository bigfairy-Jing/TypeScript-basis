"use strict";
//接口编程  interface
var myHusband = { sex: 'nan', interest: '找女朋友', maiBaoBao: true };
console.log(myHusband);
var mySarch;
mySarch = function (source, subString) {
    var flag = source.search(subString);
    return flag != -1;
};
console.log(mySarch('矮', '富，帅，德'));
console.log(mySarch('富，帅，德,矮', '富，帅，德'));
