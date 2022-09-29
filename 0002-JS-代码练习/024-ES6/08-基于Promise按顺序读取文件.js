import thenFs from 'then-fs'
thenFs.readFile('./files/1.txt','utf8').then((r1)=>{
    console.log(r1);
    return thenFs.readFile('./files/2.txt', 'utf8') 
    d//返回的是一个Prmoise对象，并没有嵌套调用回调，而是返回Promise，链式调用
})
// 只要是Promise对象，就会有then方法
.then((r2) => {
    console.log(r2);
    return thenFs.readFile('./files/3.txt','utf8')
})
.then((r3)=>{
    console.log(r3);
})