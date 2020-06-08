function search(age:number):string{
  return `找到了${age}小姐姐`;
}
var age:number = 18
console.log(search(age));


//有可选参数的函数 在后面加一个?   
function search2(age:number,fun?:string):string{
  return `找到了${age}小姐姐,身材`;
}

console.log()



function search3(age:number=18,fun?:string):string{
  return `找到了${age}小姐姐,身材${fun?fun:'水桶腰'}`;
}
console.log(search3(18))

//用  ...xuqiu:string[] 传入多个是字符串的数组
function search4(...xuqiu:string[]):string{
  let yy:string = 'hjy媳妇';
  for (let i = 0; i < xuqiu.length; i++) {
     yy = yy + xuqiu[i];
  }
  return yy;
}

console.log(search4('刘亦菲','舒畅'));
