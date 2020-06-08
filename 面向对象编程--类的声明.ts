//类是对象事务的一个抽象，对象是类的具体表现

class Jy{
  name:string
  age:number
  constructor(name:string,age:number){
    this.name = name;
    this.age = age
  }
  say(){
    console.log(this.name)
  }
}

let jy = new Jy('huangjingyang',18);
console.log(jy.say());