//命名空间 namespace 
namespace shuaiGe{
  export class Dehua{
    public name:string = 'liudehua'
    TreeWalker(){
      console.log('我是黄靖阳，跟刘德华一样的男人')
    }
  }
}

namespace buShuaiGe{
  export class Dehua{
    public name:string = 'liudehua'
    TreeWalker(){
      console.log('我是吴孟达，一个笑星')
    }
  }
}
let persion1 = new shuaiGe.Dehua();
let persion2 = new buShuaiGe.Dehua();

persion1.TreeWalker();
persion2.TreeWalker();