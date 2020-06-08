//
let arr1:number[]; //数组类型 ---> 数字类型
let arr2:Array<string> //数组类型 ---> 字符串
let arr3:Array<boolean> //数组类型 ---> 布尔

//字面量赋值法则
let arr14:number[] = []
let arr5:number[] = [1,2,3,4,5];
let arr6:Array<string> = ['1','2','3'];
let arr7:Array<boolean> = [true,false]
//构造函数赋值法则

let arr18:number[] = new Array(18,16);
let arr19:Array<string> = new Array('19','19');
let arr20:Array<boolean> = new Array(false,true);
console.log(arr18,arr19,arr20)

//坑---->元祖  可以在数组中有两种或者多种数据类型   //元祖是有顺序的
let x:[string,number]
x = ['hello',10]
let y:[string,string]
y = ['string',1]