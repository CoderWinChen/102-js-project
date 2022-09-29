import thenFs from 'then-fs';
const PromiseArr = [
    thenFs.readFile('./files/1.txt'),
    thenFs.readFile('./files/2.txt'),
    thenFs.readFile('./files/3.txt'),
]

// Promise.race()只会拿到一个结果，这个结果就是异步操作里面最快的结果
// 类似于java中线程争夺时间片的原理

Promise.race(PromiseArr).then(result => {
    console.log(result); 
})