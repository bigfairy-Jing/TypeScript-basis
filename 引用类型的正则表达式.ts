//RegExp   string

//构造函数声明法
let reg1:RegExp = new RegExp('huangjingyang');
console.log(reg1);
let reg2:RegExp = new RegExp('huangjingyang','g');
console.log(reg2);



//字面量声明法则
let reg3:RegExp = /huangjingyang/i;
let reg4:RegExp = /huangjingyang/gi;
let reg5:RegExp = /huangjingyang/g;


//test(string)  exec(string);
let reg6:RegExp = /huangjingyang/i;
let web:string = 'huangjingyanghenshuai' 
console.log(reg6.test(web));

console.log(reg6.exec(web))//成功返回对应[ 'huangjingyang', index: 0, input: 'huangjingyanghenshuai' ],不成功返回null