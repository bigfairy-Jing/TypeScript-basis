//接口编程  interface

interface Husband{
  sex:string
  interest:string
  maiBaoBao?:Boolean
}

let myHusband:Husband = {sex:'nan',interest:'找女朋友',maiBaoBao:true};

console.log(myHusband)

interface SearchMan {
  (source:string,subString:string):boolean
}
let mySarch:SearchMan;

mySarch = function(source:string,subString:string):boolean{
  let flag = source.search(subString);
  return flag!=-1
}

console.log(mySarch('矮','富，帅，德'));
console.log(mySarch('富，帅，德,矮','富，帅，德'));