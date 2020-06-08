//不传递参数
let d:Date = new Date();
console.log(d);  //这里打印出

//传递参数

let d2:Date = new Date(1000); //1970-01-01 00:00:00 开始之后往后数1000
let d3:Date = new Date(2000); //1970-01-01 00:00:00 开始之后往后数1000
console.log(d2,d3); 


//传递字符串

let d4:Date = new Date('2018/12/19 12:28:00');
let d5:Date = new Date('2018-12-19 12:28:00');
let d6:Date = new Date('2018-12-19T12:28:00');
console.log(d4,d5,d6);

//
// let d7:Date = new Date('year',,,,,,,,,,,,,,,,,,,,,,,,,,,,,)