//public  公有的
//protected  受保护的（八块腹肌） 我的子类   家人女朋友可以看到
//private  私有 只有自己可以看到  舌苔下面的东西

class XiaoJieJie{
  public sex:string
  protected name:string
  private age:number
  public constructor(sex:string,name:string,age:number){
    this.sex = sex;
    this.name = name;
    this.age = age;
  }
  public sayHello(){
    console.log('你好，大帅哥，黄靖阳')
  }
  protected sayLove(){
    console.log('我爱你，靖哥哥')
  }
}
var jiejie:XiaoJieJie = new XiaoJieJie('weman','liuyifei',18);
console.log(jiejie.sex);
console.log(jiejie.name);
console.log(jiejie.age);
console.log(jiejie.sayHello());
console.log(jiejie.sayLove());

//readonly  只读修饰符
class Man{
  public readonly sex:string='男';//只读属性必须在类上面直接赋值
}
var man:Man = new Man();
man.sex = '女';