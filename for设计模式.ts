class Person {
  public name: string;
  public age: number;
  private goddess: string;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this.goddess = '刘亦菲';
  }
  eat() {
    console.log(`${this.name} eat`);
  }
  sleep() {
    console.log(`${this.name} sleep`);
  }
  protected getGoddess() {
    console.log(this.goddess);
  }
}

class WebJingPeople extends Person {
  public sex: string;
  private wife: string;
  constructor(name: string, age: number, sex: string) {
    super(name, age);
    this.sex = sex;
    this.wife = '刘二菲';
  }
  study() {
    console.log(`${this.name} 热爱学习`);
  }
  getSex() {
    console.log(`${this.name} 性别 ${this.sex}`);
  }
  getPersionGoddess() {
    this.getGoddess();
  }
}

let bigFairy = new WebJingPeople('hjy', 18, '男');
bigFairy.study();
bigFairy.getSex();
console.log(bigFairy.sex);
console.log(bigFairy.name);
console.log(bigFairy.wife);
console.log(bigFairy.getPersionGoddess());
console.log(bigFairy.getGoddess());
