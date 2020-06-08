class Jypang{
  public name:string
  public age:number
  public skill:string
  constructor(name:string,age:number,skill:string){
    this.name = name;
    this.age = age;
    this.skill = skill;
  }
  public user(){
    console.log('找小姐姐');
  }
}

let jspangObj:Jypang = new Jypang('jingyang',18,'shuai');

class jyShuai extends Jypang{
  public xingxiang:string = "帅气";
  public interst(){
    super.user();
    console.log('建立公司平台');
  }
  public zhengqian(){
    console.log('一天挣一个亿')
  }
}
let shuai:jyShuai = new jyShuai('jingyang',18,'shuai');

// TypeScript 不支持多重继承

