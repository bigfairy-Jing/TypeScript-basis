var type:number;
console.log(type);
var age:number = 18;
var stature:number = 178.5;
var age:number = NaN;
console.log(age);
console.log(stature);
console.log('------------');

var hjy:string = 'huangjingyang';

console.log(hjy);

var flag:boolean = false;
console.log(flag);

//enum 类型 枚举 
enum REN{man='帅的',women='漂亮的',ts='gaygay的'};
enum REN2{MAN,WOMEN,ts};
console.log(REN);//这里打印出来的是索引.
console.log(REN.ts);//这里打印出来
console.log(REN2)
console.log(REN2.ts)

//any 类型 万能类型  
let any1:any = 1000;

any1 = 'jingyang';
any1 = {};
console.log(any1);

function warnUser(): void {
  alert("This is my warning message");
}

//null 