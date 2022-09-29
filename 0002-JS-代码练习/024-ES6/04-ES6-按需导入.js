import info, { s1, s2 as two, show } from "./03-ES6-按需导出.js"; //解构赋值
console.log(s1); //拿到按需导出的成员
// console.log(s2);  //拿到按需导出的成员
console.log(two);
show()  //拿到按需导出的方法
console.log(info); //拿到的就是默认导出的对象