//函数声明法

function add(add1:number,add2:number):number{
  return add1+add2;
}
console.log(add(1,1));

//函数表达式法

var add2 = function (yuhou:any):number {
  return 1
}

console.log(add2)
console.log(add2('fasdf'))

//箭头函数表达式
let add3 = (n1:number,n2:number):number=>n1+n2;
console.log(add3(1,2));









